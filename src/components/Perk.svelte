<script>
    export let perk;

    const bracketRegex = /\[[\+-\d\w]+\]/gm;

    const replaceWithIcon = match => {
        const icon = match.substring(1, match.length - 1).toLowerCase();
        return `<img class="perk__img" src="icons/${icon}.png" />`;
    };

    const parsedPerk = perk.replace(bracketRegex, replaceWithIcon);
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
        width: 20px;
        margin-bottom: -4px;
        display: inline-block;
    }
</style>

<label>
    <input type="checkbox" value={perk}>
    <span>{@html parsedPerk}</span>
</label>
      