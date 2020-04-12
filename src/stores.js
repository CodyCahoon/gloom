import { writable, derived } from 'svelte/store'

export const character = writable('Brute')
export const attackModifiers = createAttackModifiers()

function buildBaseDeck() {
  const addToDeck = (deck, card, count = 1) => {
    for (let i = 0; i < count; i++) {
      deck.push(card)
    }
  }

  const baseDeck = []
  addToDeck(baseDeck, '+0', 6)
  addToDeck(baseDeck, '+1', 5)
  addToDeck(baseDeck, '-1', 5)
  addToDeck(baseDeck, '+2')
  addToDeck(baseDeck, '-2')
  addToDeck(baseDeck, '2x')
  addToDeck(baseDeck, 'null')
  return baseDeck
}

function createAttackModifiers() {
  const attackModifiers = writable(buildBaseDeck())

  const { subscribe, set, update } = attackModifiers
  return {
    subscribe,
    handlePerk: (perk, isChecked) => {
      const add = (card) =>
        update((deck) => {
          return [].concat(deck, card)
        })

      const remove = (card) =>
        update((deck) => {
          const index = deck.indexOf(card)
          if (index === -1) {
            return deck
          }
          return [].concat(deck.slice(0, index), deck.slice(index + 1))
        })

      const { modifiersToAdd, modifiersToRemove } = perk

      if (isChecked) {
        modifiersToAdd.forEach((m) => add(m))
        modifiersToRemove.forEach((m) => remove(m))
      } else {
        modifiersToAdd.forEach((m) => remove(m))
        modifiersToRemove.forEach((m) => add(m))
      }
    },
    reset: () => set(buildBaseDeck()),
  }
}

export const availablePerks = derived(character, ($character) => {
  if ($character === 'Spellweaver') {
    return [
      {
        text: 'Remove four [+0] cards',
        modifiersToAdd: [],
        modifiersToRemove: ['+0', '+0', '+0', '+0'],
      },
      {
        text: 'Replace one [-1] card with one [+1] card',
        modifiersToAdd: ['+1'],
        modifiersToRemove: ['-1'],
      },
      {
        text: 'Replace one [-1] card with one [+1] card',
        modifiersToAdd: ['+1'],
        modifiersToRemove: ['-1'],
      },
      {
        text: 'Add two [+1] cards',
        modifiersToAdd: ['+1', '+1'],
        modifiersToRemove: [],
      },
      {
        text: 'Add two [+1] cards',
        modifiersToAdd: ['+1', '+1'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+0] [STUN] card',
        modifiersToAdd: ['+0--stun'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+1] [WOUND] card',
        modifiersToAdd: ['+1--wound'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+1] [IMMOBILIZE] card',
        modifiersToAdd: ['+1--immobolize'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+1] [CURSE] card',
        modifiersToAdd: ['+1--curse'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+2] [FIRE] card',
        modifiersToAdd: ['+2--fire'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+2] [FIRE] card',
        modifiersToAdd: ['+2--fire'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+2] [ICE] card',
        modifiersToAdd: ['+2--ice'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [+2] [ICE] card',
        modifiersToAdd: ['+2--ice'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [ROLL] [EARTH] card and one [ROLL] [WIND] card',
        modifiersToAdd: ['earth--roll', 'wind--roll'],
        modifiersToRemove: [],
      },
      {
        text: 'Add one [ROLL] [SUN] card and one [ROLL] [DARK] card',
        modifiersToAdd: ['sun--roll', 'dark--roll'],
        modifiersToRemove: [],
      },
    ]
  }
  return []
})
