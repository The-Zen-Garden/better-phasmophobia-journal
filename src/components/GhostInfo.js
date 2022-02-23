import React, { Component } from 'react';

export default class GhostInfo extends Component {
  render() {
    const parentProps = this.props;
    const i = parentProps.ghostIndex;
    const list = parentProps.ghostList;

    function backgroundClick(e) {
      e.target.className !== 'active' || parentProps.ghostInfoChange(false);
    }

    return (
      <div
        id="ghost_info"
        className={parentProps.ghostInfoEnabled ? 'active' : ''}
        onClick={(e) => backgroundClick(e)}
      >
        <div className="info_block" ref={this.infoRef}>
          <div className="header">
            <h2>
              <i className="gg-info"></i>
              {list[i].name}
              <div className="evidence">
                {Object.entries(list[i].evidence).map(([key]) => {
                  return (
                    <a
                      key={list[i].evidence[key].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                      className={list[i].evidence[key].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                      href="#!"
                      title={list[i].evidence[key].name}
                    >
                      <img
                        alt={list[i].evidence[key].name}
                        src={list[i].evidence[key].img}
                      />
                    </a>
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
          onClick={() => parentProps.ghostInfoChange(false)}
        >
          <i className="gg-arrow-left-o"></i> Back to Ghost List
        </a>
      </div>
    );
  }
}
