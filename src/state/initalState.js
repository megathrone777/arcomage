/* ! The inital state of the application, scroll to the bottom for the "type-map" ! */
// TODO create config in initialState (at least the number of cards)

// import {cardGenerator} from "./../components/CardHolder/CardGenerator"
import { cards } from "./cards"

import { import2Array, getRandom } from "./../helpers/helpers"

// webpack imports all the images from the folder that comply with the regex
const iconsImport = import2Array(
  require.context("./../images/icons", false, /\.(svg)$/)
)

const cardsWithImage = cards.map(card => {
  card.image = iconsImport[getRandom(iconsImport.length)]
  return card
})

export const initialState = {
  players: {
    player1: {
      name: "Player 1",
      color: "red",
      canPlay: true,
      stats: {
        mines: 1,
        bricks: 15,
        magic: 1,
        gems: 15,
        dungeons: 1,
        monsters: 15,
        wall: 30,
        tower: 40,
      },
      cards: [],
      disabledCards: [],
    },
    player2: {
      name: "Player 2",
      color: "blue",
      canPlay: false,
      stats: {
        mines: 1,
        bricks: 15,
        magic: 1,
        gems: 15,
        dungeons: 1,
        monsters: 15,
        wall: 30,
        tower: 40,
      },
      cards: [],
      disabledCards: [],
    },
  },
  cards: cardsWithImage,
  playedCards: [],
  winner: "",
}
