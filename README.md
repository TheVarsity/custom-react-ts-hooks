# Custom React TS hooks

A collection of Custom React hooks written in TypeScript to support proper type declarations.

[![Rahul Tarak](https://img.shields.io/badge/Author-Rahul%20Tarak-green)](https://cryogenicplanet.tech/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/TheVarsity/custom-react-ts-hooks/master/LICENSE)

## Installation

```sh
yarn add custom-react-ts-hooks
# or
npm add custom-react-ts-hooks
```

## List of Supported Hooks

- [useEventListener](./src/useEventListener/)
- [useScrollSpy](./src/useScrollSpy/)

## Usage

Check each hook page for specific usage information and all parameters.

Example usage

```javascript
import { useEventListener } from 'custom-react-ts-hooks';
...
useEventListener(htmlDivRef,'wheel', (event) => {

});
```
