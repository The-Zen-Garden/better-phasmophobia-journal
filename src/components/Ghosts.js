import React, { useState, useEffect } from 'react';
import { ghosts } from '../data/ghosts';
import { evidence } from '../data/evidence';
import Evidence from './Evidence';
import GhostInfo from './GhostInfo';

function Ghosts() {
  const [ghostList, setGhostList] = useState(ghosts);
  const [counter, setCounter] = useState(0);
  const [ghostIndex, setGhostIndex] = useState(0);
  const [ghostInfoEnabled, setGhostInfoEnabled] = useState(false);
  const [activeEvidence, setActiveEvidence] = useState([]);

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
    if (add === 1) {
      setActiveEvidence(activeEvidence.concat(ev));
    } else {
      setActiveEvidence(activeEvidence.filter((ae) => ae !== ev));
    }
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setGhostInfoEnabled(false);
    }
  }

  function exclude(ghost, a) {
    let ghostListUpdated = ghostList;
    let index = ghostList.findIndex((g) => g.name === ghost);
    setGhostIndex(index);
    a
      ? (ghostListUpdated[index].excluded = true)
      : (ghostListUpdated[index].excluded = false);
    setGhostList(ghostListUpdated);
  }

  function ghostInfo(ghost) {
    let index = ghostList.findIndex((g) => g.name === ghost);
    setGhostIndex(index);
    setGhostInfoEnabled(true);
  }

  const ghostItems = ghostList
    .sort((a, b) => {
      let name1 = a.name.toUpperCase(),
        name2 = b.name.toUpperCase();
      return name1 === name2 ? 0 : name1 > name2 ? 1 : -1;
    })
    .map((ghost) => (
      <div
        key={ghost.name.toLowerCase().split(' ').join('')}
        className={`ghost ${ghost.name.toLowerCase().split(' ').join('')}${
          ghost.excluded !== true ? '' : ' disabled'
        }`}
      >
        <h2>{ghost.name}</h2>
        <div className="actions">
          <a
            href="#!"
            title="Ghost Info"
            onClick={() => {
              ghostInfo(ghost.name);
              document.getElementById('ghost_info').focus();
            }}
          >
            <span>
              <i className="gg-info"></i>
            </span>
          </a>

          {ghost.excluded !== true ? (
            <a
              href="#!"
              title="Exclude Ghost"
              onClick={() => {
                exclude(ghost.name, true);
                setCounter(counter + 1);
              }}
            >
              <span>
                <i className="gg-close-o"></i>
              </span>
            </a>
          ) : (
            <a
              href="#!"
              title="Include Ghost"
              onClick={() => {
                exclude(ghost.name, false);
                setCounter(counter + 1);
              }}
            >
              <span>
                <i className="gg-check-o"></i>
              </span>
            </a>
          )}
        </div>
      </div>
    ));

  return (
    <>
      <div id="ghosts">{ghostItems}</div>
      <p>{activeEvidence}</p>
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
