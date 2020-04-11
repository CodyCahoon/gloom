import { writable, derived } from 'svelte/store';

export const character = writable('Brute');

export const availablePerks = derived(
    character,
    $character => {
        if ($character === 'Spellweaver') {
            return [
               'Remove four (+0) cards',
               'Replace one (-1) card with one (+1) card',
               'Replace one (-1) card with one (+1) card',
               'Add two (+1) cards',
               'Add two (+1) cards',
               'Add one (+0) <STUN> card',
               'Add one (+1) <WOUND> card',
               'Add one (+1) <IMMOBILIZE> card',
               'Add one (+1) <CURSE> card',
               'Add one (+2) [FIRE] card',
               'Add one (+2) [FIRE] card',
               'Add one (+2) [ICE] card',
               'Add one (+2) [ICE] card',
               'Add one {ROLL} [EARTH] card and one {ROLL} [WIND] card',
               'Add one {ROLL} [SUN] card and one {ROLL} [DARK] card',
            ];
        }
        return [];
    }
)