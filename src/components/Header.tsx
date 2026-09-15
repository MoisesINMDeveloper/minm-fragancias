import Image from 'next/image';
import type { SiteContent } from '@/types/siteContent';

interface HeaderProps {
  content: SiteContent;
}

export function Header({ content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href={content.navigation[0].href} className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-stone-300 bg-stone-100">
            <Image
              src={content.brand.logo1}
              alt={content.brand.fullName}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{content.brand.eyebrow}</p>
            <p className="text-lg font-semibold tracking-[0.18em] text-stone-900">{content.brand.name}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
          {content.navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-stone-900">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
