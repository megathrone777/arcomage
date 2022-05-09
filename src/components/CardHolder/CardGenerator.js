import { import2Array } from "./../../helpers/helpers"

  // webpack imports all the images from the folder that comply with the regex
  const iconsImport = import2Array(
    require.context(
      "./../../images/icons",
      false,
      /\.(svg)$/
    )
  )


export const cardGenerator = (cardsNumber, startId) => { 
const resources = ['bricks', 'gems', 'monsters']
const resourceGen = ['mines', 'magic', 'dungeon']
const structures = ['wall', 'tower']
const icons = iconsImport
const namingWords = ['blood',
'dark',
'scared',
'scream',
'drenched',
'helpless',
'choking',
'crazed',
'knife',
'chainsaw',
'gore',
'corpse',
'decomposed',
'Michael Myers',
'Evil',
'guts',
'worms',
'guns',
'decapitated',
'cat',
'wind',
'werewolf',
'vampire',
'devil',
'demons',
'torture',
'electrocution',
'bruises',
'death',
'creepy',
'ghost',
'unknown',
'brains',
'zombies',
'virus',
'children',
'sheep',
'bite',
'rotten teeth',
'killer dolls',
'moon',
'willow trees',
'mental hospital',
'crazy',
'psycho',
'nightmare',
'rabid',
'drool',
'needles',
'pain',
'slice',
'Halloween',
'deranged',
'flames',
'hell',
'burn',
'bury',
'undead',
'eyeball',
'ashes',
'witch',
'kettle',
'666',
'screaming',
'creaking',
'dripping (blood)',
'stabbing',
'slicing',
'stalking',
'running',
'crying',
'cold',
'damp',
'breathing heavily',
'Heart pumping',
'Shaking',
'Agony',
'chilling-',
'Sick',
'Sinister',
'Serial killer',
'Eerie',
'Ominous',
'murder',
'gnarled',
'fear',
'horrifying',
'terrifying',
'scourge',
'demon',
'dread',
'monstrosity',
'bleak',
'fatal',
'menacing',
'rotten',
'convulsing',
'morbid',
'disturbing',
'putrid',
'anthrax',
'fallen angel',
'buried',
'alarming',
'demonic',
'gory',
'silent',
'suicide',
'Haunt',
'Full moon',
'drowning',
'Motionless',
'tense',
'darkness',
'shadow',
'terror',
'shriek',
'slash',
'zombie',
'eyeballs',
'tearing',
'graves',
'graveyard',
'falling',
'pushed',
'alley',
'occult',
'fanatic',
'obsession',
'possession',
'mutilation',
'captive',
'monster',
'psychopath',
'gruesome',
'fiendish',
'torment',
'dungeon',
'chains',
'stab',
'disembowel',
'horror',
'exorcist',
'exorcism',
'bowels',
'grave',
'cut',
'murderer',
'creature',
'ripped',
'screams',
'oozed',
'smashed',
'killer',
'mental',
'psychotic',
'sliced',
'trapped',
'flesh',
'grotesque',
'squeal',
'bloodcurdling',
'chilling',
'hair-raising',
'spooky',
'hazardous',
'daring',
'edginess',
'anxiety',
'tension',
'claw',
'deteriorated',
'creep',
'tear']

  const cardModel = {
    id: 1,
    name: "",
    text: "",
    type: "",
    cost: 0,
    image: "",
    discardable: null,
    actions: {
      additionalTurn: null,
      discard: null,
      stats: {
        self: {
          mines: 0,
          bricks: 0,
          magic: 0,
          gems: 0,
          dungeons: 0,
          monsters: 0,
          wall: 0,
          tower: 0,
        },
        enemy: {
          mines: 0,
          bricks: 0,
          magic: 0,
          gems: 0,
          dungeons: 0,
          monsters: 0,
          wall: 0,
          tower: 0,
        },
      },
    },
  }

  function _r(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  function generateCards(cardsNumber, startId) {
    const cardsArray = []
    const randLimit = namingWords.length
    for (let i = 0; i < cardsNumber; i++) {
      const card = { ...cardModel }
      const cardType = resources[_r(3)]

        card.id = startId + i
        card.name = `${namingWords[_r(randLimit)]} ${namingWords[_r(randLimit)]}`
        card.text = `${namingWords[_r(randLimit)]} ${namingWords[_r(randLimit)]} ${namingWords[_r(randLimit)]} ${namingWords[_r(randLimit)]}I'm a ${cardType} card`
        card.type = cardType
        card.image = icons[_r(icons.length)]
        card.cost = _r(5)
        card.actions.stats.self[resources[_r(3)]] = _r(4) * -1
        card.actions.stats.self[structures[_r(2)]] = _r(3) * (_r(2) ? 1 : -1)
        card.actions.stats.self[resourceGen[_r(3)]] = (_r(8) === 7 ? (_r(4) + 1) : 0)

      card.actions.stats.enemy[resources[_r(3)]] = _r(4) * -1
      card.actions.stats.enemy[structures[_r(2)]] = _r(3) * -1
      card.actions.stats.self[resourceGen[_r(3)]] = _r(8) > 6 ? _r(3) * -1 : 0

      cardsArray.push(card)
    }
    return cardsArray
  }

  return generateCards(cardsNumber, startId)
}
