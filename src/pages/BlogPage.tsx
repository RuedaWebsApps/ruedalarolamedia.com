import React from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { blogPosts, blogPostsEs } from '../content/siteContent';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogPageProps {
  lang: Language;
}

export const BlogPage: React.FC<BlogPageProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const posts = isEs ? blogPostsEs : blogPosts;

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-white">
      <Navbar lang={lang} currentPath={isEs ? '/es/blog' : '/blog'} />

      <main id="main" className="flex-grow">
        {/* Header */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#141226] via-[#0b0f17] to-[#0b0f17] text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-[#ec186a]" />
              <span>{isEs ? 'Perspectivas & Estrategia' : 'Insights & Strategy'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {isEs ? (
                <>
                  Blog de <span className="text-gradient-brand">Rueda La Rola Media</span>
                </>
              ) : (
                <>
                  The Rueda La Rola <span className="text-gradient-brand">Media Blog</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              {isEs
                ? 'Artículos, guías y casos de estudio sobre rotulación vehicular comercial, branding estratégico y tecnologías web para negocios en crecimiento.'
                : 'Articles, practical guides, and industry analyses on commercial vehicle wraps, strategic branding, and web performance for scaling businesses.'}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl overflow-hidden bg-[#141c27] border border-white/10 hover:border-purple-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Featured Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-black/40 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-purple-300 border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#ec186a]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Article Content Preview */}
                <div className="p-6 sm:p-7 pt-0 border-t border-white/5 mt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-purple-400 group-hover:text-white flex items-center gap-1 transition-colors">
                      <span>{isEs ? 'Leer artículo' : 'Read article'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
