# node-modules-check

> Checks packages in node_modules

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/node-modules-check.svg)](https://www.npmjs.com/package/node-modules-check) [![Build Status](https://img.shields.io/travis/pnpm/node-modules-check/master.svg)](https://travis-ci.org/pnpm/node-modules-check)
<!--/@-->

## Installation

```sh
npm i -S node-modules-check
```

## Usage

In a project that has `node_modules`, run:

    node-modules-check

Prints all dependencies that use modules not listed in their `package.json` files.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)
