const embed = "https://embed.twitch.tv/embed/v1.js"

export default function Preview({streamer}){
    const script = document.createElement('script');
    script.setAttribute('src', embed);
    script.addEventListener('load', () => {
        new window.Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: streamer,
            parent: ["feras.club"]
        })
    })

    return(
        <div>
            <div id="twitch-embed"></div>

        </div>
    )
}