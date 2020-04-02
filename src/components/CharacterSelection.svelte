<script>
    const characters = [
        { name: 'Spellweaver', color: 'red' },
        { name: 'Summoner', color: 'red'},
        { name: 'Quartermaster', color: 'red'},
        { name: 'Sunkeeper', color: 'red'},
        { name: 'Mindthief', color: 'red'},
    ].map(c => {
        return {
            ...c,
            img: 'character-icons/' + c.name.toLowerCase() + '.png',
        };
    })

    let selectedCharacter = characters[0].name;
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 0;
        margin: 10px 0;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input {
        display: none;
    }

    input + span {
        position: relative;
        color: #555;
        font-family: Gloom;
        font-size: 20px;
        padding: 4px 8px;
        transition: all 150ms;
    }
    
    input:checked + span {
        color: #222;
    }

    input + span::before {
        box-sizing: border-box;
        content: '';
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 3px solid transparent;
        border-radius: 2px;
        transition: all 150ms;
    }

    label:hover input + span::before {
        border-color: #555;
    }

    input:checked + span:before {
        border-color: #222;
    }

    .characters__item__img {
        display: inline-flex;
        width: 45px;
        align-items: center;
        justify-content: center;
        margin-right: 7px;
    }

    .characters__item__img img {
        max-width: 45px;
        max-height: 45px;
    }
</style>

<section class="characters">
    <ul>
        {#each characters as character}
        <li>
            <label>
                <input type="radio" bind:group={selectedCharacter} value={character.name}>
                <span class="characters__item__img">
                    <img src={character.img} alt={character.name}>
                </span>
                <span style:color={character.color}>{character.name}</span>
            </label>
        </li>
	{   /each}
    </ul>
</section>

<p>Selected Character: {selectedCharacter}</p>