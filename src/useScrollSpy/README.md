# useScrollSpy

## Installation

```bash
yarn add custom-react-ts-hooks
# or
npm add custom-react-ts-hooks
```

## Usage

```javascript
import { useScrollSpy } from 'custom-react-ts-hooks';
...
const currentSection = useScrollSpy({
  elementRefs : [] // Array of React Ref objects
})
```

| Parameter            | Default      | Type                       | Description                           |
| :------------------- | ------------ | -------------------------- | ------------------------------------- |
| elementRefs          | **required** | `RefObject<HTMLElement>[]` | Array of Ref Object of Html Element   |
| activeSectionDefault | 0            | `int`                      | First active section index (optional) |
| offsetPx             | 0            | `int`                      | Set offset pixels (optional)          |
| throttleMs           | 100          | `int`                      | Throttle in milliseconds (optional)   |
| top                  | true         | `boolean`                  | Direct of scroll spy (optional)       |

Based on [https://github.com/Purii/react-use-scrollspy](https://github.com/Purii/react-use-scrollspy)
