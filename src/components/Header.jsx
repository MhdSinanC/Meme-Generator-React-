import memeLogo from '../assets/Troll Face.png';

export default function Header() {
    return (
        <header>
            <img src={memeLogo} alt="meme-logo" />
            <h2>Meme Generator</h2>
        </header>
    )
}