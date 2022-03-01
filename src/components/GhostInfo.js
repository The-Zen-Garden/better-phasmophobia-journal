import React from 'react';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useJournal, useJournalDispatch } from '../context/journalContext';

function GhostInfo() {
  const { info, displayInfo } = useJournal();
  const { hideInfo } = useJournalDispatch();

  function backgroundClick(e) {
    e.target.className !== 'active' || hideInfo();
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      hideInfo();
    }
  }

  return (
    <div
      id="ghost_info"
      className={clsx(displayInfo && 'active')}
      onClick={(e) => backgroundClick(e)}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex="0"
    >
      <div className="info_block">
        <div className="header">
          <h2>
            <i className="gg-info"></i>
            {info.name}
            <div className="evidence">
              {Object.entries(info.evidence).map(([key]) => {
                return (
                  <Tippy
                    key={info.evidence[key].name
                      .toLowerCase()
                      .split(' ')
                      .join('')}
                    content={info.evidence[key].name}
                    placement="bottom"
                    delay={[150, 0]}
                    onShow={() => Tippy.hideAll}
                  >
                    <button
                      className={info.evidence[key].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                    >
                      <img
                        alt={info.evidence[key].name}
                        src={info.evidence[key].img}
                      />
                    </button>
                  </Tippy>
                );
              })}
            </div>
          </h2>
        </div>
        <div className="s_w">
          <div className="strength">
            <h3>Strength</h3>
            <p>{info.strength}</p>
          </div>
          <div className="weakness">
            <h3>Weakness</h3>
            <p>{info.weakness}</p>
          </div>
          <div className="abilities">
            <h3>Abilities</h3>
            <p>{info.abilities}</p>
          </div>
        </div>
        <div className="behavior">
          <h3>Behavior</h3>
          <p>{info.behavior}</p>
        </div>
        <div className="strategies">
          <h3>Strategies</h3>
          <p>{info.strategies}</p>
        </div>
      </div>
      <span>
        <button id="back_button" onClick={hideInfo}>
          <i className="gg-arrow-left-o"></i> Back to Ghost List
        </button>
      </span>
    </div>
  );
}

export default GhostInfo;
