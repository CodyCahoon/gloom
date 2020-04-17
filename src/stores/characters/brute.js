export default {
  name: 'Brute',
  perks: [
    {
      text: 'Remove two [-1] cards',
      modifiersToAdd: [],
      modifiersToRemove: ['-1', '-1'],
      instances: 1,
    },
    {
      text: 'Replace one [-1] card with one [+1] card',
      modifiersToAdd: ['+1'],
      modifiersToRemove: ['-1'],
      instances: 1,
    },
    {
      text: 'Add two [+1] cards',
      modifiersToAdd: ['+1', '+1'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add one [+3] card',
      modifiersToAdd: ['+3'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add three [ROLL] [PUSH] 1 cards',
      modifiersToAdd: ['push1--roll', 'push1--roll', 'push1--roll'],
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
      text: 'Add one [ROLL] [STUN] card',
      modifiersToAdd: ['stun--roll'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add one [ROLL] [DISARM] card and one [ROLL] [MUDDLE] card',
      modifiersToAdd: ['disarm--roll', 'muddle--roll'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Add one [ROLL] [TARGET] card',
      modifiersToAdd: ['target--roll'],
      modifiersToRemove: [],
      instances: 2,
    },
    {
      text: 'Add one [+1] [SHIELD] 1, Self card',
      modifiersToAdd: ['+1--shield1'],
      modifiersToRemove: [],
      instances: 1,
    },
    {
      text: 'Ignore negative item effects and add one [+1] card',
      modifiersToAdd: ['+1'],
      modifiersToRemove: [],
      instances: 1,
    },
  ],
};
