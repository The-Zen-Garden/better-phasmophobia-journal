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
              <p>Can throw multiple objects at once</p>
            </div>
            <div className="weakness">
              <h3>Weakness</h3>
              <p>Ineffective in empty rooms with no throwables</p>
            </div>
            <div className="abilities">
              <h3>Abilities</h3>
              <p>Decrease sanity by throwing objects</p>
            </div>
          </div>
          <div className="behavior">
            <h3>Behavior</h3>
            <p>
              When a Poltergeist interacts with the environment, it has a chance
              of throwing multiple items at once. If a player is nearby, it will
              decrease their sanity by an amount equal to the number of items
              thrown multiplied by 2%. This will create an EMF level 3 reading.
              Poltergeists can also throw items with higher force than other
              ghosts.
            </p>
            <p>
              If there are no items near a Poltergeist, it is unable to use its
              ability. This, however, will not prevent a hunt.
            </p>
          </div>
          <div className="strategies">
            <h3>Strategies</h3>
            <p>
              A Poltergeist's ability to manipulate multiple objects at once may
              make it easier to identify. Players may throw multiple objects in
              close proxmity and observe whether the ghost throws multiple items
              at once.
            </p>
            <p>
              Unlike other ghosts, objects thrown by Poltergeists have the
              ability to decrease player sanity, even when they are not looking
              at the objects being thrown. This can also help to identify the
              ghost; if a player notices a dip in their sanity after they hear
              physical disturbances in nearby rooms, they can guess it is likely
              a Poltergeist they are facing.
            </p>
          </div>
        </div>
        <a id="back_button" href="#!">
          <i className="gg-arrow-left-o"></i> Back to Ghost List
        </a>
      </div>
    );
  }
}
