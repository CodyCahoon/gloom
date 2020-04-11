<script>
    export let perk = 'Example';


    const regexes = [
        { 
            description: 'Matches elements such as [ICE] [FIRE] [WIND]',
            pattern: /\[\w+\]/gm, 
            fn: match => {
                const element = match.substring(1, match.length - 1).toLowerCase();
                return `<img class="perk__img" src="elements/${element}.png" />`;
            }
        },
        { 
            description: 'Matches damage modifiers such as (+0) (+1) (-2)',
            pattern: /\([-\+]\d\)/gm, 
            fn: match => {
                const damageModifier = match.substring(1, match.length - 1).toLowerCase();
                return `<img class="perk__img" src="damage-modifiers/${damageModifier}.png" />`;
            }
        }
    ];

    let parsedPerk = perk;

    regexes.forEach(regex => {
        parsedPerk = parsedPerk.replace(regex.pattern, regex.fn);
    });

   
</script>

<style>
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input[type="checkbox"] + span:before {
        content: '';
        display: inline-block;
        margin-right: 8px;
        width: 16px;
        height: 16px;
        border: 2px solid #222;
        border-radius: 2px;
    }

    input[type="checkbox"]:checked + span:before {
        border-color: green;
        box-shadow: inset 0 0 10px green;
    }

    input[type="checkbox"] + span {
        color: #222;
        font-family: GloomText;
        font-size: 20px;
        transition: all 150ms;
    }
    
    input:checked + span {
        color: green;
    }

    :global(.perk__img) {
        width: 19px;
    }
</style>

<label>
    <input type="checkbox" value={perk}>
    <span>{@html parsedPerk}</span>
</label>
      