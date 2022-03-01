export const INITIAL_GHOST_STATE = {
  excluded: false,
  eliminated: false,
};
export const INITIAL_EVIDENCE_STATE = { active: false };

export const checkClues = (cluesList, evidenceList) => {
  return (
    cluesList.length > 0 &&
    !cluesList.every((val) => evidenceList.includes(val))
  );
};
