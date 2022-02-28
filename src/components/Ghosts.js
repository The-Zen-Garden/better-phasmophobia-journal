import React from 'react';
import { useJournal, useJournalDispatch } from '../context/journalContext';
import GhostCard from './GhostCard';

function Ghosts() {
  const { ghostList } = useJournal();
  const { excludeGhost, includeGhost, showInfo } = useJournalDispatch();

  const handleInfo = (ghost) => {
    document.getElementById('ghost_info').focus();
    document.querySelector('#ghost_info').scrollTo(0, 0);
    showInfo(ghost);
  };

  return (
    <div id="ghosts">
      {ghostList
        .filter((ghost) => !ghost.eliminated)
        .map((ghost) => (
          <GhostCard
            key={ghost.index}
            name={ghost.name}
            excluded={ghost.excluded}
            onInfo={() => handleInfo(ghost)}
            onExclude={() => excludeGhost(ghost.index)}
            onInclude={() => includeGhost(ghost.index)}
          />
        ))}
    </div>
  );
}

export default Ghosts;
