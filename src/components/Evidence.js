import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Evidence(props) {
  const evidence = props.evidence.sort((a, b) => (a.name > b.name ? 1 : -1));

  function setEvidence(e) {
    if (
      props.activeEvidence.length < 3 &&
      !e.target.classList.contains('active')
    ) {
      e.target.classList.add('active');
      props.activeEvidenceChange(e.target.querySelector('img').alt, 1);
      return;
    }

    if (
      props.activeEvidence.length <= 3 &&
      e.target.classList.contains('active')
    ) {
      e.target.classList.remove('active');
      props.activeEvidenceChange(e.target.querySelector('img').alt, 0);
      return;
    }
  }

  return (
    <div id="evidence">
      {evidence.map((evident, index) => {
        return (
          <div
            key={index}
            className={`evidence ${evident.name
              .toLowerCase()
              .split(' ')
              .join('')}`}
          >
            <Tippy content={`${evident.name}`} placement="top">
              <button
                className={evident.name.toLowerCase().split(' ').join('')}
                // title={evidence[key].name}
                onClick={(e) => setEvidence(e)}
              >
                <img alt={evident.name} src={evident.img} />
              </button>
            </Tippy>
          </div>
        );
      })}
    </div>
  );
}

export default Evidence;
