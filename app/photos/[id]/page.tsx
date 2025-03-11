import React from "react";
import Image from "next/image";
import { products } from "@/mock/product";

interface IProps {
    params: { id: string };
}
const Page = (params: IProps) => {
    const { id } = params.params;
    const photo = products.find((v) => v.id === +id);
    if (!photo) return null;
    return (
        <div className="container mx-auto">
            <Image
                src={photo.src}
                alt={photo.alt}
                className="flex mx-auto aspect-square  rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                width={300}
                height={300}
            />
            <div className="border-2 border-dashed border-gray-500 p-2 mt-2">
                <p>
                    <strong>title：</strong>
                    {photo.title}
                </p>
                <p>
                    <strong>price：</strong>${photo.price}
                </p>
                <p>
                    <strong>summary：</strong>
                    {photo.alt}
                </p>
            </div>
        </div>
    );
};

export default Page;
