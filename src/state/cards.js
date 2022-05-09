export const cards = [
    {
      id: 1,
      name: "Brick Shortage",
      text: "All Players lose 8 bricks",
      type: "Mines",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: -8,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: -8,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 2,
      name: "Lucky Cache",
      text: "+2 Bricks, +2 Gems, play again",
      type: "Mines",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 2,
            magic: 0,
            gems: 2,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 3,
      name: "Friendly Terrain",
      text: "+1 Wall, play again",
      type: "Mines",
      cost: 1,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 1,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 4,
      name: "Miners",
      text: "+1 Mine",
      type: "Mines",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 5,
      name: "Mother Lode",
      text: "If Mines < Enemy Mines, then +2 Mines, else +1 Mine",
      type: "Mines",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 6,
      name: "Dwarven Miners",
      text: "+4 Wall, +1 Mines",
      type: "Mines",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 4,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 7,
      name: "Work Overtime",
      text: "+5 Wall, you lose Gems",
      type: "Mines",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: -6,
            dungeons: 0,
            monsters: 0,
            wall: 5,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 8,
      name: "Copping the Tech",
      text: "If Mines < Enemy Mines, then Mines = Enemy Mines",
      type: "Mines",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 9,
      name: "Basic Wall",
      text: "+3 Wall",
      type: "Mines",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 3,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 10,
      name: "Sturdy Wall",
      text: "+4 Wall",
      type: "Mines",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 4,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 11,
      name: "Innovations",
      text: "+1 Mine to all players, you gain 4 Gems",
      type: "Mines",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 1,
            bricks: 0,
            magic: 0,
            gems: 4,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 12,
      name: "Foundations",
      text: "If Wall = 0, then +6 Wall, else +3 Wall",
      type: "Mines",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 13,
      name: "Tremors",
      text: "All Walls take 5 damage, play again",
      type: "Mines",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -5,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -5,
            tower: 0
          }
        }
      }
    },
    {
      id: 14,
      name: "Secret Room",
      text: "+1 Magic, play again",
      type: "Mines",
      cost: 8,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 15,
      name: "Earthquake",
      text: "-1 Mine to all players",
      type: "Mines",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: -1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: -1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 16,
      name: "Big Wall",
      text: "+6 Wall",
      type: "Mines",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 6,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 17,
      name: "Collapse",
      text: "-1 Enemy Mine",
      type: "Mines",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: -1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 18,
      name: "New Equipment",
      text: "+2 Mines",
      type: "Mines",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 2,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 19,
      name: "Strip Mine",
      text: "-1 Mine, +10 Wall, you gain 5 Gems",
      type: "Mines",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: -1,
            bricks: 0,
            magic: 0,
            gems: 5,
            dungeons: 0,
            monsters: 0,
            wall: 10,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 20,
      name: "Reinforced Wall",
      text: "+8 Wall",
      type: "Mines",
      cost: 8,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 8,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 21,
      name: "Portcullis",
      text: "+5 Wall, +1 Dungeon",
      type: "Mines",
      cost: 9,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 1,
            monsters: 0,
            wall: 5,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 22,
      name: "Crystal Rocks",
      text: "+7 Wall, you gain 7 Gems",
      type: "Mines",
      cost: 9,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 7,
            dungeons: 0,
            monsters: 0,
            wall: 7,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 23,
      name: "Harmonic Ore",
      text: "+6 Wall, +3 Tower",
      type: "Mines",
      cost: 11,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 6,
            tower: 3
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 24,
      name: "Mondo Wall",
      text: "+12 Wall",
      type: "Mines",
      cost: 13,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 12,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 25,
      name: "Focused Designs",
      text: "+8 Wall, +5 Tower",
      type: "Mines",
      cost: 15,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 8,
            tower: 5
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 26,
      name: "Great Wall",
      text: "+15 Wall",
      type: "Mines",
      cost: 16,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 15,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 27,
      name: "Rock Launcher",
      text: "+6 Wall, 10 damage to Enemy",
      type: "Mines",
      cost: 18,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 6,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -10,
            tower: 0
          }
        }
      }
    },
    {
      id: 28,
      name: "Dragon's Heart",
      text: "+20 Wall, +8 Tower",
      type: "Mines",
      cost: 24,
      rarity: "epic",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 20,
            tower: 8
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 29,
      name: "Forced Labor",
      text: "+9 Wall, you lose 5 Monsters",
      type: "Mines",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -5,
            wall: 9,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 30,
      name: "Rock Garden",
      text: "+1 Wall, +1 Tower, +2 Monsters",
      type: "Mines",
      cost: 1,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 2,
            wall: 1,
            tower: 1
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 31,
      name: "Flood Water",
      text: "-1 Dungeon and 2 damage to Tower for player(s) with lowest Wall",
      type: "Mines",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 32,
      name: "Barracks",
      text: "+6 Monsters, +6 Wall, if Dungeons < Enemy Dungeons, then +1 Dungeon",
      type: "Mines",
      cost: 10,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 6,
            wall: 6,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 33,
      name: "Battlements",
      text: "+7 Wall, 6 damage to Enemy",
      type: "Mines",
      cost: 14,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 7,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 34,
      name: "Shift",
      text: "Switch your Wall with Enemy Wall",
      type: "Mines",
      cost: 17,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 35,
      name: "Quartz",
      text: "+1 Tower, play again",
      type: "Magic",
      cost: 1,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 1
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 36,
      name: "Smoky Quartz",
      text: "1 damage to Enemy Tower, play again",
      type: "Magic",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -1
          }
        }
      }
    },
    {
      id: 37,
      name: "Amethyst",
      text: "+3 Tower",
      type: "Magic",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 3
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 38,
      name: "Spell Weavers",
      text: "+1 Magic",
      type: "Magic",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 39,
      name: "Prism",
      text: "Draw 1 card, discard 1 card, play again",
      type: "Magic",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: true,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 40,
      name: "Lodestone",
      text: "+8 Tower, this card cannot be discarded",
      type: "Magic",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: false,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: +8
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 41,
      name: "Solar Flare",
      text: "+2 Tower, 2 damage to Enemy Tower",
      type: "Magic",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 2
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -2
          }
        }
      }
    },
    {
      id: 42,
      name: "Crystal Matrix",
      text: "+1 Magic, +3 Tower, +1 Enemy Tower",
      type: "Magic",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 3
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 1
          }
        }
      }
    },
    {
      id: 43,
      name: "Gemstone Flaw",
      text: "3 Damage to Enemy Tower",
      type: "Magic",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -3
          }
        }
      }
    },
    {
      id: 44,
      name: "Ruby",
      text: "+5 Tower",
      type: "Magic",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 5
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 45,
      name: "Gem Spear",
      text: "5 damage to Enemy Tower",
      type: "Magic",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -5
          }
        }
      }
    },
    {
      id: 46,
      name: "Power Burn",
      text: "5 Damage to your tower, +2 Magic",
      type: "Magic",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 2,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -5
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 47,
      name: "Harmonic Vibe",
      text: "+1 Magic, +3 Tower, +3 Wall",
      type: "Magic",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 3,
            tower: 3
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 48,
      name: "Parity",
      text: "All player's Magic equals the highest player's Magic",
      type: "Magic",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 49,
      name: "Emerald",
      text: "+8 Tower",
      type: "Magic",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 8
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 50,
      name: "Pearl of Wisdom",
      text: "+5 Tower, +1 Magic",
      type: "Magic",
      cost: 9,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 5
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 51,
      name: "Shatterer",
      text: "-1 Magic, 9 damage to Enemy Tower",
      type: "Magic",
      cost: 8,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: -1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -9
          }
        }
      }
    },
    {
      id: 52,
      name: "Crumblestone",
      text: "+5 Tower, Enemy loses 6 bricks",
      type: "Magic",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 5
          },
          enemy: {
            mines: 0,
            bricks: -6,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 53,
      name: "Sapphire",
      text: "+11 Tower",
      type: "Magic",
      cost: 10,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 11
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 54,
      name: "Discord",
      text: "7 damage to all Towers, all player's Magic -1",
      type: "Magic",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: -1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -7
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: -1,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -7
          }
        }
      }
    },
    {
      id: 55,
      name: "Fire Ruby",
      text: "+6 Tower, 4 damage to Enemy Tower",
      type: "Magic",
      cost: 13,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 6
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -4
          }
        }
      }
    },
    {
      id: 56,
      name: "Quarry's Help",
      text: "+7 Tower, you lose 10 Bricks",
      type: "Magic",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: -10,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 7
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 57,
      name: "Crystal Shield",
      text: "+8 Tower, +3 Wall",
      type: "Magic",
      cost: 12,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 3,
            tower: 8
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 58,
      name: "Empathy Gem",
      text: "+8 Tower, +1 Dungeon",
      type: "Magic",
      cost: 14,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 1,
            monsters: 0,
            wall: 0,
            tower: 8
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 59,
      name: "Diamond",
      text: "+15 Tower",
      type: "Magic",
      cost: 16,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 15
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 60,
      name: "Sanctuary",
      text: "+10 Tower, +5 Wall, you gain 5 Monsters",
      type: "Magic",
      cost: 15,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 5,
            wall: 5,
            tower: 10
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 61,
      name: "Lava Jewel",
      text: "+12 Tower, 6 damage to Enemy",
      type: "Magic",
      cost: 17,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 12
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 62,
      name: "Dragon's Eye",
      text: "+20 Tower",
      type: "Magic",
      cost: 21,
      rarity: "epic",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 20
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 63,
      name: "Crystallize",
      text: "+11 Tower, -6 Wall",
      type: "Magic",
      cost: 21,
      rarity: "epic",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 11
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 64,
      name: "Bag of Baubles",
      text: "If Tower < Enemy Tower, then +2 Tower, else +1 Tower",
      type: "Magic",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 65,
      name: "Rainbow",
      text: "+1 Tower to all players, you gain 3 Gems",
      type: "Magic",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 3,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 1
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 1
          }
        }
      }
    },
    {
      id: 66,
      name: "Apprentice",
      text: "+4 Tower, you lose 3 Monsters, 2 damage to Enemy Tower",
      type: "Magic",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -3,
            wall: 0,
            tower: 4
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -2
          }
        }
      }
    },
    {
      id: 67,
      name: "Lightning Shard",
      text: "If Tower > Enemy Wall, then 8 damage to enemy Tower, else 8 damage",
      type: "Magic",
      cost: 11,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 68,
      name: "Phase Jewel",
      text: "+13 Tower, +6 Monsters, +6 Bricks",
      type: "Magic",
      cost: 18,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 6,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 6,
            wall: 0,
            tower: 13
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 69,
      name: "Mad Cow Disease",
      text: "All players lose 6 monsters",
      type: "Dungeons",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -6,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -5,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 70,
      name: "Faerie",
      text: "2 damage, play again",
      type: "Dungeons",
      cost: 1,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 71,
      name: "Moody Goblins",
      text: "4 damage, you lose 3 Gems",
      type: "Dungeons",
      cost: 1,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: -3,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -4,
            tower: 0
          }
        }
      }
    },
    {
      id: 72,
      name: "Agriculture",
      text: "+1 Dungeon",
      type: "Dungeons",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 1,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 73,
      name: "Elven Scout",
      text: "Draw 1 card, discard 1 card, play again",
      type: "Dungeons",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: true,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 74,
      name: "Goblin Mob",
      text: "6 damage, you take 3 damage",
      type: "Dungeons",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -3,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 75,
      name: "Goblin Archers",
      text: "3 damage to Enemy Tower, you take 1 damage",
      type: "Dungeons",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -1,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -3
          }
        }
      }
    },
    {
      id: 76,
      name: "Shadow Faerie",
      text: "2 damage to Enemy Tower, play again",
      type: "Dungeons",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: true,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -2
          }
        }
      }
    },
    {
      id: 77,
      name: "Orc",
      text: "5 damage",
      type: "Dungeons",
      cost: 3,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -5,
            tower: 0
          }
        }
      }
    },
    {
      id: 78,
      name: "Dwarves",
      text: "4 damage, +3 Wall",
      type: "Dungeons",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 3,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -4,
            tower: 0
          }
        }
      }
    },
    {
      id: 79,
      name: "Little Snakes",
      text: "4 damage to Enemy Tower",
      type: "Dungeons",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -4
          }
        }
      }
    },
    {
      id: 80,
      name: "Troll Trainer",
      text: "+2 Dungeons",
      type: "Dungeons",
      cost: 7,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 2,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 81,
      name: "Tower Gremlin",
      text: "2 Damage, +4 Wall, +2 Tower",
      type: "Dungeons",
      cost: 8,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 4,
            tower: 2
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -2,
            tower: 0
          }
        }
      }
    },
    {
      id: 82,
      name: "Full Moon",
      text: "+1 to all player's Dungeons, you gain 3 Monsters",
      type: "Dungeons",
      cost: 0,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 1,
            monsters: 3,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 1,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 83,
      name: "Slasher",
      text: "6 damage",
      type: "Dungeons",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 84,
      name: "Ogre",
      text: "7 damage",
      type: "Dungeons",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -7,
            tower: 0
          }
        }
      }
    },
    {
      id: 85,
      name: "Rabid Sheep",
      text: "6 damage, Enemy loses 3 Monsters",
      type: "Dungeons",
      cost: 6,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -3,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 86,
      name: "Imp",
      text: "6 damage, all players lose 5 bricks, gems and monsters",
      type: "Dungeons",
      cost: 5,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: -5,
            magic: 0,
            gems: -5,
            dungeons: 0,
            monsters: -5,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: -5,
            magic: 0,
            gems: -5,
            dungeons: 0,
            monsters: -5,
            wall: -6,
            tower: 0
          }
        }
      }
    },
    {
      id: 87,
      name: "Spizzer",
      text: "If Enemy Wall = 0, then 10 damage, else 6 damage",
      type: "Dungeons",
      cost: 8,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 88,
      name: "Werewolf",
      text: "9 damage",
      type: "Dungeons",
      cost: 9,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -9,
            tower: 0
          }
        }
      }
    },
    {
      id: 89,
      name: "Corrosion Cloud",
      text: "If Enemy Wall > 0, then 10 damage, else 7 damage",
      type: "Dungeons",
      cost: 11,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 90,
      name: "Unicorn",
      text: "If Magic > Enemy Magic, then 12 damage, else 7 damage",
      type: "Dungeons",
      cost: 9,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 91,
      name: "Elven Archers",
      text: "If Wall > Enemy Wall, then 6 damage to Enemy Tower, else 6 damage",
      type: "Dungeons",
      cost: 10,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 92,
      name: "Succubus",
      text: "5 damage to Enemy Tower, Enemy loses 8 Monsters",
      type: "Dungeons",
      cost: 14,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: -8,
            wall: 0,
            tower: -5
          }
        }
      }
    },
    {
      id: 93,
      name: "Rock Stompers",
      text: "8 damage, -1 Enemy Mine",
      type: "Dungeons",
      cost: 11,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: -1,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -8,
            tower: 0
          }
        }
      }
    },
    {
      id: 94,
      name: "Thief",
      text: "Enemy loses 10 gems and 6 bricks, you gain 1/2 amount",
      type: "Dungeons",
      cost: 12,
      rarity: "uncommon",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: -6,
            magic: 0,
            gems: -10,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 95,
      name: "Stone Giant",
      text: "10 damage, +4 Wall",
      type: "Dungeons",
      cost: 15,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 4,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -10,
            tower: 0
          }
        }
      }
    },
    {
      id: 96,
      name: "Vampire",
      text: "10 damage, Enemy loses 5 Monsters, -1 Enemy Dungeon",
      type: "Dungeons",
      cost: 17,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: -1,
            monsters: -5,
            wall: -10,
            tower: 0
          }
        }
      }
    },
    {
      id: 97,
      name: "Dragon",
      text: "20 damage, Enemy loses 10 Monsters, -1 Enemy Dungeon",
      type: "Dungeons",
      cost: 25,
      rarity: "epic",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: -1,
            monsters: -10,
            wall: -20,
            tower: 0
          }
        }
      }
    },
    {
      id: 98,
      name: "Spearman",
      text: "If Wall > Enemy Wall, then 3 damage, else 2 damage",
      type: "Dungeons",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: true,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          }
        }
      }
    },
    {
      id: 99,
      name: "Gnome",
      text: "3 damage, +1 Gem",
      type: "Dungeons",
      cost: 2,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 1,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -3,
            tower: 0
          }
        }
      }
    },
    {
      id: 100,
      name: "Berserker",
      text: "8 damage, 3 damage to your Tower",
      type: "Dungeons",
      cost: 4,
      rarity: "common",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -3
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -8,
            tower: 0
          }
        }
      }
    },
    {
      id: 101,
      name: "Warlord",
      text: "13 damage, you lose 3 Gems",
      type: "Dungeons",
      cost: 13,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: -3,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: -13,
            tower: 0
          }
        }
      }
    },
    {
      id: 102,
      name: "Pegasus Lancer",
      text: "12 damage to Enemy Tower",
      type: "Dungeons",
      cost: 18,
      rarity: "rare",
      image: "",
      discardable: true,
      extraAction: false,
      actions: {
        additionalTurn: false,
        discard: false,
        stats: {
          self: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: 0
          },
          enemy: {
            mines: 0,
            bricks: 0,
            magic: 0,
            gems: 0,
            dungeons: 0,
            monsters: 0,
            wall: 0,
            tower: -12
          }
        }
      }
    },
  ]
  