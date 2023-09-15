import { writeFile } from 'fs/promises';
import { globSync } from 'glob';
import { dirname, resolve } from 'path';
import {
  CACHE_FOREVER,
  CACHE_ONE_DAY_SWR_ONE_MONTH,
  CACHE_ONE_MIN_SWR_ONE_MONTH,
} from 's3-spa-upload';
import { fileURLToPath } from 'url';

const destinationFolder = resolve(
  dirname(fileURLToPath(import.meta.url)),
  `./dist`
);

const cacheControlMapping = {
  'assets/**/*.js.map': CACHE_FOREVER,
  'assets/**/*.js': CACHE_FOREVER,
  'assets/**/*.css': CACHE_FOREVER,

  'assets/**/*.png': CACHE_ONE_DAY_SWR_ONE_MONTH,
  'assets/**/*.jpg': CACHE_ONE_DAY_SWR_ONE_MONTH,
  'assets/**/*.jpeg': CACHE_ONE_DAY_SWR_ONE_MONTH,
  'assets/**/*.gif': CACHE_ONE_DAY_SWR_ONE_MONTH,
  'assets/**/*.svg': CACHE_ONE_DAY_SWR_ONE_MONTH,

  'favicons/**/*': CACHE_ONE_DAY_SWR_ONE_MONTH,
  'index.html': CACHE_ONE_MIN_SWR_ONE_MONTH,
};

const cacheControl = Object.entries(cacheControlMapping).reduce(
  (acc, [pattern, cacheControl]) => {
    const files = globSync(`${destinationFolder}/${pattern}`);
    const newEntries = files.reduce((acc, file) => {
      return { ...acc, [file]: cacheControl };
    }, {});
    return { ...acc, ...newEntries };
  },
  {}
);

(async () => {
  await writeFile(`cache-control.json`, JSON.stringify(cacheControl, null, 2));
})();
