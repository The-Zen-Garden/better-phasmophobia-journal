import React, { useState, useEffect } from 'react';
import ghosts from '../data/ghosts.json';
import evidence from '../data/evidence.json';
import Evidence from './Evidence';
import GhostInfo from './GhostInfo';
import GhostCard from './GhostCard';

function Ghosts() {
  const [ghostList, setGhostList] = useState(ghosts);
  const [counter, setCounter] = useState(0);
  const [ghostIndex, setGhostIndex] = useState(0);
  const [ghostInfoEnabled, setGhostInfoEnabled] = useState(false);
  const [activeEvidence, setActiveEvidence] = useState([]);
  const [ghostsRender, setGhostsRender] = useState('');

  useEffect(() => {
    function exclude(ghost, a) {
      let ghostListUpdated = ghostList;
      let index = ghostList.findIndex((g) => g.name === ghost);
      setGhostIndex(index);
      ghostListUpdated[index] = { ...ghostList[index], excluded: a };
      console.log(ghostList);
      setGhostList(ghostListUpdated);
    }
    function ghostInfo(ghost) {
      let index = ghostList.findIndex((g) => g.name === ghost);
      setGhostIndex(index);
      setGhostInfoEnabled(true);
    }
    function handleInfo(e, name) {
      e.preventDefault();
      ghostInfo(name);
      document.getElementById('ghost_info').focus();
      document.querySelector('#ghost_info').scrollTo(0, 0);
    }
    function handleExclude(name) {
      exclude(name, true);
      setCounter(counter + 1);
    }
    function handleInclude(name) {
      exclude(name, false);
      setCounter(counter + 1);
    }
    const ghostItems = ghostList
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .filter((ghost) => {
        if (activeEvidence.length === 0) {
          return ghost;
        }
        if (activeEvidence.length === 1) {
          if (
            ghost.evidence[0].name === activeEvidence[0] ||
            ghost.evidence[1].name === activeEvidence[0] ||
            ghost.evidence[2].name === activeEvidence[0]
          ) {
            return ghost;
          }
        }
        if (activeEvidence.length === 2) {
          if (
            ghost.evidence[0].name === activeEvidence[1] ||
            ghost.evidence[1].name === activeEvidence[1] ||
            ghost.evidence[2].name === activeEvidence[1]
          ) {
            if (
              ghost.evidence[0].name === activeEvidence[0] ||
              ghost.evidence[1].name === activeEvidence[0] ||
              ghost.evidence[2].name === activeEvidence[0]
            ) {
              return ghost;
            }
          }
        }
        if (activeEvidence.length === 3) {
          if (
            ghost.evidence[0].name === activeEvidence[2] ||
            ghost.evidence[1].name === activeEvidence[2] ||
            ghost.evidence[2].name === activeEvidence[2]
          ) {
            if (
              ghost.evidence[0].name === activeEvidence[1] ||
              ghost.evidence[1].name === activeEvidence[1] ||
              ghost.evidence[2].name === activeEvidence[1]
            ) {
              if (
                ghost.evidence[0].name === activeEvidence[0] ||
                ghost.evidence[1].name === activeEvidence[0] ||
                ghost.evidence[2].name === activeEvidence[0]
              ) {
                return ghost;
              }
            }
          }
        }
        return null;
      })
      .map(({ name, excluded }) => {
        return (
          <GhostCard
            key={name}
            name={name}
            excluded={excluded}
            onInfo={(e) => handleInfo(e, name)}
            onExclude={() => handleExclude(name)}
            onInclude={() => handleInclude(name)}
          />
        );
      });
    setGhostsRender(ghostItems);
  }, [activeEvidence, counter, ghostList]);

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

  function ghostInfoChange(b) {
    setGhostInfoEnabled(b);
  }

  function activeEvidenceChange(ev, add) {
    if (add) {
      setActiveEvidence(activeEvidence.concat(ev));
    } else {
      setActiveEvidence(activeEvidence.filter((evidence) => evidence !== ev));
    }
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setGhostInfoEnabled(false);
    }
  }

  return (
    <>
      <div id="ghosts">{ghostsRender}</div>
      <GhostInfo
        ghostIndex={ghostIndex}
        ghostList={ghostList}
        ghostInfoEnabled={ghostInfoEnabled}
        ghostInfoChange={ghostInfoChange}
        handleKeyDown={handleKeyDown}
      />
      <Evidence
        evidence={evidence}
        activeEvidence={activeEvidence}
        activeEvidenceChange={activeEvidenceChange}
      />
    </>
  );
}

export default Ghosts;
