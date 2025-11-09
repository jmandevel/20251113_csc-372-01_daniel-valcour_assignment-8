
function ResetButton({ onReset }) {
    return (
        <section>
            <button
                onClick={onReset}
            >
                Reset Game
            </button>
        </section>
    );
}

export default ResetButton;