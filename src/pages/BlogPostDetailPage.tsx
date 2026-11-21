import React from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ClientFormSection } from '../components/ClientFormSection';
import { blogPosts, blogPostsEs } from '../content/siteContent';
import { getServiceLandingUrl } from '../content/serviceLandings';

interface BlogPostDetailPageProps {
  slug: string;
  lang: Language;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({ slug, lang }) => {
  const isEs = lang === 'es';
  const posts = isEs ? blogPostsEs : blogPosts;
  const post = posts.find((p) => p.slug === slug);
  const currentPath = isEs ? `/es/blog/${slug}` : `/blog/${slug}`;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
        <Navbar lang={lang} currentPath={currentPath} />
        <main id="main" className="flex-grow flex items-center justify-center p-12 text-center">
          <div>
            <h1 className="font-gloock text-4xl mb-4">
              {isEs ? 'Artículo no encontrado' : 'Article Not Found'}
            </h1>
            <a
              href={isEs ? '/es/blog' : '/blog'}
              className="inline-block px-7 py-3 bg-[#6a35ff] text-white font-dm text-sm font-semibold rounded-[4px]"
            >
              {isEs ? 'Volver al Blog' : 'Back to Blog'}
            </a>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedServiceId =
    post.slug.includes('wrap')
      ? 'wrap'
      : post.slug.includes('brand')
      ? 'brand-design'
      : 'web-design';

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow">
        {/* Editorial Article Header */}
        <section className="w-full bg-[#141c27] text-white py-16 lg:py-24 px-6 sm:px-10 lg:px-[90px]">
          <div className="max-w-[960px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                href={isEs ? '/es/blog' : '/blog'}
                className="font-dm text-[12px] uppercase tracking-wider text-white/70 hover:text-white"
              >
                ← {isEs ? 'Volver al Blog' : 'Back to Blog'}
              </a>
              <span className="text-white/30">·</span>
              <span className="px-3.5 py-1 rounded-full bg-[#6a35ff] text-white font-dm text-[11px] uppercase tracking-wider">
                {post.category}
              </span>
              <span className="font-dm text-[13px] text-white/75">
                {post.date} · {post.readTime}
              </span>
            </div>

            <h1 className="font-gloock text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.12] text-white font-normal mb-6">
              {post.title}
            </h1>

            <p className="font-dm text-[17px] sm:text-[19px] leading-[1.6] text-white/85">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Hero Image */}
        <section className="max-w-[1040px] mx-auto px-6 sm:px-10 -mt-10 relative z-10">
          <div className="rounded-[20px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.18)] bg-[#000000]">
            <img
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              fetchPriority="high"
              className="w-full h-auto max-h-[540px] object-cover block"
            />
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-[820px] mx-auto px-6 sm:px-10 py-14 lg:py-20 space-y-6 font-dm text-[17px] leading-[31px] text-[#222222]">
          {post.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Contextual Service Landing CTA Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-[18px] bg-[#f4f4f4] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="font-josefin text-[11px] font-bold uppercase tracking-[1.8px] text-[#60318a]">
                {isEs ? 'SERVICIO ESPECIALIZADO' : 'SPECIALIZED AGENCY SERVICE'}
              </span>
              <h3 className="font-gloock text-[24px] sm:text-[28px] text-[#000000] mt-1">
                {isEs
                  ? '¿Listo para llevar este nivel de calidad a tu marca?'
                  : 'Ready to bring this standard of craftsmanship to your brand?'}
              </h3>
            </div>
            <a
              href={getServiceLandingUrl(relatedServiceId, lang)}
              className="shrink-0 px-7 py-3.5 rounded-[4px] bg-[#6a35ff] hover:bg-[#60318a] text-white font-dm text-[14px] font-bold uppercase tracking-wider transition-colors"
            >
              {isEs ? 'Ver Servicio →' : 'Explore Service →'}
            </a>
          </div>
        </article>

        {/* More Articles */}
        <section className="w-full bg-[#f4f4f4] py-16 px-6 sm:px-10 lg:px-[90px] border-t border-black/10">
          <div className="max-w-[1160px] mx-auto">
            <h2 className="font-gloock text-[28px] sm:text-[34px] text-[#000000] mb-8">
              {isEs ? 'Más artículos recomendados' : 'More Recommended Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((op) => (
                <a
                  key={op.id}
                  href={isEs ? `/es/blog/${op.slug}` : `/blog/${op.slug}`}
                  className="group bg-[#ffffff] border border-black/10 rounded-[14px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#141c27]">
                    <img
                      src={op.image}
                      alt={op.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-dm text-[12px] text-[#60318a] uppercase font-semibold">
                      {op.category} · {op.readTime}
                    </span>
                    <h3 className="font-gloock text-[22px] text-[#000000] group-hover:text-[#6a35ff] transition-colors mt-1.5">
                      {op.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ClientFormSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};
