import React, { Component } from 'react';

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
        parentProps.activeEvidenceChange(e.target.title, 1);
        console.log('add');
        return;
      }

      if (
        parentProps.activeEvidence.length <= 3 &&
        e.target.classList.contains('active')
      ) {
        e.target.classList.remove('active');
        parentProps.activeEvidenceChange(e.target.title, 0);
        console.log('remove');
        return;
      }
    }

    return (
      <div id="evidence">
        {Object.entries(evidence).map(([key]) => {
          return (
            <div
              key={evidence[key].name.toLowerCase().split(' ').join('')}
              className={`evidence ${evidence[key].name
                .toLowerCase()
                .split(' ')
                .join('')}`}
            >
              <a
                className={evidence[key].name.toLowerCase().split(' ').join('')}
                href="#!"
                title={evidence[key].name}
                onClick={(e) => setEvidence(e)}
              >
                <img alt={evidence[key].name} src={evidence[key].img} />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
