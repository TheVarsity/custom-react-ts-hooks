import { useEffect } from 'react';

const useEventListener = (
  ref: React.MutableRefObject<HTMLElement>,
  type: keyof HTMLElementEventMap,
  listener: EventListenerOrEventListenerObject,
  ...options: any
) => {
  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener(type, listener, ...options);
    }
    return () => {
      if (current) {
        current.removeEventListener(type, listener, ...options);
      }
    };
  }, [ref, type, listener, options]);
};

export default useEventListener;
