import Image from 'next/image';
import type { Product } from '@/types/product';
import type { SiteContent } from '@/types/siteContent';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  content: SiteContent;
}

export function ProductModal({ product, onClose, content }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/70 px-4 py-8 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-2xl">
        <button
          type="button"
          aria-label={content.modal.closeLabel}
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-xl text-stone-700 shadow-sm transition hover:bg-white md:right-4 md:top-4"
        >
          ×
        </button>

        <div className="grid max-h-[90vh] overflow-hidden md:grid-cols-2">
          <div className="relative h-72 md:h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 overflow-y-auto p-6 pr-12 sm:p-8 sm:pr-16">
            <div className="flex items-center justify-between gap-3 pr-2">
              <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
                {product.category}
              </span>
              <span className="text-2xl font-semibold text-stone-900">{content.currency}{product.price}</span>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-stone-900">{product.name}</h3>
              <p className="mt-4 text-base leading-7 text-stone-600">{product.description}</p>
            </div>

            <div className="space-y-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
              <p><strong className="text-stone-900">{content.modal.notesLabel}</strong> {content.modal.notes}</p>
              <p><strong className="text-stone-900">{content.modal.durationLabel}</strong> {content.modal.duration}</p>
              <p><strong className="text-stone-900">{content.modal.formatLabel}</strong> {content.modal.format}</p>
            </div>

            <div>
              <button type="button" onClick={onClose} className="w-full rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-100">
                {content.modal.continueLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
