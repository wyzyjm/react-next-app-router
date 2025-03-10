export const blog_data = {
	blogList: {
		page: 1,
		pageSize: 10,
		total: 35,
		totalPages: 4,
		list: [
			{
				id: 1,
				title: "前端工程化实践指南",
				summary: "深入探讨现代前端工程化解决方案...",
				author: {
					id: 101,
					name: "王前端",
					avatar: "https://example.com/avatars/101.jpg"
				},
				publishTime: "2024-03-15T09:30:00Z",
				coverImage: "https://example.com/covers/frontend-eng.jpg",
				readCount: 2543,
				tags: ["前端", "工程化", "Webpack"]
			},
			{
				id: 2,
				title: "TypeScript 高级类型解析",
				summary: "TypeScript类型系统深度解析...",
				author: {
					id: 102,
					name: "李类型",
					avatar: "https://example.com/avatars/102.jpg"
				},
				publishTime: "2024-03-14T15:20:00Z",
				coverImage: null,
				readCount: 1821,
				tags: ["TypeScript", "编程"]
			}
		]
	},

	blogDetail: {
		id: 1,
		title: "前端工程化实践指南",
		content: "## 第一章：现代前端开发挑战\n\n随着前端应用复杂度的不断提升...\n\n```javascript\n// 示例代码\nconst config = {\n  entry: './src/index.js',\n  // 更多配置...\n};\n```",
		category: "技术文章",
		author: {
			id: 101,
			name: "王前端",
			avatar: "https://example.com/avatars/101.jpg",
			bio: "资深前端工程师，专注Web开发领域10年"
		},
		publishTime: "2024-03-15T09:30:00Z",
		updateTime: "2024-03-16T10:00:00Z",
		readCount: 2895,
		likeCount: 156,
		commentCount: 23,
		tags: ["前端", "工程化", "Webpack", "CI/CD"],
		coverImage: "https://example.com/covers/frontend-eng.jpg",
		relatedBlogs: [
			{
				id: 3,
				title: "Webpack性能优化实战",
				summary: "提升构建速度的10个技巧..."
			},
			{
				id: 4,
				title: "现代CSS架构设计",
				summary: "可维护的CSS方案探索..."
			}
		]
	}
}
