import React, { useState } from "react"
import BackgroundLogo from "../Background/BackgroundLogo/BackgroundLogo"
import {
  Button,
  Caption,
  Layout,
  Wrapper,
  Helper,
  Roll,
  Content,
  Input,
  Rules,
  RulesClose,
} from "./styled"
import { TweenLite } from "gsap"
import { useDispatch } from "react-redux"
import { setPlayerName } from "../../state/actionCreators"
import { import2Object } from "../../helpers/helpers"

const svgImport = import2Object(
  require.context("../../images/ui_icons", false, /\.(svg)$/)
)

const Intro = ({ startGame, openRules, closeRules }) => {
  const [isInputOpened, setInputOpened] = useState(false)
  const dispatch = useDispatch()

  const toggleInput = () => {
    const showBg = () => {
      TweenLite.to("#startInput", 0.1, {
        backgroundPositionX: 0,
      })
    }

    TweenLite.to("#startInput", 0.3, {
      height: "33px",
      visibility: "visible",
      opacity: 1,
      marginBottom: "10px",
      onComplete: () => {
        showBg()
      },
    })
  }

  const enterTheGame = e => {
    e.persist()
    const val = e.target.value

    if (val.length > 0 && e.keyCode === 13) {
      dispatch(setPlayerName(val))
      startGame()
    } else if (val.length === 0) {
      e.target.style.borderBottom = "2px solid red"
    } else {
      e.target.style.borderBottom = "none"
    }
  }

  return (
    <Wrapper id="intro">
      <Content id="introContent">
        <BackgroundLogo />
        <Helper id="introHelper" />

        <Layout id="introLayout">
          <Input
            type="text"
            placeholder="Player 1"
            id="startInput"
            onKeyUp={e => enterTheGame(e)}
          />
          <Button
            onClick={() => {
              setInputOpened(true)
              toggleInput()
              isInputOpened ? startGame() : null
            }}
          >
            {isInputOpened ? "Start" : "New game"}
          </Button>
          <Button onClick={() => openRules()}>Rules</Button>
        </Layout>

        <RulesClose type="button" id="rulesClose" onClick={() => closeRules()}>
          <img src={svgImport["back-icon.svg"]} alt="Close" />
        </RulesClose>
        <Rules id="rules">
          <Caption>Rules</Caption>
          <p>
            Build your tower, destroy your opponent's tower, or collect enough
            resources before your opponent does.
          </p>

          <p>
            Large yellow numbers in the column are the generators. This is how
            many new units of the particular resources you will receive on your
            next turn. Small black numbers in the column are the resources. This
            is how many units you have available to spend on your current turn.
          </p>

          <p>
            Cards: Each have their own cost to play, indicated in a small circle
            in the lower right corner of the card. The cost will be deducted
            from your resources according to the color of the card. Left-click
            on a card plays the card. Right-click on a card to discard without
            playing.
          </p>

          <p>
            Red represents your Quarry Generator which produces your Brick
            resources. <br />
            Blue represents your Magic Generator which produces Gem resources.{" "}
            <br />
            Green represents your Dungeon generator which produces Beast
            resources.
          </p>

          <Caption>Victory conditions</Caption>
          <p>
            The game starts with each player having a Tower of 20 and a Wall of
            10. The object is to get to either a Tower of 100, one of the
            resources to 300, or to destroy your opponent's Tower.
          </p>
        </Rules>
      </Content>
      <Roll />
    </Wrapper>
  )
}

export default Intro
