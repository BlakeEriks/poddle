import { useQuery } from "react-query";
import useHttp from "./http";
import { useAuthState } from './auth';
import { useState } from 'react';
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const usePodcasts = () => {

    const http = useHttp()
    const [auth] = useAuthState()
    const [podcastId, setPodcastId] = useState()
    const [updatePodcastLoading, setUpdatePodcastLoading] = useState(false)

    const topPodcastsQuery = useQuery('podcasts/top', async () => await http.get(`${API_BASE_URL}/podcasts/top`))

    const recommendedPodcastsQuery = useQuery('podcasts/recommended', async () => await http.get(`${API_BASE_URL}/podcasts/recommended`), {enabled: !!auth})

    const getSearchPodcasts = async query => (await http.get(`${API_BASE_URL}/podcasts/search?query=${query}`)).results

    const myPodcastsQuery = useQuery('podcasts/my-list', async () => await http.get(`${API_BASE_URL}/podcasts/my_list`), {enabled: !!auth} )

    const podcastQuery = useQuery(`podcasts/${podcastId}`, async () => await http.get(`${API_BASE_URL}/podcasts/${podcastId}`), {enabled: !!podcastId} )

    const addPodcast = async podcast => {
        if (!auth) {
            alert('Please log in to save podcasts.')
        }
        else {
            setUpdatePodcastLoading(true)
            await http.post(`${API_BASE_URL}/podcasts/my_list`, {...podcast, api_id: podcast.id})
            await myPodcastsQuery.refetch()
            setUpdatePodcastLoading(false)
        }
    }

    const removePodcast = async podcast => {
        setUpdatePodcastLoading(true)
        await http.delete(`${API_BASE_URL}/podcasts/my_list/${podcast.id}`)
        await myPodcastsQuery.refetch()
        setUpdatePodcastLoading(false)
    }

    const podcastsLoading = topPodcastsQuery.status === 'loading' || 
                    recommendedPodcastsQuery.status === 'loading' || 
                    myPodcastsQuery.status === 'loading' ||
                    podcastQuery.status === 'loading'

    return {
        topPodcasts: topPodcastsQuery?.data?.podcasts, 
        getSearchPodcasts, 
        myPodcasts: myPodcastsQuery?.data,
        recommendedPodcasts: recommendedPodcastsQuery?.data, 
        podcast: podcastQuery?.data,
        setPodcastId,
        addPodcast,
        removePodcast,
        updatePodcastLoading,
        podcastsLoading
    }
}

export default usePodcasts