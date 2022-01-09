import Podcasts from "../components/Podcasts"
import usePodcasts from "../hooks/podcast"
import guyImg from '../img/guy1.png'
import OnImagesLoaded from 'react-on-images-loaded';
import { useLoadingState } from '../hooks/loading';

const Top = () => {

    const { topPodcasts } = usePodcasts()
    const {setLoading} = useLoadingState()

    return (
        <OnImagesLoaded 
            onLoaded={() => setLoading(false)}
        >
            <div className="flex flex-row items-center justify-center p-24 overflow-hidden border-b border-gray-300">
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
                <Podcasts podcasts={topPodcasts} />
            </div>
        </OnImagesLoaded>
    )
}

export default Top