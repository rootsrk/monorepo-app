// NOTE: we're disabling consistent type definitions since for this specific file,
// we intentionally want to extend types in the libraries we use

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
  namespace FormatjsIntl {
    interface IntlConfig {
      /** As we add support for other languages, add the locale codes here */
      locale: 'en' | 'en-XA';
    }
  }
}
/*eslint-enable*/

export {};
