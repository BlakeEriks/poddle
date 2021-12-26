import Podcasts from "../components/Podcasts"
import { useTopPodcasts } from "../hooks/podcast"

const Explore = () => {

    const { podcasts } = useTopPodcasts()

    console.log(podcasts)

    return (
        <div className="w-full flex flex-wrap flex-col items-center">
            <input placeholder="Search"/>
            <Podcasts podcasts={podcasts}/>
        </div>
    )
}

export default Explore