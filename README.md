# azulejo-consumer-demo

A minimal **external consumer** app that demonstrates how a product project uses
the [`@ptlm-azulejo`](https://github.com/adeo/ptlm-gtdp-azulejo) component library
together with the multi-brand theme package.

It is intentionally outside the library monorepo so it proves the real
consumption flow: install the packages, import the styles, set a brand class, and
the components re-theme at runtime.

## What it shows

- Importing a brand preset (`@ptlm-azulejo/themes/presets/<brand>.css`, which
  bundles `base.css`) and a component's styles (`@ptlm-azulejo/button/style.css`).
- Selecting the **brand** (Leroy Merlin / Adeo) with a class on `<html>`
  (`.preset-lm` / `.preset-adeo`) and **light/dark** with `data-theme`.
- A `<select>`-driven toolbar that switches brand/mode live, so the same
  `AzButton` instances re-theme without reloading.

The relevant code is `src/main.js` (the imports) and `src/App.vue` (the brand/mode
toggle + button showcase).

## Requirements

`@ptlm-azulejo/themes` is **not published to npm yet** (it ships in an open PR of
the library). Until it is released, this demo consumes the packages from a **local
checkout of the monorepo** via `file:` dependencies in `package.json`:

```jsonc
"@ptlm-azulejo/button": "file:../ptlm-gtdp-azulejo/packages/Button",
"@ptlm-azulejo/themes": "file:../ptlm-gtdp-azulejo/packages/themes"
```

So the library monorepo must be cloned **as a sibling folder**:

```
some-folder/
  ptlm-gtdp-azulejo/      # the library monorepo (build it first)
  azulejo-consumer-demo/  # this repo
```

> Once `@ptlm-azulejo/themes` is published, swap the two `file:` entries for the
> published versions (e.g. `"^1.0.0"`) and the sibling checkout is no longer needed.

## Run it

```bash
# 1) In the library monorepo, build the component so its dist/ exists:
cd ../ptlm-gtdp-azulejo && yarn install && yarn build

# 2) Back here, install and start:
cd ../azulejo-consumer-demo
npm install
npm run dev
```

Then open the printed local URL and use the **Brand** / **Mode** selectors.

## How the imports resolve

The package-name imports (`@ptlm-azulejo/...`) resolve through each package's
`exports` map — exactly as they would for a real npm install. `npm install` links
the `file:` dependencies into `node_modules/@ptlm-azulejo/*`.

## Stack

Vue 3 + Vite. No build tooling beyond Vite is required: the component ships
pre-compiled CSS that only reads CSS variables, and the theme package provides
those variables at runtime.
