// GET
// HEAD
// POST
// PUT
// DELETE
// PATCH
// OPTIONS
import type { NextRequest } from "next/server"
import db from "@/app/utils/db"

// 获取请求信息
export async function GET(
    request: NextRequest
    // { params }: { params: Promise<{ Id: string }> }
) {
    // console.log("request", request);
    await db.update(({ posts }) => posts.push("hello world"))

    return Response.json({ message: "Hello World" })
}

// 处理 cookie
// import { cookies } from "next/headers";
// export async function GET(request: NextRequest) {
//     const cookieStore = await cookies();
//     const a = cookieStore.get("a");
//     const b = cookieStore.set("b", "1");
//     const c = cookieStore.delete("c");
// }
