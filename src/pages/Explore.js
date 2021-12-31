import { useState, useEffect } from "react"
import Podcasts from "../components/Podcasts"
import {usePodcasts} from "../hooks/podcast"

const Explore = () => {

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
            <div className="relative bg-gradient-to-r bg-pink-300 pb-10 overflow-hidden">
                <img
                    src="https://wallpaperaccess.com/full/4061949.jpg"
                    className="filter saturate-50 bg-contain bg-center opacity-100"
                />
                <div style={{background: 'rgb(244,114,182)',
background: 'linear-gradient(0deg, rgba(249, 168, 212,1) 0%, rgba(241,241,241,0.5) 50%, rgba(249, 168, 212,1) 100%)'
}} className="absolute top-0 h-full w-full">
                </div>
                <div className="absolute top-1/4 left-40 text-5xl font-light w-96 text-center text-gray-600 leading-snug">
                    Find your next <span className="text-purple-600 font-bold">favorite podcast</span> today!
                </div>
            </div>
            <div className="text-center text-6xl font-head my-8">
                Explore Podcasts
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

export default Explore