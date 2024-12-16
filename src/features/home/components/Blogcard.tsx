import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { FC } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              fill
              className="object-cover duration-100 hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-sm bg-green-100 text-green-600"
            >
              {blog.category}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-sm bg-gray-100 text-gray-600"
            >
              {format(blog.createdAt, "dd MMM yyyy")}
            </Badge>
          </div>

          <h2 className="my-2 line-clamp-2 text-lg font-bold">{blog.title}</h2>
          <p className="line-clamp-4">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
