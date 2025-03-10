import React from "react";
import BlogList from "@/app/components/blog/list";
import type { Metadata } from "next";

// 网页信息
export const metadata: Metadata = {
    title: "博客列表",
    description: "博客列表描述",
};

const Page = () => {
    return <BlogList />;
};

export default Page;
