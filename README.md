# Custom React TS hooks

A collection of Custom React hooks written in TypeScript to support proper type declarations.

## Installation

```bash
yarn add custom-react-ts-hooks
# or
npm add custom-react-ts-hooks
```

## List of Supported Hooks

- useEventListener
- useScrollSpy

## Usage

```javascript
import { useEventListener } from 'custom-react-ts-hooks';
...
useEventListener(htmlDivRef,'wheel', (event) => {

});
```
