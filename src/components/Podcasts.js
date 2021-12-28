import usePodcasts from "../hooks/podcast"
import { Heart, Times } from '@styled-icons/fa-solid'
import { useState, useEffect } from "react"

const Podcasts = ({podcasts, action}) => {

    const { myPodcasts } = usePodcasts()

    const inMyPodcasts = podcast => myPodcasts?.some( myPodcast => myPodcast.api_id === podcast.id)

    return (
        <div className="w-full flex flex-wrap flex-row justify-evenly">
            {podcasts?.map( podcast => {

                const bgImage = "url(\"" + podcast.image + "\")"
                let description = podcast.description ? podcast.description : podcast.description_original ? podcast.description_original : ''
                description = description?.length > 150 ? description?.substring(0,150) + '...' : description
                let title = podcast.title ? podcast.title : podcast.title_original ? podcast.title_original : ''
                title = title?.length > 30 ? title?.substring(0,30) + '...' : title

                return (
                    <div key={podcast.id} className="m-8 flex flex-col overflow-hidden br group duration-500 transform hover:scale-110">
                        <div className="w-full flex justify-center p-2 bg-gradient-to-b from-pink-100 to-pink-300">
                            {title}
                        </div>
                        <div className={"relative w-80 h-72 flex justify-between items-center podcast-container overflow-hidden bg-center bg-cover"} style={ {backgroundImage: bgImage}}>
                            {action.name === 'addPodcast' &&
                            <Heart 
                                className={"relative top-16 cursor-pointer h-24 w-24 opacity-0 group-hover:opacity-60 hover:text-pink-200 text-gray-300 " + (inMyPodcasts(podcast) ? " text-pink-500 hover:text-pink-500 group-hover:opacity-90" : "")}
                                onClick={() => action(podcast)}
                            />
                            }
                            {action.name === 'removePodcast' &&
                            <Times 
                                className={"relative top-16 cursor-pointer h-24 w-24 opacity-0 group-hover:opacity-60 hover:text-pink-200 text-gray-300 " + (inMyPodcasts(podcast) ? " text-pink-500 hover:text-pink-500 group-hover:opacity-90" : "")}
                                onClick={() => action(podcast)}
                            />
                            }
                            <div className="opacity-0 text-center text-bg group-hover:opacity-100 duration-300 transition z-10">
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