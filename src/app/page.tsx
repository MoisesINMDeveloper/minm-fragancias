'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductModal } from '@/components/ProductModal';
import { Footer } from '@/components/Footer';
import productsData from '@/data/products.json';
import siteContentData from '@/data/siteContent.json';
import type { Product } from '@/types/product';
import type { SiteContent } from '@/types/siteContent';

const siteContent = siteContentData as SiteContent;
const categories = [
  siteContent.catalog.allCategoriesLabel,
  ...new Set(productsData.map((product) => product.category))
];
const segments = [
  siteContent.catalog.allSegmentsLabel,
  'Masculino',
  'Femenino',
  'Unisex'
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    siteContent.catalog.allCategoriesLabel
  );
  const [selectedSegment, setSelectedSegment] = useState(
    siteContent.catalog.allSegmentsLabel
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProduct = useMemo(
    () => productsData.find((product) => product.featured) ?? productsData[0],
    []
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === siteContent.catalog.allCategoriesLabel ||
        product.category === selectedCategory;
      const matchesSegment =
        selectedSegment === siteContent.catalog.allSegmentsLabel ||
        product.segment === selectedSegment;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.segment.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSegment && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedSegment]);

  return (
    <>
      <Header content={siteContent} />

      <main>
        <Hero featuredProduct={featuredProduct} content={siteContent} />

        <section id="nosotros" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 overflow-hidden rounded-[32px] border border-stone-200 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="rounded-[28px] bg-stone-100 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">{siteContent.about.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">{siteContent.about.title}</h2>
            </div>

            <div className="space-y-6 text-stone-600">
              <p className="text-lg leading-8">
                {siteContent.about.description}
              </p>
              <p className="leading-8">
                {siteContent.about.secondaryDescription}
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {siteContent.about.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <p className="text-2xl font-semibold text-stone-900">{stat.value}</p>
                    <p className="mt-2 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductGrid
          products={filteredProducts}
          categories={categories}
          segments={segments}
          selectedCategory={selectedCategory}
          selectedSegment={selectedSegment}
          searchTerm={searchTerm}
          onCategoryChange={setSelectedCategory}
          onSegmentChange={setSelectedSegment}
          onSearchChange={setSearchTerm}
          onSelect={setSelectedProduct}
          content={siteContent}
        />
      </main>

      <Footer content={siteContent} />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        content={siteContent}
      />
    </>
  );
}
