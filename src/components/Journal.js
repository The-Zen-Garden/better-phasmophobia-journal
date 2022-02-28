import React, { useEffect } from 'react';
import Ghosts from './Ghosts';
import GhostInfo from './GhostInfo';
import EvidenceGroup from './EvidenceGroup';

function Journal() {
  useEffect(() => {
    function debounce(fn, ms) {
      let timer;
      return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
          timer = null;
          fn.apply(this, arguments);
        }, ms);
      };
    }

    const debouncedHandleResize = debounce(function addPadding() {
      const evidenceHeight =
        document.querySelector('#evidence').offsetHeight + 40;
      const ghostsHeight = document.querySelector('#ghosts').offsetHeight;
      const windowHeight = window.innerHeight;
      if (ghostsHeight + evidenceHeight > windowHeight) {
        document.querySelector('#ghosts').style.paddingBottom =
          evidenceHeight + 'px';
      } else {
        document.querySelector('#ghosts').style.paddingBottom = 0;
      }
    }, 1000);

    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <>
      <Ghosts />
      <GhostInfo />
      <EvidenceGroup />
    </>
  );
}

export default Journal;
