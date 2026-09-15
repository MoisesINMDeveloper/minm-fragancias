import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product';
import type { SiteContent } from '@/types/siteContent';

interface ProductGridProps {
  products: Product[];
  categories: string[];
  segments: string[];
  selectedCategory: string;
  selectedSegment: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSegmentChange: (segment: string) => void;
  onSearchChange: (value: string) => void;
  onSelect: (product: Product) => void;
  content: SiteContent;
}

export function ProductGrid({
  products,
  categories,
  segments,
  selectedCategory,
  selectedSegment,
  searchTerm,
  onCategoryChange,
  onSegmentChange,
  onSearchChange,
  onSelect,
  content
}: ProductGridProps) {
  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-stone-500">{content.catalog.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{content.catalog.title}</h2>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row lg:max-w-2xl">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={content.catalog.searchPlaceholder}
              aria-label={content.catalog.searchLabel}
              className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-stone-500"
            />
          </div>

          <div className="relative min-w-[180px]">
            <select
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              aria-label={content.catalog.categoryLabel}
              className="w-full appearance-none rounded-full border border-stone-300 bg-white px-4 py-3 pr-12 text-sm text-stone-700 outline-none transition focus:border-stone-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative min-w-[180px]">
            <select
              value={selectedSegment}
              onChange={(event) => onSegmentChange(event.target.value)}
              aria-label={content.catalog.segmentLabel}
              className="w-full appearance-none rounded-full border border-stone-300 bg-white px-4 py-3 pr-12 text-sm text-stone-700 outline-none transition focus:border-stone-500"
            >
              {segments.map((segment) => (
                <option key={segment} value={segment}>
                  {segment}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-stone-300 bg-white/70 p-10 text-center text-stone-600">
          {content.catalog.emptyMessage}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelect} content={content} />
          ))}
        </div>
      )}
    </section>
  );
}
