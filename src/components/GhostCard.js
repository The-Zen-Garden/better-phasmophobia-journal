import React from 'react';

const GhostCard = ({ name, excluded, onInfo, onExclude, onInclude }) => {
  return (
    <div
      className={`ghost ${name.toLowerCase().split(' ').join('')}${
        excluded !== true ? '' : ' disabled'
      }`}
    >
      <h2>{name}</h2>
      <div className="actions">
        <button title="Ghost Info" onClick={onInfo}>
          <span>
            <i className="gg-info"></i>
          </span>
        </button>

        {excluded !== true ? (
          <button title="Exclude Ghost" onClick={onExclude}>
            <span>
              <i className="gg-close-o"></i>
            </span>
          </button>
        ) : (
          <button title="Include Ghost" onClick={onInclude}>
            <span>
              <i className="gg-check-o"></i>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default GhostCard;
