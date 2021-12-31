import Podcasts from '../components/Podcasts';
import {usePodcasts} from '../hooks/podcast';

const MyList = () => {

    const { myPodcasts, removePodcast } = usePodcasts()

    return (
        <div className="w-full flex flex-wrap flex-col items-center">
            <Podcasts podcasts={myPodcasts} action={removePodcast}/>
        </div>
    )
}

export default MyList