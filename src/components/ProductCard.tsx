import Image from 'next/image';
import type { Product } from '@/types/product';
import type { SiteContent } from '@/types/siteContent';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  content: SiteContent;
}

export function ProductCard({ product, onSelect, content }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <button type="button" onClick={() => onSelect(product)} className="block w-full text-left">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
              {product.category}
            </span>
            <span className="text-lg font-semibold text-stone-900">{content.currency}{product.price}</span>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-900">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">{product.description}</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-stone-500">{content.catalog.availabilityLabel}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-3 py-2 text-sm font-medium text-white transition group-hover:bg-stone-700">
              {content.catalog.detailLabel}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
