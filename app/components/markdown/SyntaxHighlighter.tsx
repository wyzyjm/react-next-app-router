import React from "react"
// import  from "react-syntax-highlighter"
import SyntaxHighlighterComponent from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

const SyntaxHighlighter = (props: any) => {
    const { children, language, ...rest } = props
    return (
        <SyntaxHighlighterComponent
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={language}
            style={dark}
        />
    )
}

export default SyntaxHighlighter
