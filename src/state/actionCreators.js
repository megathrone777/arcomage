import {
  SET_INITIAL_GAME_STATE,
  DRAW_CARDS,
  APPLY_STATS_CHANGE,
  // DISCARD_CARD,
  USE_CARD,
  CHANGE_PLAYER,
  SET_PLAYER_NAME,
  DISABLE_CARD,
  ENABLE_CARD
} from "./constants"

// Action creator
export const setInitialGameState = initialState => ({
  type: SET_INITIAL_GAME_STATE,
  initialState,
})

export const drawCards = playerId => ({
  type: DRAW_CARDS,
  playerId,
})

export const usingCard = usingAttribute => ({
  type: USE_CARD,
  usingAttribute,
})

export const applyStatsChange = cardStats => ({
  type: APPLY_STATS_CHANGE,
  cardStats,
})

export const changePlayer = playerId => ({
  type: CHANGE_PLAYER,
  playerId,
})

export const setPlayerName = playerName => ({
  type: SET_PLAYER_NAME,
  playerName,
})

export const disableCard = (cardToBeDisabled) => ({
  type: DISABLE_CARD,
  cardToBeDisabled
})

export const enableCard = (cardToBeEnabled) => ({
  type: ENABLE_CARD,
  cardToBeEnabled
})
