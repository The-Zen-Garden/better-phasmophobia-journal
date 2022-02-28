import React from 'react';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useJournal, useJournalDispatch } from '../context/journalContext';

function EvidenceGroup() {
  const { clueCount, evidenceList } = useJournal();
  const { activateEvidence, deactivateEvidence, filterGhosts } =
    useJournalDispatch();

  function setEvidence(evidence) {
    if (clueCount < 3 && !evidence.active) {
      activateEvidence(evidence.index);
      filterGhosts();
    } else if (clueCount <= 3 && evidence.active) {
      deactivateEvidence(evidence.index);
      filterGhosts();
    }
  }

  return (
    <div id="evidence">
      {evidenceList.map((evidence, index) => {
        return (
          <div
            key={index}
            className={`evidence ${evidence.name
              .toLowerCase()
              .split(' ')
              .join('')}`}
          >
            <Tippy content={`${evidence.name}`} placement="top">
              <button
                className={clsx(
                  evidence.name.toLowerCase().split(' ').join(''),
                  evidence.active && 'active'
                )}
                onClick={() => setEvidence(evidence)}
              >
                <img alt={evidence.name} src={evidence.img} />
              </button>
            </Tippy>
          </div>
        );
      })}
    </div>
  );
}

export default EvidenceGroup;
