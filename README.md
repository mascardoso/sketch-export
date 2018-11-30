![sketch export to](./assets/icon-big.jpg)

# sketch-export-to

![preview](./assets/preview.gif)

## Why

Sketch as the source of truth for UI guidelines (for instance in design systems). The idea behind it was to generate either markdown or json from an artboard, fetch this data and push it to a site.

## Installation

You can clone this repo or [download](https://github.com/mascardoso/sketch-export/releases) the plugin

_Double-click on **sketch-export-to.sketchplugin**_ to install it in your sketch.

_Tested on Sketch 52+_

## The catch

- As a start take a look at the _examples > ui.sketch file_ and use it as a reference
- I'm assuming you know [markdown syntax](https://www.markdownguide.org/basic-syntax/)
- I'm assuming you know what is [json](https://www.w3schools.com/js/js_json_syntax.asp)
- Keep your layers ordered. This will let the plugin understand which markup renders first.
  - You can organize visually your artboard the way you want but the layers should follow a reading order from top to bottom.
- Follow the below naming convention for your layers:
  - `heading1 | 2 | 3 | 4` - exports different heading sizes / levels
  - `paragraph` - exports a single paragraph
  - `paragraph-multi` - exports multiple paragraphs
  - `blockquote` - exports a blockquote
  - `horizontal-rule` - exports a horizontal line
  - `image-*` - exports the image (1:1) as an asset. If you have multiple symbols that are a composition of an image, group them and rename to `image-*`. `-*` should be always `-1 | -2 | ...` so they're exported with that layer name `image-1 | image-2 | ...`
  - `list-unordered` - exports an unordered list
  - `list-ordered` - exports an ordered list

## Left to do

- ~~Create export for json~~
- Add more markdown / json export possibilities
- Detect font weights on a word or multiple inside of a text layer and parse it to the proper markdown weight.

## skpm

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._
