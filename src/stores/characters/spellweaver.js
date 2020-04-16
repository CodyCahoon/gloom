export default {
  name: 'Spellweaver',
  perks: [
    {
      text: 'Remove four [+0] cards',
      modifiersToAdd: [],
      modifiersToRemove: ['+0', '+0', '+0', '+0'],
    },
    {
      text: 'Replace one [-1] card with one [+1] card',
      modifiersToAdd: ['+1'],
      modifiersToRemove: ['-1'],
      instances: 2,
    },
    {
      text: 'Add two [+1] cards',
      modifiersToAdd: ['+1', '+1'],
      modifiersToRemove: [],
      instances: 2,
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
      instances: 2,
    },
    {
      text: 'Add one [+2] [ICE] card',
      modifiersToAdd: ['+2--ice'],
      modifiersToRemove: [],
      instances: 2,
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
  ],
};
