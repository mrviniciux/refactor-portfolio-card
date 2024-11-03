import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'pt', 'de', 'fr', 'ja'],
  defaultLocale: 'pt',
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
