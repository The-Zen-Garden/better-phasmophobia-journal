import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function GhostInfo(props) {
  const i = props.ghostIndex;
  const list = props.ghostList;

  function backgroundClick(e) {
    e.target.className !== 'active' || props.ghostInfoChange(false);
  }

  return (
    <div
      id="ghost_info"
      className={props.ghostInfoEnabled ? 'active' : ''}
      onClick={(e) => backgroundClick(e)}
      onKeyDown={(e) => props.handleKeyDown(e)}
      tabIndex="0"
    >
      <div className="info_block">
        <div className="header">
          <h2>
            <i className="gg-info"></i>
            {list[i].name}
            <div className="evidence">
              {Object.entries(list[i].evidence).map(([key]) => {
                return (
                  <Tippy
                    key={list[i].evidence[key].name
                      .toLowerCase()
                      .split(' ')
                      .join('')}
                    content={list[i].evidence[key].name}
                    placement="bottom"
                    delay={[150, 0]}
                    onShow={() => Tippy.hideAll}
                  >
                    <a
                      className={list[i].evidence[key].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                      href="#!"
                      // title={list[i].evidence[key].name}
                    >
                      <img
                        alt={list[i].evidence[key].name}
                        src={list[i].evidence[key].img}
                      />
                    </a>
                  </Tippy>
                );
              })}
            </div>
          </h2>
        </div>
        <div className="s_w">
          <div className="strength">
            <h3>Strength</h3>
            <p>{list[i].strength}</p>
          </div>
          <div className="weakness">
            <h3>Weakness</h3>
            <p>{list[i].weakness}</p>
          </div>
          <div className="abilities">
            <h3>Abilities</h3>
            <p>{list[i].abilities}</p>
          </div>
        </div>
        <div className="behavior">
          <h3>Behavior</h3>
          <p>{list[i].behavior}</p>
        </div>
        <div className="strategies">
          <h3>Strategies</h3>
          <p>{list[i].strategies}</p>
        </div>
      </div>
      <a
        id="back_button"
        href="#!"
        onClick={() => props.ghostInfoChange(false)}
      >
        <i className="gg-arrow-left-o"></i> Back to Ghost List
      </a>
    </div>
  );
}

export default GhostInfo;
