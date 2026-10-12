import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { SEO, JsonLd } from "@/components/shared";
import { SITE } from "@/config/site";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/jsonld";
import { NotFound } from "./NotFound";

const WA = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Olá! Li o artigo no site e preciso do Plano de Reforma (NBR 16280) com ART para o meu apartamento.",
)}`;

export function BlogPost() {
  const { slug = "" } = useParams();
  const post = getBlogPostBySlug(slug);
  if (!post) return <NotFound />;

  const outros = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const path = `/blog/${post.slug}`;

  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        titleSuffix="brand"
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.cardTitle, path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          inLanguage: "pt-BR",
          author: { "@type": "Person", name: SITE.legalName },
          publisher: { "@type": "Organization", name: SITE.shortName },
          mainEntityOfPage: `${SITE.url}${path}`,
        }}
      />

      <div className="pt-28 pb-4 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-2 text-sm text-[#93a7c6]">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#B9F227]">{post.cardTitle}</span>
          </nav>
        </div>
      </div>

      <article>
        <div className="py-14 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
          <div className="container-custom max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os artigos
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-[#8ea3c2]">
              Por Eng. Civil Nielson P. de Castilho Júnior · CREA 5071806455 ·{" "}
              {post.readingMinutes} min de leitura
            </p>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-custom max-w-3xl">
            <p className="text-xl text-[#cbd7e8] leading-relaxed">{post.excerpt}</p>
            {post.sections.map((s) => (
              <section key={s.heading} className="mt-10">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-[#b9c8e0] text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[#cbd7e8]">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#B9F227]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className="mt-14 rounded-2xl border border-[#B9F227]/25 bg-[#0A1428] p-8 text-center shadow-[0_0_50px_-20px_rgba(185,242,39,.35)]">
              <h2 className="font-display text-2xl font-semibold text-white">
                Precisa do Plano de Reforma com ART?
              </h2>
              <p className="mt-3 text-[#b9c8e0]">
                Faço o Plano de Reforma NBR 16280, o Memorial Descritivo e a ART
                online, para condomínios em SP e MT.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
                >
                  <Phone className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
                <Link
                  to="/plano-de-reforma"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10"
                >
                  Como funciona
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="pb-20">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white mb-6">
            Leia também
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {outros.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#B9F227]/40"
              >
                <p className="font-display text-lg font-semibold text-white">{p.cardTitle}</p>
                <p className="mt-2 text-sm text-[#b9c8e0]">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
