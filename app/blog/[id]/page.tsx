import { Card } from "antd";
import React from "react";
import { blog_data } from "@/mock/blog";
import type { Metadata, ResolvingMetadata } from "next";

interface IProps {
    params: { id: string };
    parent: ResolvingMetadata;
}
// 动态网页信息
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
    const { id } = await params;

    // （可选）访问和扩展（而不是替换）父元数据
    // const previousImages = (await parent).openGraph?.images || [];

    return { title: `博客详情-${id}` };
}

// 页面
const Page = ({ params }: IProps) => {
    const { id } = params;
    const { title, content } = blog_data.blogDetail;
    return (
        <Card title={`${title}${id}`} variant="borderless">
            <div>{content}</div>
        </Card>
    );
};

export default Page;
