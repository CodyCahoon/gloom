<script>
    import { character } from '../stores.js';


    const characters = [
        { name: 'Brute' },
        { name: 'Cragheart' },
        { name: 'Mindthief'},
        { name: 'Quartermaster'},
        { name: 'Scoundrel' },
        { name: 'Spellweaver' },
        { name: 'Summoner'},
        { name: 'Sunkeeper'},
        { name: 'Tinkerer' },
    ]
        .sort((a, b) => a.name.localeCompare(b.name))
    .map(c => {
        return {
            ...c,
            img: 'character-icons/' + c.name.toLowerCase() + '.png',
        };
    })

    let selectedCharacter = $character;
    $: character.set(selectedCharacter);
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 0;
        margin: 20px 0;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"] + span + span {
        color: #777;
        font-family: Gloom;
        font-size: 28px;
        transition: all 150ms;
    }
    
    input:checked + span + span {
        color: #222;
    }

    .characters__item__img {
        display: inline-flex;
        width: 45px;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
    }

    .characters__item__img img {
        max-width: 40px;
        max-height: 40px;
    }
</style>

<section class="characters panel">
    <h2 class="panel__title">Characters</h2>
    <ul>
        {#each characters as character}
        <li>
            <label>
                <input type="radio" bind:group={selectedCharacter} value={character.name}>
                <span class="characters__item__img">
                    <img src={character.img} alt={character.name}>
                </span>
                <span>{character.name}</span>
            </label>
        </li>
	{   /each}
    </ul>
</section>