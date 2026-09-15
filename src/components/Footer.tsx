import type { SiteContent } from '@/types/siteContent';

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  return (
    <footer id="contacto" className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{content.brand.fullName}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
            {content.footer.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-100">{content.footer.navigationTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            {content.navigation.slice(0, 3).map((item) => (
              <li key={item.label}><a href={item.href} className="hover:text-white">{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-100">{content.footer.socialTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            {content.footer.socialLinks.map((item) => (
              <li key={item.label}><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="hover:text-white">{item.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-stone-400 sm:px-6 lg:flex-row lg:px-8">
          <p>{content.footer.copyright}</p>
          <p>{content.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
