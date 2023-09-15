// NOTE: we're disabling consistent type definitions since for this specific file,
// we intentionally want to extend types in the libraries we use

/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface ImportMetaEnv {
  readonly VITE_LOCALE: 'en' | 'en-XA';

  // set by build
  readonly VITE_APP_VERSION: string;

  // the values below are set in environment files

  readonly VITE_MIXPANEL_TOKEN: string;

  // datadog config
  readonly VITE_DATADOG_APPLICATION_ID: string;
  readonly VITE_DATADOG_CLIENT_TOKEN: string;
  readonly VITE_DATADOG_SERVICE: string;
  readonly VITE_DATADOG_ENV: string;

  // app urls
  readonly VITE_APP_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_LEGACY_APP_URL: string;
  readonly VITE_ADMIN_APP_URL: string;

  // sso config
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_OFFICE365_CLIENT_ID: string;
  readonly VITE_SLACK_CLIENT_ID: string;
  readonly VITE_ADP_CONSUMER_APPLICATION_ID: string;
  readonly VITE_ADP_CLIENT_ID: string;
  readonly VITE_LIFION_CONSUMER_APPLICATION_ID: string;
  readonly VITE_LIFION_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  compileTime: <T>(id: string) => T;
}
/*eslint-enable*/
