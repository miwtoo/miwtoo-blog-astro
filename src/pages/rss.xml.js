import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content';
import directus from "../lib/directus";
import { readSingleton, readItems } from "@directus/sdk";
const global = await directus.request(readSingleton("global"));

export async function GET(context) {
	const posts = await directus.request(readItems("posts", {
		fields: ['*', { relation: ['*'] }],
	}));
	return rss({
		title: global.title,
		description: global.description,
		site: context.site,
		items: posts.map((post) => ({
			pubDate: new Date(post.published_date),
			content: post.content,
			link: `/blog/${post.slug}/`,
		})),
	});
}
