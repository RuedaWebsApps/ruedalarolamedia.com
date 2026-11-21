import React from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { blogPosts, blogPostsEs } from '../content/siteContent';

interface BlogPageProps {
  lang: Language;
}

export const BlogPage: React.FC<BlogPageProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const posts = isEs ? blogPostsEs : blogPosts;

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar lang={lang} currentPath={isEs ? '/es/blog' : '/blog'} />

      <main id="main" className="flex-grow">
        {/* Editorial Header */}
        <section className="py-20 lg:py-24 bg-[#141c27] text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h5 className="font-dm text-[14px] uppercase tracking-[2px] text-white/70 mb-3">
              Rueda La Rola Media
            </h5>
            <h1 className="font-gloock text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.1] text-white font-normal">
              Blog
            </h1>
            <p className="mt-4 font-dm text-[16px] leading-[28px] text-white/85 max-w-2xl mx-auto">
              {isEs
                ? 'Ideas, tendencias y estrategias sobre branding, diseño web, relaciones públicas y wraps comerciales.'
                : 'Ideas, trends, and strategies on branding, web design, public relations, and commercial wraps.'}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24 max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-[#ffffff] border border-black/10 rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(96,49,138,0.16)] transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#141c27] relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#60318a] text-white font-dm text-[11px] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="font-dm text-[12px] uppercase tracking-wider text-[#60318a] mb-2">
                      {post.date} · {post.readTime}
                    </p>
                    <h2 className="font-gloock text-[22px] leading-[1.3] text-[#000000] group-hover:text-[#60318a] transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="font-dm text-[15px] leading-[25px] text-[#4a4a4a]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-3 border-t border-black/5 flex items-center justify-between font-dm text-[13px] font-bold text-[#60318a]">
                  <span>{post.author}</span>
                  <a href={isEs ? '/contacto' : '/contact'} className="hover:underline">
                    {isEs ? 'Consultar →' : 'Inquire →'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
