import React, { useState } from 'react';
import { ghosts } from '../data/ghosts';
import GhostInfo from './GhostInfo';

function Ghosts() {
  const [ghostList, setGhostList] = useState(ghosts);
  const [counter, setCounter] = useState(0);
  const [ghostIndex, setGhostIndex] = useState(0);
  const [ghostInfoEnabled, setGhostInfoEnabled] = useState(false);

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
    </>
  );
}

export default Ghosts;
