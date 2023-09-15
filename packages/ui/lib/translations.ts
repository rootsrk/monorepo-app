import type { MessageFormatElement } from 'react-intl';

import en from '../translations/en.json';
import enXA from '../translations/en-XA.json';

export const translations: Record<
  string,
  Record<string, string> | Record<string, MessageFormatElement[]>
> = { en, 'en-XA': enXA };
