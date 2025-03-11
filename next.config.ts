import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // 环境变量
    env: {},
    // eslint: {
    // 	// 只在这些 目录下 运行 eslint
    // 	dirs: ["app", "bin", "config", "context", "hooks", "i18n", "models", "service", "test", "types", "utils"], // 忽略 build 时的 eslint
    // 	ignoreDuringBuilds: true
    // },
    typescript: {
        ignoreBuildErrors: true,
        // 自定义tsconfig.json的路径
        // tsconfigPath: "tsconfig.json"
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config;
    },
    compress: false,
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindcss.com",
                pathname: "/plus-assets/img/ecommerce-images/**",
            },
        ],
    },
};

export default nextConfig;
