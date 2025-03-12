import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            // React 相关规则示例
            // "react/no-children-prop": "off", // 关闭该规则
        },
    },
    // ts规则
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "no-unused-vars": "on",
        },
    },
]

export default eslintConfig
