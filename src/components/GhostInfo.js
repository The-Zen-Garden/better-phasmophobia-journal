import React from 'react';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useJournal, useJournalDispatch } from '../context/journalContext';
import { useSwipeable } from 'react-swipeable';

function GhostInfo() {
  const { ghostList } = useJournal();
  const { info, displayInfo } = useJournal();
  const { hideInfo, showInfo } = useJournalDispatch();
  const swipeConfig = {
    delta: 50,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  };

  const handleInfo = (next, ghostName) => {
    const filteredGhosts = ghostList.filter((ghost) => !ghost.eliminated);
    const ghostNumber = filteredGhosts.findIndex(
      (ghost) => ghost.name === ghostName
    );
    if (ghostNumber !== 0 && ghostNumber !== filteredGhosts.length - 1) {
      next
        ? showInfo(filteredGhosts[ghostNumber + 1])
        : showInfo(filteredGhosts[ghostNumber - 1]);
    } else {
      next
        ? showInfo(filteredGhosts[+1])
        : showInfo(filteredGhosts[filteredGhosts.length - 1]);
    }
    if (ghostNumber === filteredGhosts.length - 1) {
      next
        ? showInfo(filteredGhosts[0])
        : showInfo(filteredGhosts[ghostNumber - 1]);
    }
  };

  // Swipe Input
  const handlers = useSwipeable({
    onSwipedLeft: (data) => {
      let ghostName =
        data.event.path[
          data.event.path.findIndex((a) => a.id === 'ghost_info')
        ].getAttribute('ghost');
      handleInfo(true, ghostName);
    },
    onSwipedRight: (data) => {
      let ghostName =
        data.event.path[
          data.event.path.findIndex((a) => a.id === 'ghost_info')
        ].getAttribute('ghost');
      handleInfo(false, ghostName);
    },
    ...swipeConfig,
  });

  // Key Input
  function handleKeyDown(e) {
    const ghostName = e.target.attributes.ghost.value;
    if (e.keyCode === 27) {
      hideInfo();
    }
    if (e.keyCode === 39) {
      handleInfo(true, ghostName);
    }
    if (e.keyCode === 37) {
      handleInfo(false, ghostName);
    }
  }

  function backgroundClick(e) {
    e.target.className !== 'active' || hideInfo();
  }

  return (
    <div
      ghost={info.name}
      id="ghost_info"
      className={clsx(displayInfo && 'active')}
      onClick={(e) => backgroundClick(e)}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex="0"
      {...handlers}
    >
      <div className="info_block">
        <div className="header">
          <h2>
            <i className="gg-info"></i>
            {info.name}
            <div className="evidence">
              {info.evidence.map((el, i) => {
                return (
                  <Tippy
                    key={info.evidence[i].name
                      .toLowerCase()
                      .split(' ')
                      .join('')}
                    content={info.evidence[i].name}
                    placement="bottom"
                    delay={[150, 0]}
                    onShow={() => Tippy.hideAll}
                  >
                    <button
                      className={info.evidence[i].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                    >
                      <img
                        alt={info.evidence[i].name}
                        src={info.evidence[i].img}
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
