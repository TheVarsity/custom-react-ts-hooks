import { RefObject, useEffect, useState } from 'react';
import throttle from 'lodash/fp/throttle';

const useScrollSpy = ({
  activeSectionDefault = 0,
  offsetPx = 0,
  elementRefs,
  throttleMs = 100,
  top = true,
}: {
  activeSectionDefault?: number;
  offsetPx?: number;
  elementRefs: RefObject<HTMLElement>[];
  throttleMs?: number;
  top?: boolean;
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(throttleMs, () => {
    let currentSectionId = activeSection;
    if (top) {
      for (let i = 0; i < elementRefs?.length || 0; i++) {
        const section = elementRefs[i].current;
        // Needs to be a valid DOM Element
        if (!section || !(section instanceof Element)) continue;
        // GetBoundingClientRect returns values relative to viewport
        if (section.getBoundingClientRect().top + offsetPx < 0) {
          currentSectionId = i;
          continue;
        }
        // No need to continue loop, if last element has been detected
        break;
      }
    } else {
      // Scroll Spy from Bottom to Top
      for (let i = elementRefs?.length || 0; i > 0; i--) {
        const section = elementRefs[i].current;
        // Needs to be a valid DOM Element
        if (!section || !(section instanceof Element)) continue;
        // GetBoundingClientRect returns values relative to viewport
        if (section.getBoundingClientRect().bottom + offsetPx < 0) {
          currentSectionId = i;
          continue;
        }
        // No need to continue loop, if last element has been detected
        break;
      }
    }
    setActiveSection(currentSectionId);
  });

  useEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, [elementRefs, offsetPx, handle]);
  return activeSection;
};
export default useScrollSpy;
