
function ResultDisplay({ result }) {
    if (!result) {
        return null;
    }
    let resultText;
    switch (result) {
        case 'Win':
            resultText = 'You Win!';
            break;
        case 'Lose':
            resultText = 'You Lose!';
            break;
        case 'Tie':
            resultText = 'It\'s a Tie!';
            break;
        default:
            resultText = '';
    }

    return (
        <section>
            <h2>Result</h2>
            <p>{resultText}</p>
        </section>
    );
}

export default ResultDisplay;