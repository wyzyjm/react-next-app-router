import type { NextRequest } from "next/server"
import { readFile } from "fs/promises"
import { WorkBook, utils, read } from "xlsx"

export async function GET(request: NextRequest) {
    try {
        console.log("GET /api/excel")

        const filePath = `${process.cwd()}/mock/excel/SaaS台账数据版-收入核查（订单VS合同）-2.14-3.10调整.xlsx`
        // const filePath = `${process.cwd()}/mock/excel/test.xlsx`
        const buffer = await readFile(filePath)
        console.log("excel读取成功")
        // 解析 Excel
        const workbook: WorkBook = read(buffer, { type: "buffer" })
        // const sheetName = workbook.SheetNames[0]
        const jsonData = utils.sheet_to_json(workbook.Sheets["发票汇总"], {
            range: "A1:D1000", // 仅读取前4列1000行
            blankrows: false,
            header: ["购买方名称", "金额"], // 仅转换两列
        })
        console.log("excel转json成功")
        return Response.json(jsonData)
    } catch (error) {
        return Response.json({ message: "error" })
    }
}
