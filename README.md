# react-atmospheres

[![npm version](https://img.shields.io/npm/v/react-atmospheres)](https://www.npmjs.com/package/react-atmospheres) [![Downloads/week](https://img.shields.io/npm/dw/react-atmospheres)](https://www.npmjs.com/package/react-atmospheres) [![Build Status](https://github.com/sinf4er/react-atmospheres/actions/workflows/ci.yml/badge.svg)](https://github.com/sinf4er/react-atmospheres/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A lightweight React wrapper to add seasonal, themed visual effects—snow, hearts, spooky, and more—behind any container without blocking or slowing your app.

---

## 🚀 Features

* 🎉 **Plug & Play**: Simply wrap any layout element to add effects
* ❄️ **Snow**, ❤️ **Hearts**, 🎃 **Spooky** (soon): Seasonal animations for any occasion,
* ⚡ **Performance-optimized**: Canvas pooling, ResizeObserver, visibility pause
* ♿ **A11y-friendly**: `aria-hidden`, `pointer-events: none`, `overflow: hidden`
* 🧩 **Configurable**: Colors, density, speed, particle count

---

## 📦 Installation

Install via npm:

```bash
npm install react-atmospheres
```

Or via Yarn:

```bash
yarn add react-atmospheres
```

---

## 🛠️ Usage

```tsx
import React from 'react';
import { Atmospheres } from 'react-atmospheres';

export function Header() {
  return (
    <Atmospheres
      animation="snow"
      speedFactor={1.5}
      maxPartikels={50}
      color="white"
    >
      <header>
        <h1>Welcome to Winter Wonderland</h1>
      </header>
    </Atmospheres>
  );
}
```

---

## 🎛️ API Reference

### `<Atmospheres>`

Wrap any React node to render a selected animation behind it.

| Prop             | Type                                       | Default                    | Description                                            |
|------------------|--------------------------------------------|----------------------------|--------------------------------------------------------|
| `children`       | `ReactNode`                                | —                          | The content over which the animation is rendered.      |
| `animation`      | `'snow' \| 'hearts' \| 'spooky' \| 'none'` | `'none'`                   | Selects which animation to display.                    |
| `speedFactor`    | `number`                                   | 1                          | Configuration number for animation speed               |
| `particleAmount` | `number`                                   | 50                         | Configuration number for max amount of objects visible |
| `disabled`       | `boolean`                                  | false                      | Boolean to show the animation or not                   |
| `color`       | `string`                                   | based on choosen animation | Color of the fill from the animated objects            |
| `outlineColor`       | `string`                                   | based on choosen animation                      | Color of the outline of the animated objects           |

---
## 🤝 Contributing

1. Fork the repository.
2. Create a branch `feat/your-feature`.
3. Commit and push your changes.
4. Open a pull request.
5. CI checks will run; after review, your PR can be merged.

Please adhere to the existing code style (ESLint + Prettier).

---

## 📝 License

MIT © [Robin Glaeser](https://github.com/sinf4er)

---

*Made with ❤️ by your friendly neighborhood frontend developer.*
