import { useParams } from "react-router";
import { usePodcast } from "../hooks/podcast";
import moment from 'moment'
import { ExternalLinkAlt, Heart } from "@styled-icons/fa-solid" 

const Podcast = () => {

    const { id } = useParams()
    const { podcast } = usePodcast(id)
    console.log(podcast)

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
        <div className="flex flex-col w-2/3 mx-auto items-start bg-pink-300 bg-opacity-50 m-6 p-6 br">
            <div className="flex flex-row pb-6 border-b-2 border-gray-600">
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
                            <a href={episode.link} target="blank" key={episode.id} className="flex flex-row items-center my-2 hover:bg-pink-300">
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
            <div className="flex justify-center w-full">
                <span className="text-2xl font-medium flex items-center cursor-pointer group p-4 br hover:bg-white">
                    <Heart className="h-7 pr-4 text-gray-600 opacity-40"/>
                    Add To My List
                </span>
            </div>
        </div>
    )
}

export default Podcast