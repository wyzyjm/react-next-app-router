"use client";
import React from "react";
import { blog_data } from "@/mock/blog";
import { List, Avatar } from "antd";
import Link from "next/link";

const Page = () => {
    const list = blog_data.blogList.list;
    return (
        <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                        }
                        title={
                            <Link href={`/blog/${item.id}`}>{item.title}</Link>
                        }
                        description={item.summary}
                    />
                </List.Item>
            )}
        />
    );
};

export default Page;
