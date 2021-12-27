const Podcasts = ({podcasts}) => {
    return (
        <div className="w-full flex flex-wrap flex-row justify-evenly">
            {podcasts?.map( podcast => {

                const bgImage = "url(\"" + podcast.image + "\")"
                let description = podcast.description ? podcast.description : podcast.description_original ? podcast.description_original : ''
                description = description?.length > 150 ? description?.substring(0,150) + '...' : description
                let title = podcast.title ? podcast.title : podcast.title_original ? podcast.title_original : ''
                title = title?.length > 30 ? title?.substring(0,30) + '...' : title

                return (
                    <div key={podcast.id} className="m-8 flex flex-col overflow-hidden cursor-pointer br group duration-500 transform hover:scale-110">
                        <div className="w-full flex justify-center p-2 bg-gradient-to-b from-pink-200 to-pink-400">
                            {title}
                        </div>
                        <div className={"relative w-80 h-72 flex justify-end podcast-container overflow-hidden bg-center bg-cover"} style={ {backgroundImage: bgImage}}>
                            <div className="opacity-0 text-center pt-14 bg-gradient-to-t from-pink-400 group-hover:opacity-100 duration-300 transition z-10">
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