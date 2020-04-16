export default {
  name: 'Quartermaster',
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
      text: 'Add three [ROLL] [MUDDLE] cards',
      modifiersToAdd: ['muddle--roll', 'muddle--roll', 'muddle--roll'],
      modifiersToRemove: [],
    },
    {
      text: 'Add two [ROLL] PIERCE [PIERCE] 3 card',
      modifiersToAdd: ['+3--pierce'],
      modifiersToRemove: [],
    },
    {
      text: 'Add one [ROLL] [STUN] card',
      modifiersToAdd: ['+stun--roll'],
      modifiersToRemove: [],
    },
    {
      text: 'Add one [ROLL] [TARGET] card',
      modifiersToAdd: ['+target--roll'],
      modifiersToRemove: [],
    },
    {
      text: 'Add one [ROLL] [REFRESH] card',
      modifiersToAdd: ['refresh--roll'],
      modifiersToRemove: [],
      instances: 3,
    },
    {
      text: 'Ignore negative item effects and add two [+1] cards',
      modifiersToAdd: ['+1', '+1'],
      modifiersToRemove: [],
    },
  ],
};
