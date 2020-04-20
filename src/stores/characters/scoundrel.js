export default {
  name: 'Scoundrel',
  perks: [
    {
      text: 'Remove two [-1] cards',
      modifiersToAdd: [],
      modifiersToRemove: ['-1', '-1'],
      instances: 2,
    },
    {
      text: 'Remove four [+0] cards',
      modifiersToAdd: [],
      modifiersToRemove: ['+0', '+0', '+0', '+0'],
      instances: 1,
    },
    {
      text: 'Replace one [-2] card with one [+0] card',
      modifiersToAdd: ['+0'],
      modifiersToRemove: ['-2'],
      instances: 1,
    },
    {
      text: 'Replace one [-1] card with one [+1] card',
      modifiersToAdd: ['+1'],
      modifiersToRemove: ['-1'],
      instances: 1,
    },
    {
      text: 'Replace one [+0] card with one [+2] card',
      modifiersToAdd: ['+2'],
      modifiersToRemove: ['+0'],
      instances: 2,
    },
    {
      text: 'Add two [ROLL] [+1] cards',
      modifiersToAdd: ['+1--roll', '+1--roll'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add two [ROLL] [PIERCE] 3 cards',
      modifiersToAdd: ['pierce3--roll', 'pierce3--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add two [ROLL] [POISON] cards',
      modifiersToAdd: ['poison--roll', 'poison--roll'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add two [ROLL] [MUDDLE] cards',
      modifiersToAdd: ['muddle--roll', 'muddle--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add one [ROLL] [INVISIBLE] cards',
      modifiersToAdd: ['invisible--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Ignore negative scenario effects',
      modifiersToAdd: [],
      modifiersToRemove: [],
      instances: 1,
    },
  ],
};
