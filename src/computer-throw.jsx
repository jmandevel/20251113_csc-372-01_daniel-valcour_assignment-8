import { useEffect, useState } from 'react';

function ComputerThrow({ round, playerThrow, onResult, result }) {
    const choices = [
        { name: 'rock', img: './rock.png', alt: 'Rock' },
        { name: 'paper', img: './paper.png', alt: 'Paper' },
        { name: 'scissors', img: './scissors.png', alt: 'Scissors' }
    ];

    const [currentImage, setCurrentImage] = useState('/question-mark.png');
    const [finalChoice, setFinalChoice] = useState(null);

    useEffect(() => {
        setCurrentImage('/question-mark.png');
        setFinalChoice(null);
        if (!playerThrow) {
            return;
        }
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % choices.length;
            setCurrentImage(choices[index].img);
        }, 500);
        const timeout = setTimeout(() => {
            clearInterval(interval);
            const randomChoice =
                choices[Math.floor(Math.random() * choices.length)];
            setCurrentImage(randomChoice.img);
            setFinalChoice(randomChoice.name);
            onResult(randomChoice.name);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [round]);

    return (
        <section>
            <h2>Computer Throw</h2>
            <div>
                <img
                    src={currentImage}
                    alt={finalChoice ? finalChoice : 'Computer thinking'}
                    className={`choice final-choice ${result === 'Win' ? 'win' :
                            result === 'Tie' ? 'tie' :
                                result === 'Lose' ? 'lose' : 'default'
                        }`}
                />
            </div>
        </section>
    );
}

export default ComputerThrow;