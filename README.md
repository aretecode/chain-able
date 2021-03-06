# ⛓ chain-able

[![NPM version][chain-able-npm-image]][chain-able-npm-url]
[![docs](https://img.shields.io/badge/📖-docs-blue.svg)](https://github.com/fluents/chain-able/wiki)
[![Dependencies][david-deps-img]][david-deps-url]
[![fliphub][gitter-badge]][gitter-url]
[![BuildStatus](https://travis-ci.org/fluents/awesome-fluents.svg?branch=master)](https://travis-ci.org/fluents/awesome-fluents)
[![Coverage Status](https://coveralls.io/repos/github/fluents/chain-able/badge.svg?branch=master)](https://coveralls.io/github/fluents/chain-able?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b1d92a30c4aa43df9a6233cfadde2307)](https://www.codacy.com/app/aretecode/chain-able?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fluents/chain-able&amp;utm_campaign=Badge_Grade)
[![gzip size](http://img.badgesize.io/https://unpkg.com/chain-able@2.0.0-beta.1?compression=gzip)](https://unpkg.com/chain-able@2.0.0-beta.1)
[![fluent](https://img.shields.io/badge/⛓-fluent-9659F7.svg)](https://github.com/fluents/awesome-fluents)

<!-- https://david-dm.org/fluents/chain-able.svg -->
[david-deps-img]: https://img.shields.io/badge/0-dependencies-blue.svg
[david-deps-url]: https://david-dm.org/fluents/chain-able
[chain-able-npm-image]: https://img.shields.io/npm/v/chain-able.svg
[chain-able-npm-url]: https://npmjs.org/package/chain-able
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://spdx.org/licenses/MIT
[gitter-badge]: https://img.shields.io/gitter/room/fliphub/pink.svg
[gitter-url]: https://gitter.im/fliphub/Lobby
[flipfam-image]: https://img.shields.io/badge/%F0%9F%8F%97%20%F0%9F%92%A0-flipfam-9659F7.svg
[flipfam-url]: https://www.npmjs.com/package/flipfam

[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[set]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
[compose]: https://github.com/fluents/chain-able/wiki/compose
[iteratable]: https://github.com/fluents/chain-able/wiki/iteratable

[type]: https://github.com/fluents/chain-able/wiki/type
[factory]: https://github.com/fluents/chain-able/wiki/factory
[parent]: https://github.com/fluents/chain-able/wiki/parent

[extend]: https://github.com/fluents/chain-able/wiki/extend
[alias]: https://github.com/fluents/chain-able/wiki/extend#extendalias
[increment]: https://github.com/fluents/chain-able/wiki/extend#extendincrement
[truefalse]: https://github.com/fluents/chain-able/wiki/Extend#extendfalse

[transform]: https://github.com/fluents/chain-able/wiki/transform
[remap]: https://github.com/fluents/chain-able/wiki/transformable#-remap
[tap]: https://github.com/fluents/chain-able/wiki/transformable#tap
[traversable]: https://github.com/fluents/chain-able/wiki/transformable#traversable

[dotprop]: https://github.com/fluents/chain-able/wiki/shorthand#dot-prop

[shorthand]: https://github.com/fluents/chain-able/wiki/shorthand#setifempty
[chainwrap]: https://github.com/fluents/chain-able/wiki/shorthand#chainwrapmethods-array-chain
[bindmethods]: https://github.com/fluents/chain-able/wiki/shorthand#bindmethodsmethods-array-chain
[setifempty]: https://github.com/fluents/chain-able/wiki/shorthand#setifempty

[immutable]: https://github.com/fluents/chain-able/wiki/immutable

[primatives]: https://github.com/fluents/chain-able/wiki/primatives
[snippet]: https://github.com/fluents/chain-able/wiki/snippet

[define]: https://github.com/fluents/chain-able/wiki/define
[extendGetSet]: https://github.com/fluents/chain-able/wiki/define#extendGetSet
[defineGetSet]: https://github.com/fluents/chain-able/wiki/define#defineGetSet

[api]: https://github.com/fluents/chain-able/wiki/api

> interfaces that describe their intentions

# 🗣 expressive

### traditional
```js
class Traditional {
  constructor() {
    this.data = {}
  }
  build(index, name, object) {
    this.data.index = index
    this.data.name = name
    this.data.object = object
  }
}
const classico = new Traditional()
classico.build(1, 'string', {object: true})
```

### fluent
```js
class Chain extends Chainable {
  constructor(parent) {
    super(parent)
    this.extend(['index', 'name', 'object'])
  }
}
const chain = new Chainable()
  .index(1)
  .name('string')
  .object(true)
```

# 🏰 benefits

writing an api using chain-able means:
- write **1** api,
- get **3** apis as a result!
  - 🍉 persistable, rehydratable, & transferrable configurations
  - ⛓ fluent/chainable api
  - 🍦 vanilla object syntax

<!-- - 🏗 customizable -->
<!-- - ⚙ configurable -->
<!-- - 🎼 composable -->
<!-- - 👾 simplifications of the complex -->
<!-- - ☮️ compatible -->
<!-- - 🙌 agnostic -->

# 🎁 features
- [▶️◀️ easy deep merging](#-chainable)
- [🌐 api][api]
  - [🍭 iteratable][iteratable]
  - [🗣 expressive](#-expressive)
  - [💆 seamless native integration][primatives]
- [🤖 transformable][transform]
  - [🕵 debuggable][transform] <!-- needs more explanation -->
  - [👣 traversable][traversable]
  - [🗺 remappable][remap]
  - [👆 tap][tap]
- [🎼 composable][compose]
  - [👂 observable](#-observable)
  - [🛂 types & validation][type] <!-- methods... -->
  - [🔌 extend][extend]
    - [alias][alias]
    - [increment][increment]
    - [true/false][truefalse]
  - [dot-prop][dotprop]
  - [shorthand][shorthand]
    - [.chainWrap][chainwrap]
    - [.bindMethods][bindmethods]
    - [.setIfEmpty][setifempty]
  - [define][define]
    - [extendGetSet][extendGetSet]
    - [defineGetSet][defineGetSet]
  - [❄️ immutable][immutable]
- [🏭 nestable factories][parent]
- ⚡ performant & tiny `~7kb` _(gzip)_ [_300 byte_ minimal version available as snippet][snippet]


### 🔗 links & more
- [😎⛓ awesome fluents](https://github.com/fluents/awesome-fluents)
- many thanks to [Eli Perelman](https://github.com/eliperelman) for all the chainable goodness
- thanks to [James Halliday](https://github.com/substack) for the tremendous [traversals](https://github.com/substack/js-traverse)
- thanks to [Sindre Sorhus](https://github.com/sindresorhus) for the simple [dot-prop](https://github.com/sindresorhus/dot-prop) access
- thanks to [Josh Duff](https://github.com/KyleAMathews) for [deep merging](https://github.com/KyleAMathews/deepmerge)
- based on [webpack-chain](https://github.com/mozilla-rpweb/webpack-chain), but not webpack-specific.
- transpiled with [buble](https://gitlab.com/Rich-Harris/buble)
- [Martin Fowler on FluentInterface](https://www.martinfowler.com/bliki/FluentInterface.html)
