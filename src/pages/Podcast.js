import { useParams } from "react-router";
import usePodcasts from "../hooks/podcast";
import moment from 'moment'
import { Heart, Times } from "@styled-icons/fa-solid" 
import { useEffect } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import { useLoadingState } from '../hooks/loading';
import ClipLoader from "react-spinners/ClipLoader";

const Podcast = () => {

    const { id } = useParams()
    const { addPodcast, updatePodcastLoading, removePodcast, myPodcasts, podcast, setPodcastId } = usePodcasts()
    const { setLoading } = useLoadingState()

    useEffect( () => {
        setPodcastId(id)
    }, [id])

    const inMyPodcasts = () => {
        return myPodcasts?.some(podcast => podcast.api_id === id)
    }   

    const formatDuration = duration => {
        let hours = Math.floor(duration/3600)
        if (hours < 10) hours = '0' + hours
        let modSeconds = duration % 3600
        let minutes = Math.floor(modSeconds/60)
        if (minutes < 10) minutes = '0' + minutes
        let seconds = modSeconds % 60
        if (seconds < 10) seconds = '0' + seconds
        let res = `${minutes}:${seconds}`
        if (hours > 0) res = `${hours}:` + res
        return res
    }

    return (
        <OnImagesLoaded onLoaded={() => {setLoading(false)}}>
            <div className="flex flex-col w-2/3 mx-auto items-start bg-opacity-50 m-6 p-6 br">
                <div className="flex flex-row pb-6 border-b-2 border-gray-300 w-full">
                    <div className="br overflow-hidden h-36 w-36 flex items-center">
                        <img src={podcast?.image}/>
                    </div>
                    <div className="flex flex-col justify-center px-3">
                        <a href={podcast?.website} target="blank" className="text-5xl font-semibold hover:underline">
                            {podcast?.title}
                        </a>
                        <div className="text-2xl text-gray-600">
                            {podcast?.publisher}
                        </div>
                    </div>
                </div>
                <div className="py-6">
                    <div className="text-2xl font-medium py-2">
                        Description
                    </div>
                    <div className="text-gray-600">
                        {podcast?.description}
                    </div>
                </div>
                <div className="py-2">
                    <div className="text-2xl font-medium py-2">
                        Episodes
                    </div>
                    <div>
                        {podcast?.episodes.map(episode => {
                            return (
                                <a href={episode.link} target="blank" key={episode.id} className="flex flex-row items-center my-2 hover:bg-green">
                                    <img className="h-16 rounded-3xl px-2" src={episode.image} alt="episode" />
                                    <div className="px-2 border-l-2 border-gray-600">
                                        <div className="text-lg leading-none">
                                            {episode.title}
                                        </div>
                                        <div className="text-gray-600">
                                            <span className=" br p-1">
                                                {moment(episode.pub_date_ms).format('MM/d/y')}
                                            </span>
                                            <span className="">
                                                {formatDuration(episode.audio_length_sec)}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="py-6">
                    <div className="text-2xl font-medium py-2">
                        Details
                    </div>
                    <ul className="text-xl list-disc list-inside text-gray-600">
                        <li>
                            Country: {podcast?.country}
                        </li>
                        <li>
                            Lanuage: {podcast?.language}
                        </li>
                        <li>
                            First Aired: {moment(podcast?.earliest_pub_date_ms).format('MM/d/y')}
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center w-full relative">
                    <div className={"text-2xl font-medium flex items-center cursor-pointer group p-4 br hover:bg-green " + (updatePodcastLoading ? "opacity-75" : "")}>
                        {inMyPodcasts() ?
                        <div onClick={() => removePodcast(podcast)}>
                            <Times className="h-7 pr-4 text-gray-600 opacity-40"/>
                            Remove From My List
                        </div>
                        :
                        <div onClick={() => addPodcast(podcast)}>
                            <Heart className="h-7 pr-4 text-gray-600 opacity-40"/>
                            Add To My List
                        </div>
                        }
                    </div>
                    <div className={"flex absolute justify-center border-gray-300 w-full top-2 " + (updatePodcastLoading ? "block" : "hidden")}>
                        <ClipLoader color="#A8A8A8" size={50} />
                    </div>
                </div>
            </div>
        </OnImagesLoaded>
    )
}

export default Podcast