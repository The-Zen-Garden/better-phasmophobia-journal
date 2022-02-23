import React, { useState, useEffect } from 'react';
import { ghosts } from '../data/ghosts';
import GhostInfo from './GhostInfo';

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

function Ghosts() {
  const [ghostList, setGhostList] = useState(ghosts);
  const [counter, setCounter] = useState(0);
  const [ghostIndex, setGhostIndex] = useState(0);
  const [ghostInfoEnabled, setGhostInfoEnabled] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounce(function addPadding() {
      const evidenceHeight =
        document.querySelector('#evidence').offsetHeight + 40;
      const ghostsHeight = document.querySelector('#ghosts').offsetHeight;
      const windowHeight = window.innerHeight;
      if (ghostsHeight + evidenceHeight > windowHeight) {
        document.body.style.paddingBottom = evidenceHeight + 'px';
      } else {
        document.body.style.paddingBottom = 0;
      }
    }, 1000);

    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  function ghostInfoChange(b) {
    setGhostInfoEnabled(b);
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
      <GhostInfo
        ghostIndex={ghostIndex}
        ghostList={ghostList}
        ghostInfoEnabled={ghostInfoEnabled}
        ghostInfoChange={ghostInfoChange}
      />
      <div id="evidence">
        <div className="evidence dots_projector">
          <a className="" href="#!" title="D.O.T.S. Projector">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png"
            />
            <h2>D.O.T.S. Projector</h2>
          </a>
        </div>
        <div className="evidence emf_level_5">
          <a className="" href="#!" title="EMF Level 5">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png"
            />
            <h2>EMF Level 5</h2>
          </a>
        </div>
        <div className="evidence fingerprints">
          <a className="" href="#!" title="Fingerprints">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png"
            />
            <h2>Finger Prints</h2>
          </a>
        </div>
        <div className="evidence freezing_temperatures">
          <a className="" href="#!" title="Freezing Temperatures">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png"
            />
            <h2>Freezing Temps</h2>
          </a>
        </div>
        <div className="evidence ghost_orbs">
          <a className="" href="#!" title="Ghost Orbs">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png"
            />
            <h2>Ghost Orbs</h2>
          </a>
        </div>
        <div className="evidence ghost_writing">
          <a className="" href="#!" title="Ghost Writing">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png"
            />
            <h2>Ghost Writing</h2>
          </a>
        </div>
        <div className="evidence spirit_box">
          <a className="not_active" href="#!" title="Spirit Box">
            <img
              alt=""
              src="https://static.wikia.nocookie.net/phasmophobia/images/4/4c/SpiritBox_Ghost.png"
            />
            <h2>Spirit Box</h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Ghosts;
