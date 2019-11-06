# Paper React for happy printing


> This component is based on [@cognitom](https://github.com/cognitom) excellent [paper-css](https://github.com/cognitom/paper-css) paper-printing hack

Recently, we say "front-end" every day. Then why don't we make the printing documents in front-end? We believe we can make it perfectly without back-end. Paper React is just a small component, but it helps us create them in browser easily.

## Table of Contents

- [Installation](#installation)
- [Guides](#Guides)
  - [Basic Usage](#basic-usage)
  - [Paper](#Paper)
  - [Sheet](#Sheet)
  - [NoPrint](#NoPrint)
- Why Paper React?
  - [Previewable](#previewable)
- [License](#license)

## Installation

```bash
$ yarn add paper-print-react
# npm install paper-print-react
```

# Guides

## Basic Usage

import paper-print-react like this:

```js
import { A4 } from 'paper-print-react';
```

How to use component in aplication
```js
<A4>
  All content that can be placed on A4 page
</A4>
```

```js
// Choose A3, A4 or A5 importing relative component
import { A3, A4, A5 } from 'paper-print-react';

<A3>
  All content that can be placed on A3 page
</A3>
```

All available page sizes is listed below:

- A5, A5 landscape
- A4, A4 landscape
- A3, A3 landscape

```js
<A4 landscape>
```

## Page

```js
<Page/>
```
Props ```background```

## Sheet

### A5

### A4

### A3

## NoPrint

```js
<NoPrint>This content will not print thanks to the Notprinted.</NoPrint>
```

See also [the examples](src/examples/) for detail.

## Why Paper React?

### Previewable

You can check the design and layout before printing. See the browser like when you build a web page.

![Preview](https://i.imgur.com/rFVyuwr.png)

[This example](examples/ImagePage.js) could be printed like this.

![Dialog](https://i.imgur.com/ZNCeAIJ.png)

#### Want more?
![Want more? gif](https://thumbs.gfycat.com/FreshAmpleFly-small.gif)
#### Open an [issue](https://github.com/godrix/paper-print-react/issues/new)!

## Contributing

1. Fork it [paper-print-react](https://github.com/godrix/paper-print-react/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## License

The MIT License. Read [LICENSE](LICENSE) for further information.