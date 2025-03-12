/* 
                                                           react-markdown
         +----------------------------------------------------------------------------------------------------------------+
         |                                                                                                                |
         |  +----------+        +----------------+        +---------------+       +----------------+       +------------+ |
         |  |          |        |                |        |               |       |                |       |            | |
markdown-+->+  remark  +-mdast->+ remark plugins +-mdast->+ remark-rehype +-hast->+ rehype plugins +-hast->+ components +-+->react elements
         |  |          |        |                |        |               |       |                |       |            | |
         |  +----------+        +----------------+        +---------------+       +----------------+       +------------+ |
         |                                                                                                                |
         +----------------------------------------------------------------------------------------------------------------+
        1. 通过 Remark 将 Markdown 解析为 mdast （Markdown 语法树）
        2. 通过 Remark plugins 将 mdast 转换为 mdast（Markdown 生态系统）
        3. 通过 remark-rehype 将 mdast 转换为 hast （HTML 语法树）
        4. 通过 Rehype-plugins 将 hast 转换为 hast （HTML 生态系统）
        5. 使用组件 render hast 到 React

## 多模态
1. 基础 markdown
2. 代码块高亮
3. 数学公式
4. 常用图表: @antv/gpt-vis
 */

import React from "react"
import Markdonw from "react-markdown"
// 插件:
import remarkGfm from "remark-gfm" // 对脚注、删除线、表格、任务列表和 URL
import remarkMath from "remark-math" // 数学运算
import rehypeKatex from "rehype-katex" // 呈现数学运算
import "katex/dist/katex.min.css" // `rehype-katex`
import rehypeRaw from "rehype-raw" // 允许使用 HTML 标签
import remarkBreaks from "remark-breaks" // 允许在 Markdown 中使用换行符

// 语法高亮
import SyntaxHighlighter from "@/app/components/markdown/SyntaxHighlighter"

// mock data
import { markdown_content } from "@/mock/markdown"

// 代码块
const CodeCoponent = (props: any) => {
    const { children, className, node, ...rest } = props
    const match = /language-(\w+)/.exec(className || "")
    return match ? (
        <SyntaxHighlighter {...rest} children={children} language={match[1]} />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    )
}

const Page = () => {
    return (
        <div className="container mx-auto">
            <Markdonw
                components={{
                    code: CodeCoponent, // 代码块
                    // 重写 em 标签
                    em(props) {
                        const { node, ...rest } = props
                        return <i className="text-red-300" {...rest} />
                    },
                }}
                // 扩展插件
                remarkPlugins={[
                    [
                        remarkGfm,
                        {
                            singleTilde: false, //只允许双波浪号作为删除线
                        },
                    ],
                    remarkMath,
                    remarkBreaks,
                ]}
                // 转换插件
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={markdown_content}
            />
        </div>
    )
}

export default Page

/* 
    插件查找方法:
    1. remarkPlugins:  
        https://github.com/remarkjs/awesome-remark
        https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
        https://github.com/topics/remark-plugin
    2. rehypePlugins:
        https://github.com/rehypejs/awesome-rehype
        https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins
        https://github.com/topics/rehype-plugin

        
 */
