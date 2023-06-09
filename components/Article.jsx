import {MDXProvider} from '@mdx-js/react';

import Link from 'next/link';

import {Container} from 'react-bootstrap';

import {ArticleHeader} from '@/components/Headers';
import {MainBody} from '@/components/MainBody';


const components = {
  a: ({children, href, ...props}) => {
    if (/^[^/]+:/.test(href)) {
      // external link
      return (
        <a href={href} {...props} target="_blank" rel="noreferrer">{children}</a>
      );
    } else {
      return (
        <Link href={href} {...props}>{children}</Link>
      );
    }
  },
  table: ({children, className = '', ...props}) => (
    <table className={className + ' data-table'} {...props}>{children}</table>
  ),
};


export const Article = ({meta: {date}, children}) => (
  <MainBody>
    <ArticleHeader/>
    <section className="article">
      <Container>
        <div className="article__wrap d-flex justify-content-start align-items-start flex-column flex-lg-row">
          <aside className="article__sidebar">
            <div className="article__date">{date}</div>
          </aside>
          <MDXProvider components={components}>
            <article className="article__body text">{children}</article>
          </MDXProvider>
        </div>
      </Container>
    </section>
  </MainBody>
);


export const Whitepaper = ({meta: {date}, children}) => (
  <MainBody>
    <ArticleHeader/>
    <section className="whitepaper">
      <Container>
        <div className="whitepaper__wrap d-flex justify-content-start align-items-start flex-column flex-lg-row">
          <aside className="whitepaper__sidebar">
            <div className="whitepaper__date">{date}</div>
          </aside>
          <MDXProvider components={components}>
            <article className="whitepaper__body whitepaper-text">{children}</article>
          </MDXProvider>
        </div>
      </Container>
    </section>
  </MainBody>
);
