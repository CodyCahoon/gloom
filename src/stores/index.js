import { writable, derived } from 'svelte/store';

// Characters
import Spellweaver from './characters/spellweaver';
import Quartermaster from './characters/quartermaster';

export const character = writable('Brute');
export const attackModifiers = createAttackModifiers();

function buildBaseDeck() {
  return [
    '+0',
    '+0',
    '+0',
    '+0',
    '+0',
    '+0',
    '+1',
    '+1',
    '+1',
    '+1',
    '+1',
    '-1',
    '-1',
    '-1',
    '-1',
    '-1',
    '-2',
    '+2',
    '2x',
    'null',
  ];
}

function createAttackModifiers() {
  const available = writable(buildBaseDeck());
  const drawn = writable([]);

  return {
    available,
    drawn,
    draw: () => {
      available.update((availableCards) => {
        if (availableCards.length === 0) {
          return [];
        }
        const index = Math.floor(Math.random() * availableCards.length);
        drawn.update((drawnCards) =>
          [].concat(drawnCards, availableCards[index])
        );
        return [].concat(
          availableCards.slice(0, index),
          availableCards.slice(index + 1)
        );
      });
    },
    handlePerk: (perk, isChecked) => {
      const add = (card) => available.update((deck) => [].concat(deck, card));

      const remove = (card) =>
        available.update((deck) => {
          const index = deck.indexOf(card);
          if (index === -1) {
            return deck;
          }
          return [].concat(deck.slice(0, index), deck.slice(index + 1));
        });

      const { modifiersToAdd, modifiersToRemove } = perk;

      if (isChecked) {
        modifiersToAdd.forEach((m) => add(m));
        modifiersToRemove.forEach((m) => remove(m));
      } else {
        modifiersToAdd.forEach((m) => remove(m));
        modifiersToRemove.forEach((m) => add(m));
      }
    },
  };
}

export const availablePerks = derived(
  character,
  ($character) => {
    if ($character === 'Spellweaver') {
      return Spellweaver.perks;
    }

    if ($character === 'Quartermaster') {
      return Quartermaster.perks;
    }

    return [];
  },
  []
);