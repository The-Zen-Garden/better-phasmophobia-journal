import React, { Component } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default class Evidence extends Component {
  render() {
    const parentProps = this.props;
    const evidence = parentProps.evidence.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    function setEvidence(e) {
      if (
        parentProps.activeEvidence.length < 3 &&
        !e.target.classList.contains('active')
      ) {
        e.target.classList.add('active');
        parentProps.activeEvidenceChange(e.target.querySelector('img').alt, 1);
        return;
      }

      if (
        parentProps.activeEvidence.length <= 3 &&
        e.target.classList.contains('active')
      ) {
        e.target.classList.remove('active');
        parentProps.activeEvidenceChange(e.target.querySelector('img').alt, 0);
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
                <a
                  className={evident.name.toLowerCase().split(' ').join('')}
                  href="#!"
                  // title={evidence[key].name}
                  onClick={(e) => setEvidence(e)}
                >
                  <img alt={evident.name} src={evident.img} />
                </a>
              </Tippy>
            </div>
          );
        })}
      </div>
    );
  }
}
