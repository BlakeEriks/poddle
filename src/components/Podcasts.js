const Podcasts = ({podcasts}) => {
    return (
        <div className="w-full flex flex-wrap flex-row justify-evenly">
            {podcasts?.map( podcast => {
                const bgImage = "url(\"" + podcast.image + "\")"
                const description = podcast.description.length > 100 ? podcast.description.substring(0,150) + '...' : podcast.description

                return (
                    <div className="m-8 flex flex-col overflow-hidden cursor-pointer br-podcast group duration-500 transform hover:scale-110">
                        <div className="w-full flex justify-center p-2 bg-gradient-to-b from-pink-200 to-pink-400">
                            {podcast.title}
                        </div>
                        <div className={"relative w-80 h-72 flex justify-end podcast-container overflow-hidden bg-center bg-cover"} style={ {backgroundImage: bgImage}}>
                            <div className="opacity-0 text-center pt-10 bg-gradient-to-t from-white group-hover:opacity-100 duration-300 transition z-10">
                                {description}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Podcasts