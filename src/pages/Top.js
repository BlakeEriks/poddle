import { useState, useEffect } from "react"
import Podcasts from "../components/Podcasts"
import {usePodcasts} from "../hooks/podcast"
import guyImg from '../img/guy1.png'

const Top = () => {

    const { getTopPodcasts, getSearchPodcasts, addPodcast } = usePodcasts()
    const [podcasts, setPodcasts] = useState([])
    const [searchString, setSearchString] = useState('')

    useEffect( () => {
        const updatePodcasts = async () => {
            setPodcasts(await getTopPodcasts())
        }
        updatePodcasts()
    }, [])

    const onSubmit = async event => {
        event.preventDefault()
        if (!searchString.length) return
        setPodcasts(await getSearchPodcasts(searchString))
    }

    return (
        <>
            <div className="flex flex-row items-center justify-center py-10 overflow-hidden border-b border-gray-300">
                <div className="w-96 p-10">
                    <img src={guyImg} alt="guy listening" />
                </div>
                <div className="text-4xl font-light text-center leading-snug w-96">
                    Don't miss a beat with the <span className="bg-green font-semibold">top podcasts</span> from all around the world.
                </div>
            </div>
            <div className="text-center text-4xl font-head my-8">
                Top Podcasts
            </div>
            <div className="w-full flex flex-wrap flex-col items-center">
                <form onSubmit={onSubmit}>
                    <input
                        className="p-4 text-3xl br border border-black"
                        placeholder="Search" 
                        value={searchString}
                        onChange={event => setSearchString(event.target.value)}
                    />
                </form>
                <Podcasts podcasts={podcasts} action={addPodcast}/>
            </div>
        </>
    )
}

export default Top