import { window } from "browser-monads"

import Intro from "@audio/music/intro.mp3"
import Game from "@audio/music/game.mp3"

import CardDraw from "@audio/sounds/card-draw.mp3"
import CardUse from "@audio/sounds/card-use.mp3"
import Damage from "@audio/sounds/damage.mp3"
import GameOver from "@audio/sounds/game-over.mp3"
import GameWin from "@audio/sounds/game-win.mp3"
import GeneratorDown from "@audio/sounds/generator-down.mp3"
import GeneratorUp from "@audio/sounds/generator-up.mp3"
import ResourceDown from "@audio/sounds/resource-down.mp3"
import ResourceUp from "@audio/sounds/resource-up.mp3"
import TowerUp from "@audio/sounds/tower-up.mp3"
import WallUp from "@audio/sounds/wall-up.mp3"

const music = {
  Intro,
  Game,
}

const sounds = {
  CardDraw,
  CardUse,
  Damage,
  GameOver,
  GameWin,
  GeneratorDown,
  GeneratorUp,
  ResourceDown,
  ResourceUp,
  TowerUp,
  WallUp,
}

// Will contain sounds converted to the Audio objects
const audioSounds = {}

// Convert each sound to the Audio object
Object.entries(sounds).forEach(
  ([soundName, soundFile]) =>
    (audioSounds[soundName] = new window.Audio(soundFile))
)

export { music, audioSounds as sounds }
