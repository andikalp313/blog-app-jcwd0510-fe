"use client";
import useGetBlog from "@/hooks/api/blog/useGetBlog";
import { format } from "date-fns";
import { Badge, Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import SkeletonBlog from "./components/SkeletonBlog";
import Markdown from "../../components/Markdown";
import { Button } from "@/components/ui/button";
import ModalDelete from "./components/ModalDelete";
import useDeleteBlog from "@/hooks/api/blog/useDeleteBlog";
import { useAppSelector } from "@/redux/hooks";

interface BlogDetailPageProps {
  blogId: number;
}

const BlogDetailPage: FC<BlogDetailPageProps> = ({ blogId }) => {
  const { data, isPending: isPendingGet } = useGetBlog(blogId);

  const { mutateAsync: deleteBlog, isPending: isPendingDelete } =
    useDeleteBlog();

  const { id } = useAppSelector((state) => state.user);

  const onClickDeleteBlog = async () => {
    await deleteBlog(blogId);
  };
  if (isPendingGet) {
    return <SkeletonBlog />;
  }
  if (!data) {
    return <h1>No Data</h1>;
  }
  return (
    <main className="container mx-auto max-w-6xl px-4">
      <section className="space-y-2">
        <Badge>{data.category}</Badge>
        <h1 className="text-3xl font-semibold">{data.title}</h1>

        <div className="flex items-center justify-between">
          <p>
            {format(new Date(data.createdAt), "dd MMM yyyy")} - {data.user.name}
          </p>

          {id === data.userId && (
            <ModalDelete
              onClick={onClickDeleteBlog}
              isPending={isPendingDelete}
            />
          )}

          {/* <Button variant="outline" size="icon">
            <Trash2 />
          </Button> */}
        </div>

        <div className="relative h-[400px]">
          <Image src={data.thumbnail} alt="" fill className="object-cover" />
        </div>
      </section>
      <Markdown content={data.content} />
    </main>
  );
};

export default BlogDetailPage;
