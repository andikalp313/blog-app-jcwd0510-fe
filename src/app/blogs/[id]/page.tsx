import BlogDetailPage from "@/features/blog/BlogDetailPage";
import React from "react";

const BlogDetail = ({ params }: { params: { id: string } }) => {
  return <BlogDetailPage blogId={Number(params.id)} />;
};

export default BlogDetail;
