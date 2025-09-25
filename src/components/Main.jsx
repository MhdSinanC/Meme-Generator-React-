import { useState, useEffect } from 'react';

export default function Main() {

    const [meme, SetMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, [])

    const handleChange = (evt) => {
        const { value, name } = evt.currentTarget;
        SetMeme((prevMeme) => ({ ...prevMeme, [name]: value }))
    }

    const getMeme = () => {
        const randNum = Math.floor(Math.random() * allMemes.length);
        const memeImgUrl = allMemes[randNum].url;
        SetMeme(prevMeme => ({...prevMeme, imageUrl: memeImgUrl}))
    }

    return (
        <main>
            <div className="form">
                <label className="input">Top text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label className="input">Bottom text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>

                <button onClick={getMeme}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme Image" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}