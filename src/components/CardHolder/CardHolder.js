/* eslint-disable react/display-name */
/* eslint-disable no-inner-declarations */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Transition } from "react-spring/renderprops"

import {
  drawCards,
  usingCard,
  applyStatsChange,
  changePlayer,
  disableCard,
  enableCard,
} from "./../../state/actionCreators"
import { resourcesDictionary } from "@constants/gameConstants"

import { getRandom } from "./../../helpers/helpers"

import Card from "./Card/Card"
import { Holder, Layout } from "./styled"

const CardHolder = ({ playerId, canPlay, isEnemy, winner }) => {
  // Redux states
  const dispatch = useDispatch()
  const playerCards = useSelector(state => state.app.players[playerId].cards)
  const playerStats = useSelector(state => state.app.players[playerId].stats)
  const disabledCards = useSelector(
    state => state.app.players[playerId].disabledCards
  )

  // We should remember card, what we use
  const [cardStats, setCardStats] = useState(null)
  // Set random index of card from Player2 (bot) card state
  const [botChoice, setBotChoice] = useState(null)
  const [clickDisable, setClickDisable] = useState(false)

  useEffect(() => {
    // Initialize cards in card holder
    dispatch(drawCards(playerId))
  }, [])


  function getNewCard(playedCardStats) {
    // Discard card and take new one

    const useCardStats = playedCardStats || cardStats

    dispatch(
      usingCard({
        cardStats: useCardStats,
        playerId,
        discardType: "PLAYED",
      })
    )
    // For Player 2 (BOT) we can give random card, but only after taking new card by him
    if (isEnemy) setBotChoice(getBotChoice())
    if (!isEnemy) setClickDisable(false)
  }

  useEffect(() => {
    // We want to take new card only when other player "Made his move"
    if (canPlay && cardStats) {
      getNewCard()
    }

    // The first move of the enemy (bot)
    if (canPlay && !cardStats && isEnemy) {
      setBotChoice(getBotChoice())
    }
  }, [canPlay])

  const handleOnApplyCard = card => {
    dispatch(
      applyStatsChange({
        ...card,
        playerId,
      })
    )
    setBotChoice(null)
  }

  const handleOnChangePlayer = (playedCardStats, discard) => {

  if (!playedCardStats.actions.additionalTurn || discard) {
        setTimeout(() => {
          dispatch(changePlayer(playerId))
        }, 1000)
        setCardStats(playedCardStats)
  } else {
    getNewCard(playedCardStats)
  }
  }

  function getBotChoice() {
    // TODO: if all cards are disabled, the choice should discard one

    const availableCards = []
    let cardIndex, botChoise

    playerCards.forEach((card, index) => {
      if (!disabledCards.includes(card.id)) {
        availableCards.push(index)
      }
    })

    if (availableCards.length > 0) {
      cardIndex = getRandom(availableCards.length - 1)
      botChoise = availableCards[cardIndex]
    } else {


      const ableToDiscardCards = playerCards
        .filter(card => card.discardable)
        .map(card => card.id)

      playerCards.forEach((card, index) => {
        if (ableToDiscardCards.includes(card.id)) {
          availableCards.push(index)
        }
      })

      cardIndex = getRandom(availableCards.length - 1)
      botChoise = availableCards[cardIndex]
      
    }

    return botChoise
  }

  function userCanAffordCard(card) {
    const resource2Pay = resourcesDictionary[card.type.toLowerCase()]


    // check for disabled cards, if not disable dispatch
    if (
      card.cost > playerStats[resource2Pay] &&
      !disabledCards.includes(card.id)
    ) {
      dispatch(disableCard({ playerId, card }))
    } else if (
      card.cost <= playerStats[resource2Pay] &&
      disabledCards.includes(card.id)
    ) {
      dispatch(enableCard({ playerId, card }))
    }

    return !disabledCards.includes(card.id)
  }

    return (
      (playerCards.length > 0) && (      
        <Holder canPlay={canPlay}>
            {(winner && (
              <div className="card-holder__winner">
                <div className="card-holder__winner-wrapper" />
                <span className="card-holder__winner-text">
                  {(playerId === winner && !isEnemy) ||
                  (playerId != winner && isEnemy)
                    ? "You win!"
                    : "You lose..."}
                </span>
              </div>
            ))}

            <Transition
                items={playerCards} 
                keys={item => item.id}
                from={{ transform: 'translateX(1500px)' }}
                enter={{ transform: 'translateX(0)' }}
                leave={{ display: 'none' }}
                trail={200}
            >

                {(item) => props => (
                  <Layout style={props}>
                    <Card 
                      key={item.id} 
                      onApplyCard={handleOnApplyCard}
                      onChangePlayer={handleOnChangePlayer}
                      cardProps={item} 
                      isEnemy={isEnemy}
                      botChoice={botChoice}
                      allCards={playerCards}
                      canPlay={canPlay}
                      clickDisable={clickDisable}
                      setClickDisable={setClickDisable}
                      isAffordable={userCanAffordCard(item)}
                    />
                  </Layout>
                )}
            
            </Transition> 
          </Holder>       
      )
    )
  
}

export default CardHolder
