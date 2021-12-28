import { ConsoleWriter } from 'istanbul-lib-report';
import { useState, useEffect } from 'react';
import Podcasts from '../components/Podcasts';
import usePodcasts from '../hooks/podcast';

const MyList = () => {

    const { getMyPodcasts } = usePodcasts()
    const [podcasts, setPodcasts] = useState([])

    useEffect( async () => {
        setPodcasts(await getMyPodcasts())
    }, [])

    return (
        <div className="w-full flex flex-wrap flex-col items-center">
            <Podcasts podcasts={podcasts} action='removePodcast'/>
        </div>
    )
}

export default MyList