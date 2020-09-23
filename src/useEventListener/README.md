# useEventListener

## Installation

```bash
yarn add custom-react-ts-hooks
# or
npm add custom-react-ts-hooks
```

## Usage

```javascript
import { useEventListener } from 'custom-react-ts-hooks';
...
useEventListener(htmlDivRef,'wheel', (event) => {

});
```

| Parameter  | Type                                  | Description                                        |
| :--------- | ------------------------------------- | -------------------------------------------------- |
| ref        | `React.MutableRefObject<HTMLElement>` | Ref Object of Html Element **required**            |
| type       | `keyof HTMLElementEventMap`           | Type of Html Event to listen to **required**       |
| listener   | `EventListenerOrEventListenerObject`  | Event listener **required**                        |
| ...options | `any`                                 | Any options passed on to event listener (optional) |
