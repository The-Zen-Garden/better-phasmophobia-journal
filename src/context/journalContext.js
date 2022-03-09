import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import ghosts from '../data/ghosts.json';
import evidence from '../data/evidence.json';
import {
  checkClues,
  INITIAL_GHOST_STATE,
  INITIAL_EVIDENCE_STATE,
} from '../utils/journalUtils';

const ActionTypes = {
  ACTIVATE_EVIDENCE: 'ACTIVATE_EVIDENCE',
  DEACTIVATE_EVIDENCE: 'DEACTIVATE_EVIDENCE',
  EXCLUDE_GHOST: 'EXCLUDE_GHOST',
  FILTER_GHOSTS: 'FILTER_GHOSTS',
  HIDE_INFO: 'HIDE_INFO',
  INCLUDE_GHOST: 'INCLUDE_GHOST',
  SHOW_INFO: 'SHOW_INFO',
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.ACTIVATE_EVIDENCE:
      if (draft.clueCount < 3) {
        draft.clueCount++;
        draft.evidenceList[action.index].active = true;
      }
      return draft;
    case ActionTypes.DEACTIVATE_EVIDENCE:
      if (draft.clueCount > 0) {
        draft.clueCount--;
        draft.evidenceList[action.index].active = false;
      }
      return draft;
    case ActionTypes.EXCLUDE_GHOST:
      draft.ghostList[action.index].excluded = true;
      return draft;
    case ActionTypes.FILTER_GHOSTS:
      draft.ghostList.map(
        (ghost) =>
          (ghost.eliminated = checkClues(
            draft.evidenceList.filter((e) => e.active).map((e) => e.name),
            ghost.evidence.map((e) => e.name)
          ))
      );
      return draft;
    case ActionTypes.HIDE_INFO:
      document.activeElement.blur();
      draft.displayInfo = false;
      return draft;
    case ActionTypes.INCLUDE_GHOST:
      draft.ghostList[action.index].excluded = false;
      return draft;
    case ActionTypes.SHOW_INFO:
      draft.info = { ...action.ghost };
      draft.displayInfo = true;
      return draft;
    default:
  }
};

const initialState = {
  ghostList: ghosts
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((ghost, index) => ({
      ...ghost,
      ...INITIAL_GHOST_STATE,
      index,
    })),
  evidenceList: evidence
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((evidenceItem, index) => ({
      ...evidenceItem,
      ...INITIAL_EVIDENCE_STATE,
      index,
    })),
  displayInfo: false,
  info: {
    name: '',
    evidence: [],
    strength: '',
    weakness: '',
    abilities: '',
    behavior: '',
    strategies: '',
  },
  clueCount: 0,
};

const StateContext = createContext(initialState);
const DispatchContext = createContext(undefined);

export const JournalProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useJournal = () => {
  return useContext(StateContext);
};

export const useJournalDispatch = () => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error('useJournalDispatch must be used within a JournalProvider');
  }

  const activateEvidence = useCallback(
    (index) => {
      dispatch({ type: ActionTypes.ACTIVATE_EVIDENCE, index });
    },
    [dispatch]
  );

  const deactivateEvidence = useCallback(
    (index) => {
      dispatch({ type: ActionTypes.DEACTIVATE_EVIDENCE, index });
    },
    [dispatch]
  );

  const filterGhosts = useCallback(() => {
    dispatch({ type: ActionTypes.FILTER_GHOSTS });
  }, [dispatch]);

  const excludeGhost = useCallback(
    (index) => {
      dispatch({ type: ActionTypes.EXCLUDE_GHOST, index });
    },
    [dispatch]
  );

  const hideInfo = useCallback(
    (index) => {
      dispatch({ type: ActionTypes.HIDE_INFO, index });
    },
    [dispatch]
  );

  const includeGhost = useCallback(
    (index) => {
      dispatch({ type: ActionTypes.INCLUDE_GHOST, index });
    },
    [dispatch]
  );

  const showInfo = useCallback(
    (ghost) => {
      dispatch({ type: ActionTypes.SHOW_INFO, ghost });
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      activateEvidence,
      deactivateEvidence,
      excludeGhost,
      filterGhosts,
      hideInfo,
      includeGhost,
      showInfo,
    }),
    [
      activateEvidence,
      deactivateEvidence,
      excludeGhost,
      filterGhosts,
      hideInfo,
      includeGhost,
      showInfo,
    ]
  );
};
