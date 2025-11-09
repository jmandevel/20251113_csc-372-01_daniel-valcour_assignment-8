
function PlayerThrow({ onSelect, selected }) {
    const choices = [
        { name: 'rock', img: '/rock.png', alt: 'Rock' },
        { name: 'paper', img: '/paper.png', alt: 'Paper' },
        { name: 'scissors', img: '/scissors.png', alt: 'Scissors' }
    ];

    function handleClick(choice) {
        onSelect(choice);
    }

    return (
        <section>
            <h2>Your Throw</h2>
            <div>
                {choices.map((choice) => (
                    <img
                    key={choice.name}
                    src={choice.img}
                    alt={choice.alt}
                    className={
                        selected === choice.name
                            ? `selectable choice selected` : `selectable choice`
                    }
                    onClick={() => handleClick(choice.name)}
                    ></img>
                ))}
            </div>
        </section>
    );
}

export default PlayerThrow;