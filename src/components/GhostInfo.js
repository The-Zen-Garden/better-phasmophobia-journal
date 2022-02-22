import React, { Component } from 'react';

export default class GhostInfo extends Component {
  render() {
    return (
      <div id="ghost_info">
        <div className="info_block">
          <div className="header">
            <h2>
              <i className="gg-info"></i>
              {this.props.ghostList[this.props.ghostIndex].name}
              <div className="evidence">
                {Object.entries(
                  this.props.ghostList[this.props.ghostIndex].evidence
                ).map(([key]) => {
                  return (
                    <a
                      key={this.props.ghostList[this.props.ghostIndex].evidence[
                        key
                      ].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                      className={this.props.ghostList[
                        this.props.ghostIndex
                      ].evidence[key].name
                        .toLowerCase()
                        .split(' ')
                        .join('')}
                      href="#!"
                      title={
                        this.props.ghostList[this.props.ghostIndex].evidence[
                          key
                        ].name
                      }
                    >
                      <img
                        alt={
                          this.props.ghostList[this.props.ghostIndex].evidence[
                            key
                          ].name
                        }
                        src={
                          this.props.ghostList[this.props.ghostIndex].evidence[
                            key
                          ].img
                        }
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
              <p>{this.props.ghostList[this.props.ghostIndex].strength}</p>
            </div>
            <div className="weakness">
              <h3>Weakness</h3>
              <p>{this.props.ghostList[this.props.ghostIndex].weakness}</p>
            </div>
            <div className="abilities">
              <h3>Abilities</h3>
              <p>{this.props.ghostList[this.props.ghostIndex].abilities}</p>
            </div>
          </div>
          <div className="behavior">
            <h3>Behavior</h3>
            <p>{this.props.ghostList[this.props.ghostIndex].behavior}</p>
          </div>
          <div className="strategies">
            <h3>Strategies</h3>
            <p>{this.props.ghostList[this.props.ghostIndex].strategies}</p>
          </div>
        </div>
        <a id="back_button" href="#!">
          <i className="gg-arrow-left-o"></i> Back to Ghost List
        </a>
      </div>
    );
  }
}
