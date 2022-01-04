import Podcasts from '../components/Podcasts';
import {usePodcasts} from '../hooks/podcast';
import guy from "../img/guy2.png"

const MyList = () => {

    const { myPodcasts } = usePodcasts()

    return (
        <>
            <div className="flex items-center justify-evenly p-24 border-b border-gray-300">
                <img src={guy} alt="woman listening to podcast" style={{width: '25vw'}}/>
                <div className="text-center p-8">
                    <div className="text-4xl leading-snug font-light justify-center items-center w-80">
                        Rest easy knowing <span className="bg-green font-medium">all your favs</span> are saved in one place.
                    </div>
                </div>
            </div>
            <div className="text-center text-4xl font-head mt-8">
                My Podcasts
            </div>
            <div className="w-full flex flex-wrap flex-col items-center">
                <Podcasts podcasts={myPodcasts}/>
            </div>
        </>
    )
}

export default MyList