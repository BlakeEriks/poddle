import { useState, useEffect } from "react"
import Podcasts from "../components/Podcasts"
import usePodcasts from "../hooks/podcast"

const Explore = () => {

    const { getTopPodcasts, getSearchPodcasts } = usePodcasts()
    const [podcasts, setPodcasts] = useState([])

    const [searchString, setSearchString] = useState('')

    useEffect( async () => {
        setPodcasts(await getTopPodcasts())
    }, [])

    const onSubmit = async event => {
        event.preventDefault()
        if (!searchString.length) return
        setPodcasts(await getSearchPodcasts(searchString))
    }

    return (
        <div className="w-full flex flex-wrap flex-col items-center">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Search" 
                    value={searchString}
                    onChange={event => setSearchString(event.target.value)}
                />
            </form>
            <Podcasts podcasts={podcasts}/>
        </div>
    )
}

export default Explore