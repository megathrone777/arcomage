import { initialState } from "./initalState"
import {
  SET_INITIAL_GAME_STATE,
  DRAW_CARDS,
  USE_CARD,
  APPLY_STATS_CHANGE,
  CHANGE_PLAYER,
  SET_PLAYER_NAME,
  DISABLE_CARD,
  ENABLE_CARD,
} from "./constants"
import { sounds } from "@constants/audio"
import { resourcesDictionary } from "@constants/gameConstants"

// REDUCERS
const processCardDraw = (state, playerId) => {
  let newState = JSON.parse(JSON.stringify(state))

  const allCards = newState.cards
  let max_index = allCards.length - 1

  if (newState.players[playerId].cards.length === 0)
    newState.players[playerId].cards = Array(6).fill(null)

  newState.players[playerId].cards.forEach((item, i) => {
    if (item === null) {
      const index = Math.round(Math.random() * max_index)
      newState.players[playerId].cards[i] = allCards[index]
      allCards.splice(index, 1)
      max_index = max_index - 1
    }
  })

  // remove used cards that were disabled
  newState = cleanDisabledCardsArray(newState, playerId)

  return newState
}

const processDiscardCard = (state, card) => {
  if (!card) return

  const newState = JSON.parse(JSON.stringify(state))

  const { cardId, playerId, discardType } = card

  const { cards } = newState.players[playerId]

  //remove the card
  const newCards = cards.map(card => {
    if (card !== null && card.id === cardId) {
      return null
    }
    return card
  })
  //get back the deck to the state
  newState.players[card.playerId].cards = newCards

  //mark it as used
  newState.playedCards.push({
    id: cardId,
    discarded: discardType === "DISCARDED",
    playerId: playerId,
  })

  return newState
}

function applyExtraAction(cardID, selfStats, enemyStats) {
  const newSelfStats = selfStats
  const newEnemyStats = enemyStats

  switch (cardID) {
    case 5:
      newSelfStats.mines += selfStats.mines < enemyStats.mines ? 2 : 1
      sounds.ResourceUp.play()
      break
    case 8:
      newSelfStats.mines =
        selfStats.mines < enemyStats.mines ? enemyStats.mines : selfStats.mines
      sounds.ResourceUp.play()
      break
    case 12:
      newSelfStats.wall += selfStats.wall === 0 ? 6 : 3
      sounds.WallUp.play()
      break
    case 31:
      if (selfStats.wall < enemyStats.wall) {
        newSelfStats.dungeons -= 1
        newSelfStats.tower -= 2
        sounds.ResourceDown.play()
      } else if (selfStats.wall >= enemyStats.wall) {
        newEnemyStats.dungeons -= 1
        newEnemyStats.tower -= 2
        sounds.ResourceDown.play()
      }
      break
    case 32:
      if (selfStats.dungeons < enemyStats.dungeons) {
        newSelfStats.dungeons += 1
        sounds.ResourceUp.play()
      }
      newEnemyStats.monsters += 6
      sounds.ResourceUp.play()
      newEnemyStats.wall += 6
      sounds.WallUp.play()
      break
    case 34:
      newSelfStats.wall = enemyStats.wall
      newEnemyStats.wall = selfStats.wall
      break
    case 48:
      newEnemyStats.magic = Math.max(selfStats.magic, enemyStats.magic)
      newSelfStats.magic = Math.max(selfStats.magic, enemyStats.magic)
      break
    case 64:
      newSelfStats.tower += selfStats.tower < enemyStats.tower ? 2 : 1
      sounds.TowerUp.play()
      break
    case 67:
      if (selfStats.tower > enemyStats.wall) {
        newEnemyStats.tower -= 8
      } else {
        newEnemyStats.wall -= 8
      }
      break
    case 87:
      if (enemyStats.wall === 0) {
        newEnemyStats.tower -= 10
      } else {
        newEnemyStats.wall -= 6
      }
      break
    case 89:
      newEnemyStats.wall -= enemyStats.wall > 0 ? 10 : 7
      break
    case 90:
      newEnemyStats.wall -= selfStats.magic > enemyStats.magic ? 12 : 7
      break
    case 91:
      if (selfStats.wall > enemyStats.wall) {
        newEnemyStats.tower -= 6
      } else {
        newEnemyStats.wall -= 6
      }
      break
    case 94:
      newEnemyStats.gems -= 10
      newEnemyStats.bricks -= 6
      sounds.ResourceDown.play()
      newSelfStats.gems +=
        newEnemyStats.gems >= 0 ? 5 : Math.floor(enemyStats.gems / 2)
      sounds.ResourceUp.play()
      newSelfStats.bricks +=
        newEnemyStats.bricks >= 0 ? 3 : Math.floor(enemyStats.bricks / 2)
      sounds.ResourceUp.play()
      break
    case 98:
      newEnemyStats.wall -= selfStats.wall > enemyStats.wall ? 3 : 2
      break
    default:
      break
  }

  return {
    newSelfStats,
    newEnemyStats,
  }
}

const processStatsChange = (state, card) => {
  if (!card) return state

  const { stats: cardStats } = card.actions

  const statsKeys = Object.keys(state.players[card.playerId].stats)

  const selfStats =
    card.playerId === "player1"
      ? { ...state.players.player1.stats }
      : { ...state.players.player2.stats }

  const enemyStats =
    card.playerId === "player1"
      ? { ...state.players.player2.stats }
      : { ...state.players.player1.stats }

  let newSelfStats = {}
  let newEnemyStats = {}

  if (card.extraAction) {
    const newStats = applyExtraAction(card.id, selfStats, enemyStats)
    newSelfStats = newStats.newSelfStats
    newEnemyStats = newStats.newEnemyStats
  }

  statsKeys.forEach(key => {
    if (key === card.type.toLowerCase()) {
      selfStats[resourcesDictionary[key]] =
        selfStats[resourcesDictionary[key]] - card.cost
    }

    if (!card.extraAction) {
      newSelfStats[key] = cardStats.self[key] + selfStats[key]
      newEnemyStats[key] = cardStats.enemy[key] + enemyStats[key]
    }

    if (key !== "wall") {
      newSelfStats[key] = newSelfStats[key] < 0 ? 0 : newSelfStats[key]
      newEnemyStats[key] = newEnemyStats[key] < 0 ? 0 : newEnemyStats[key]
    }
  })

  if (newSelfStats["wall"] <= 0) {
    newSelfStats["tower"] += newSelfStats["wall"]
    newSelfStats["wall"] = 0
  }

  if (newEnemyStats["wall"] <= 0) {
    newEnemyStats["tower"] += newEnemyStats["wall"]
    newEnemyStats["wall"] = 0
  }

  let newState = JSON.parse(JSON.stringify(state))

  newState.players.player1.stats =
    card.playerId === "player1" ? newSelfStats : newEnemyStats
  newState.players.player2.stats =
    card.playerId === "player1" ? newEnemyStats : newSelfStats

  newState.winner = checkWinner(
    newState.players.player1.stats,
    newState.players.player2.stats
  )

  return newState
}

const checkWinner = (player1Stats, player2Stats) => {
  // Player lost if His tower reached 0 points
  if (player1Stats.tower <= 0) return "player2"
  if (player2Stats.tower <= 0) return "player1"
  //Player won, if: - His tower reached 100 points
  if (player1Stats.tower >= 100) return "player1"
  if (player2Stats.tower >= 100) return "player2"
  //Player won - His resources (any kind) reached 300 points
  if (
    player1Stats.monsters >= 300 ||
    player1Stats.monsters >= 300 ||
    player1Stats.monsters >= 300
  )
    return "player1"
  if (
    player2Stats.monsters >= 300 ||
    player2Stats.monsters >= 300 ||
    player2Stats.monsters >= 300
  )
    return "player2"

  return ""
}

const updateResourcesOnNewTurn = newStats => {
  //Update the resources only after the 2 players have played

  const generators = Object.keys(resourcesDictionary)
  const resources = Object.values(resourcesDictionary)

  generators.forEach((generator, index) => {
    newStats[resources[index]] =
      newStats[resources[index]] + newStats[generator]
    sounds.GeneratorUp.play()
    if (newStats[resources[index]] < 0) {
      newStats[resources[index]] = 0
    }
  })
  return newStats
}

const processChangePlayer = (state, playerId) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (!newState.winner) {
    Object.keys(newState.players).forEach(playerName => {
      newState.players[playerName].canPlay =
        playerName === playerId ? false : true
    })
  }

  return newState
}

const processUsingCard = (state, card, playerId, discardType) => {
  const { id: cardId } = card
  sounds.CardUse.play()

  const cardToBeDiscarded = { cardId, playerId, discardType }

  let newState = processDiscardCard(state, cardToBeDiscarded)
  newState = processCardDraw(newState, playerId)

  // const playerToUpdate = playerId === 'player1' ? 'player2' : 'player1'
  newState.players[playerId].stats = updateResourcesOnNewTurn(
    newState.players[playerId].stats
  )

  return newState
}

const cleanDisabledCardsArray = (newState, playerId) => {
  // const newDisabledCards = []
  const { cards, disabledCards } = newState.players[playerId]

  const newDisabledCards = cards.map(card => {
    if (disabledCards.includes(card.id)) {
      return card.id
    }
  })

  newState.players[playerId].disabledCards = newDisabledCards.filter(
    card => card
  )

  return newState
}

const processDisableCard = (state, cardToBeDisabled) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.players[cardToBeDisabled.playerId].disabledCards.push(
    cardToBeDisabled.card.id
  )
  return newState
}

const setPlayerName = (state, playerName) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.players.player1.name = playerName
  return newState
}

const processEnableCard = (state, cardToBeEnabled) => {
  const newState = JSON.parse(JSON.stringify(state))
  const newDisabledCards = newState.players[
    cardToBeEnabled.playerId
  ].disabledCards.filter(cardId => cardId !== cardToBeEnabled.card.id)
  newState.players[cardToBeEnabled.playerId].disabledCards = newDisabledCards
  return newState
}

// ROOT REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_GAME_STATE:
      return { ...state, initialState: action.initialState }
    case DRAW_CARDS:
      return { ...state, ...processCardDraw(state, action.playerId) }
    case APPLY_STATS_CHANGE:
      return { ...state, ...processStatsChange(state, action.cardStats) }
    case CHANGE_PLAYER:
      return { ...state, ...processChangePlayer(state, action.playerId) }
    case SET_PLAYER_NAME:
      return { ...state, ...setPlayerName(state, action.playerName) }
    case USE_CARD:
      return {
        ...state,
        ...processUsingCard(
          state,
          action.usingAttribute.cardStats,
          action.usingAttribute.playerId,
          action.usingAttribute.discardType
        ),
      }
    case DISABLE_CARD:
      return {
        ...state,
        ...processDisableCard(state, action.cardToBeDisabled),
      }
    case ENABLE_CARD:
      return {
        ...state,
        ...processEnableCard(state, action.cardToBeEnabled),
      }
    default:
      return state
  }
}
