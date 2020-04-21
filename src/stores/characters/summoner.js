export default {
  name: 'Summoner',
  perks: [
    {
      text: 'Remove two [-1] cards',
      modifiersToAdd: [],
      modifiersToRemove: ['-1', '-1'],
      instances: 1,
    },
    {
      text: 'Replace one [-2] card with one [+0]',
      modifiersToAdd: ['+0'],
      modifiersToRemove: ['-2'],
      instances: 1,
    },
    {
      text: 'Replace one [-1] card with one [+1]',
      modifiersToAdd: ['+1'],
      modifiersToRemove: ['-1'],
      instances: 3,
    },
    {
      text: 'Add one [+2] card',
      modifiersToAdd: ['+2'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add two [ROLL] [WOUND] cards',
      modifiersToAdd: ['wound--roll', 'wound--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add two [ROLL] [POISON] cards',
      modifiersToAdd: ['poison--roll', 'poison--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add two [ROLL] [HEAL] 1 cards',
      modifiersToAdd: ['heal1--roll', 'heal1--roll'],
      modifiersToRemove: [],
      instances: 3,
    },
    {
      text: 'Add one [ROLL] [FIRE] and one [ROLL] [WIND] card',
      modifiersToAdd: ['fire--roll', 'wind--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add one [ROLL] [DARK] and one [ROLL] [EARTH] card',
      modifiersToAdd: ['dark--roll', 'earth--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Ignore negative scenario effects and add two [+1] cards',
      modifiersToAdd: ['+1', '+1'],
      modifiersToRemove: [],
      instances: 1,
    },
  ],
};
