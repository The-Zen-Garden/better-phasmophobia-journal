import React from 'react';
import { ghosts } from '../data/ghosts';

const ghostItems = ghosts
  .sort((a, b) => {
    let name1 = a.name.toUpperCase(),
      name2 = b.name.toUpperCase();
    return name1 === name2 ? 0 : name1 > name2 ? 1 : -1;
  })
  .map((ghost) => (
    <div
      key={ghost.name.toLowerCase()}
      className={`ghost ${ghost.name.toLowerCase()} ${
        ghost.excluded !== false ? 'disabled' : ''
      }`}
    >
      <h2>{ghost.name}</h2>
      <div className="actions">
        <a href="#!" title="Ghost Info">
          <span>
            <i className="gg-info"></i>
          </span>
        </a>
        <a href="#!" title="Exclude Ghost">
          <span>
            <i className="gg-close-o"></i>
          </span>
        </a>
      </div>
    </div>
  ));

class GhostItems extends React.Component {
  render() {
    return <div id="ghosts">{ghostItems}</div>;
  }
}

export default GhostItems;
