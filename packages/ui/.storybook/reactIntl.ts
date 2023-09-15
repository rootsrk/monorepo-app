import { translations } from '../lib/translations';

const locales = ['en', 'en-XA'];

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages: translations,
  formats,
};
