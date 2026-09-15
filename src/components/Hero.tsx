import Image from 'next/image';
import type { Product } from '@/types/product';
import type { SiteContent } from '@/types/siteContent';

interface HeroProps {
  featuredProduct: Product;
  content: SiteContent;
}

export function Hero({ featuredProduct, content }: HeroProps) {
  return (
    <section id="inicio" className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-stone-500">{content.hero.eyebrow}</p>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
          {content.hero.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href={content.hero.primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
            {content.hero.primaryCta.label}
          </a>
          <a href={content.hero.secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-100">
            {content.hero.secondaryCta.label}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-600">
          {content.hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-stone-900">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-stone-200/80 blur-3xl" />
        <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-stone-300/60 blur-3xl" />

        <div className="relative overflow-hidden rounded-[36px] border border-stone-200 bg-white p-4 shadow-soft">
          <div className="relative h-[520px] overflow-hidden rounded-[28px]">
            <Image
              src={featuredProduct.imageUrl}
              alt={featuredProduct.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-white/85 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-stone-500">{content.hero.featuredLabel}</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-900">{featuredProduct.name}</h2>
              </div>
              <span className="text-xl font-semibold text-stone-900">{content.currency}{featuredProduct.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
