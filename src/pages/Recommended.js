import usePodcasts from "../hooks/podcast"
import guy from "../img/guy3.png"
import Podcasts from '../components/Podcasts';
import { useLoadingState } from '../hooks/loading';
import OnImagesLoaded from 'react-on-images-loaded';

const Recommended = () => {
    
    const {recommendedPodcasts} = usePodcasts()
    const {loading, setLoading} = useLoadingState()

    return (
        <OnImagesLoaded 
            onLoaded={() => setLoading(false)}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-evenly p-24 border-b border-gray-300">
                    <div className="text-center p-8">
                        <div className="flex flex-col text-4xl leading-snug font-light items-center w-80">
                            Take a look around at 
                            <div className="bg-green font-medium">
                                your curated list
                            </div>
                            from all the genres you love.
                        </div>
                    </div>
                    <img src={guy} alt="woman listening to podcast" style={{width: '25vw'}}/>
                </div>
                <div className="text-center text-4xl font-head my-8">
                    Recommended Podcasts
                </div>
                <div className="w-full flex flex-wrap flex-col items-center">
                    <Podcasts podcasts={recommendedPodcasts?.filter(n => n)} />
                </div>
            </div>
        </OnImagesLoaded>
    )
}

export default Recommended