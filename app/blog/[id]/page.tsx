import { Card } from "antd";
import React from "react";
import { blog_data } from "@/mock/blog";

const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { title, content } = blog_data.blogDetail;
    return (
        <Card title={`${title}${id}`} variant="borderless">
            <div>{content}</div>
        </Card>
    );
};

export default Page;
