# Collider Component Lib

## What is it?

Collider is a vue-built custom Element Library (not yet Web Component Compliant, see future plans).

## Design Ethos

- Components should either be molecular or atomic in nature. These characteristics are further described below.

- Components should inherit css variables so that the branding/styling can be established on a per usage scenario using predetermined set of variables.

- Components should be designed to be intrinsic. Dimensionally, they are driven by the content that inhabits them - see [Atomic Components](#atomic-components).

### Molecular Components

Molecular components are nestable template components that take in data and pass it down-stream as necessary.

Typically Molecules are designed to take specified 'shapes' of data or internal HTML element structure. These are provided in the collider spec.

### Atomic Components

Atomic components are the most elementary components - text, images, h-tags, for example. They are the lowest level blocks of substance that make up the molecules. You can think of them as the 'end of the chain' of HTML elements.

## Get Up and Running

### Development

`npm install`

`npx webpack` builds to dist

see `test/index.html` and run vscode liveserver to see example component implementation.

### Library Usage

1. Install Vue instance on your page. Quickest option is:

`<script src="https://unpkg.com/vue@next"></script>`

2. Install source code from `dist` folder (cdn script coming soon...) in script tag
3. Implement elements per individual instructions - see documentation site (also coming soon)

### Using Library Exports

1. You can either run `window.lib.register()` in a script to expose all elements in the library or
2. individually register them using `import` and `customElements.define('my-foo', MyFoo)`. This allows you to only use what you need and to give the custom elements your own names... if that's what your into.

Off to the races!

## Future Plans
