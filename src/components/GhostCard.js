import React from 'react';
import clsx from 'clsx';
import { CgCloseO, CgCheckO, CgInfo  } from "react-icons/cg";

const GhostCard = ({ name, excluded, onInfo, onExclude, onInclude }) => {
  return (
    <div
      className={clsx(
        'ghost',
        name.toLowerCase().split(' ').join(''),
        excluded === true && 'disabled'
      )}
    >
      <h2>{name}</h2>
      <div className="actions">
        <button title="Ghost Info" onClick={onInfo}>
          <span>
            <i className="gg-info"><CgInfo className="cgInfo" /></i>
          </span>
        </button>

        {excluded !== true ? (
          <button title="Exclude Ghost" onClick={onExclude}>
            <span>
              <i className="gg-close-o"><CgCloseO className="CgCloseO" /></i>
            </span>
          </button>
        ) : (
          <button title="Include Ghost" onClick={onInclude}>
            <span>
              <i className="gg-check-o"><CgCheckO className="CgCheckO" /></i>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default GhostCard;
