import { createDirectus, rest, } from '@directus/sdk';
import { CONTENTS_BASE_URL } from '../consts';

type Global = {
  title: string;
  description: string;
}

type Author = {
  name: string
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Post = {
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  date_updated: string;
}

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
}

const directus = createDirectus<Schema>(CONTENTS_BASE_URL).with(rest());

export default directus;