// const embed = "https://embed.twitch.tv/embed/v1.js"

export default function Preview({streamer}){
    // componentDidMount(){
    //     const script = document.createElement('script');
    //     script.setAttribute('src', embed);
    //     script.addEventListener('load', () => {
    //         new window.Twitch.Embed("twitch-embed", {
    //             width: 854,
    //             height: 480,
    //             channel: streamer,
    //             parent: ["feras.club", "localhost"]
    //         })
    //     });
    //     document.body.appendChild(script);
    // }

    return(
        <div>
            <iframe
                src="https://player.twitch.tv/?channel=marcellus_v&parent=localhost&parent=feras.club"
                height="100%"
                width="100%"
                allowfullscreen>
            </iframe>
        </div>
    )
}