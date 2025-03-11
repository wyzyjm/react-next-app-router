"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { products } from "@/mock/product";
interface IProps {
    params: {
        id: string;
    };
}
const Page = (props: IProps) => {
    const router = useRouter();
    const {
        params: { id },
    } = props;

    const product = products.find((v) => v.id === +id);
    if (!product) return null;
    return (
        <div
            className="fixed inset-0 bg-gray-400/[.9] flex justify-center items-center"
            onClick={router.back}
        >
            <Image
                className="rounded-md"
                width={400}
                height={400}
                src={product.src}
                alt={product.alt}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default Page;
