import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { SEO, JsonLd } from "@/components/shared";
import { blogPosts } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/jsonld";

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export function Blog() {
  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Blog | Dicas para Reformar Apartamento em Condomínio"
        description="Artigos sobre reforma de apartamento em condomínio: Plano de Reforma NBR 16280, ART, o que o síndico pode exigir e como reformar com segurança."
        keywords={[
          "blog engenharia civil",
          "reforma de apartamento",
          "NBR 16280",
          "ART reforma",
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <div className="pt-28 pb-4 bg-[#0A1428] border-b border-white/10">
        <div className="container-custom">
          <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-sm text-[#93a7c6]">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-[#B9F227]">Blog</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-br from-[#12294A] to-[#060D1E]">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg text-[#b9c8e0]">
            Guias diretos para quem vai reformar o apartamento e quer resolver a
            parte técnica com o condomínio sem dor de cabeça.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#060D1E]">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-[#B9F227]/40"
            >
              <p className="flex items-center gap-2 text-sm text-[#8ea3c2]">
                <time dateTime={p.date}>{fmtDate(p.date)}</time>
                <span aria-hidden="true">·</span>
                <Clock className="h-4 w-4" aria-hidden="true" />
                {p.readingMinutes} min de leitura
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                <Link to={`/blog/${p.slug}`} className="hover:text-[#B9F227]">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 text-[#b9c8e0] leading-relaxed">{p.excerpt}</p>
              <Link
                to={`/blog/${p.slug}`}
                className="mt-6 inline-flex items-center gap-1 font-medium text-[#B9F227] hover:underline"
                aria-label={`Ler: ${p.title}`}
              >
                Ler artigo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
