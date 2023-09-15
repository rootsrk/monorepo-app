import '@total-typescript/ts-reset';
import 'tailwindcss/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';

import { Router } from './Router';

(async function RenderApp() {
  const container = document.getElementById('webapp');

  if (!container) {
    return;
  }

  const locale = import.meta.env.VITE_LOCALE;

  const [appMessages, uiMessages] = await Promise.all([
    import(`./translations/${locale}.json`).then((x) => x.default),
    import(`@rootsrk/ui`).then((x) => x.translations[locale]),
  ]);

  const messages = { ...appMessages, ...uiMessages };

  createRoot(container).render(
    <StrictMode>
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <Router />
      </IntlProvider>
    </StrictMode>
  );
})();
