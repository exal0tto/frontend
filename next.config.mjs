import mdx from '@next/mdx';

import rehypeAutolink from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkPrism from 'remark-prism';
import remarkToc from 'remark-toc';


const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkToc, remarkMath, remarkPrism],
    rehypePlugins: [rehypeSlug, rehypeAutolink, rehypeKatex],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  trailingSlash: true,
});
