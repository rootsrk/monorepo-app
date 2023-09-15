# Tailwind Preset

This package contains Assembly's custom [tailwind preset](https://tailwindcss.com/docs/presets) that we use to customize tailwind to include our design tokens & to remove some of the defaults we wouldn't want app developers to use.

## Build

The configuration is authored in TypeScript & then transpiled to js with vite.js since we import the config in storybook stories to render some design tokens dynamically. Whenever any changes are made to the files in this package, you'll have to run `nr build` within this package to ensure that the changes propagate to other packages in this repo.
