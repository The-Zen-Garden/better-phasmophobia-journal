import React from 'react';
import { ghosts } from '../data/ghosts';

const ghostItems = ghosts.map((ghost) => (
  <div className="ghost {ghost.name}">{ghost.name}</div>
));

class GhostItems extends React.Component {
  render() {
    return <div id="ghosts">{ghostItems}</div>;
  }
}

export default GhostItems;
