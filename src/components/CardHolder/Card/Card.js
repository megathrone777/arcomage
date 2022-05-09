import React, { useState, useRef, useEffect } from "react"
import { useSpring, config } from "react-spring"
import {
  Wrapper,
  Layout,
  Discard,
  Enemy,
  Title,
  ImageHolder,
  Image,
  Descr,
  Text,
  Cost,
  CardClip,
  HoverGlow,
  DiscardTitle
} from "./styled"

const Card = ({
  onApplyCard,
  cardProps,
  isEnemy,
  onChangePlayer,
  botChoice,
  allCards,
  canPlay,
  clickDisable,
  setClickDisable,
  isAffordable
}) => {
  const [take, setTake] = useState(false)
  const [discard, setDiscard] = useState(false)
  const [hover, setHover] = useState(false)
  const [cardDisappear, setCardDisappear] = useState(false)
  const cardContainer = useRef(null)

  // Animation of hover card
  const cardHoverAnimation = useSpring({
    transform: hover
      ? "translate3d(0px, -12px, 0px) scale(1.06)"
      : "translate3d(0px, 0px, 0px) scale(1)",
    config: config.default,
  })

  // Animation of using card
  const cardTakeAnimation = useSpring({
    ...{
      ...(take
        ? {
            transform: `translate3d(
              ${window.innerWidth / 2 -
                cardContainer.current.getBoundingClientRect().left -
                cardContainer.current.getBoundingClientRect().width / 2}px, 
              ${-window.innerHeight / 2}px, 
              0px) scale(1)`,
          }
        : {
            transform: "translate3d(0px, 0px, 0px) scale(1)",
          }),
    },
    config: config.default,
  })

  const cardClicked = (card, discard = false) => {

    if (!isAffordable && !discard) {
      return null
    }
    // Click only on one, and please wait...
    if (!clickDisable || isEnemy) {
      setClickDisable(true)
      setTake(true)
      setHover(false)

      // Delay for animations and effects of resourses and tower/wall
      if (!discard) {
        setTimeout(() => {
          onApplyCard(card)
        }, 500)        
      }

      // Delay for animation of disapear card
      setTimeout(() => {
        setCardDisappear(true)
      }, 1000)

      // Delay for actions after all animations
      setTimeout(() => {
        onChangePlayer(card, discard)
      }, 1200)
    }
  }

  const handleDiscard = (event) => {

   if (event) {
    event.stopPropagation()
   }
    setDiscard(true)
    cardClicked(cardProps, true)
  }

  useEffect(() => {
    if (Number.isInteger(botChoice) && canPlay && allCards[botChoice].id === cardId) {
      setTimeout(() => {
        if (isAffordable === true) {
          cardClicked(cardProps)
        } else {
          handleDiscard()
        }
      }, 1200)
    }
  }, [botChoice])

  const { name, text, type, cost, image, id: cardId, discardable } = cardProps
  // const isAffordableClass = isAffordable ? '' : ' card--disable'

  return (
    <Wrapper
      ref={cardContainer}
      style={!clickDisable && !isEnemy ? cardHoverAnimation : {}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      carddisappear={cardDisappear ? "true" : 0}
    >
      {!isEnemy || take ? (
        <Layout
          onClick={() =>
            cardClicked(cardProps)
          }
          style={cardTakeAnimation}
        >
          <HoverGlow isaffordable={isAffordable} />
          <CardClip type={type} isaffordable={isAffordable}>

          {discardable && (
            <Discard 
              onClick={(event) => handleDiscard(event)}>
            </Discard>
          )}

            {discard && (
              <DiscardTitle>
                DISCARDED
              </DiscardTitle>
            )}

            <Title>
              <span>{name}</span>
            </Title>

            <ImageHolder>
              <Image src={image} alt={`${name} card`} />
            </ImageHolder>

            <Descr>
              <Text>{text}</Text>
              <Cost>
                <span>{cost}</span>
              </Cost>
            </Descr>
          </CardClip>
        </Layout>
      ) : (
        <Layout type={type} style={cardTakeAnimation}>
          <Enemy />
        </Layout>
      )}
    </Wrapper>
  )
}

export default Card
