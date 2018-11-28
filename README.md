![sketch export to](./assets/icon-big.jpg)

# sketch-export-to

![preview](./assets/preview.gif)

## Why

Sketch as the source of truth for UI guidelines. The idea behind it was to generate either markdown or json from a artboard, fetch this data and push it to a site.

## Installation

_Tested on Sketch 52+_
_Double-click on sketch-export-to.sketchplugin_ to install in sketch

## The catch

- As a start take a look at the _examples > ui.sketch file_
- I'm assuming you know [markdown syntax](https://www.markdownguide.org/basic-syntax/)
- Keep your layers ordered. This will let the plugin understand which markup renders first.
- Follow the below naming convention for your layers:
  - `heading1 | 2 | 3 | 4` - generates different heading sizes
  - `paragraph` - generates a single paragraph
  - `paragraph-multi` - generates multiple paragraphs
  - `blockquote` - generates a blockquote
  - `horizontal-rule` - generates a line
  - `image-*` - exports the image (1:1) as an asset. If you have multiple symbols that are a composition of an image, group them and rename to `image-*`. `-*` should be always `-1 | -2 | ...` so they're exported with that layer name
  - `list-unordered` - generates an unordered list
  - `list-ordered` - generates an ordered list

## Left to do

- Create export for json
- Add more markdown possibilities
- Detect font weights on a word or multiple inside of a text layer and parse it to the proper markdown weight.

## skpm

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._
