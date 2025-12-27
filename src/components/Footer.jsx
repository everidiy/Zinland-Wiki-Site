import '../styles/footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="nodes">
                <h2 className='ps'>P.S. Remember, there are no saves in the game, and each character’s words are thematically linked to them.</h2>
                <h1>More on GitHub</h1>
                <div className="node logo-footer" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                    <img src="/logo.jpg" alt="logo" />
                </div>
            </div>
        </div>
    )
}