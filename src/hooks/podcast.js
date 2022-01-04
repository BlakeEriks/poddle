import { useQuery, useQueryClient } from "react-query";
import useHttp from "./http";
import { useAuthState } from './auth';
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const usePodcasts = () => {

    const http = useHttp()
    const [auth] = useAuthState()
    const queryClient = useQueryClient()

    const getTopPodcasts = async () => (await http.get(`${API_BASE_URL}/podcasts/top`)).podcasts

    const getSearchPodcasts = async query => (await http.get(`${API_BASE_URL}/podcasts/search?query=${query}`)).results

    const myPodcastsQuery = useQuery('podcasts/my-list', async () => await http.get(`${API_BASE_URL}/podcasts/my_list`), {enabled: !!auth} )

    const addPodcast = async podcast => {
        if (!auth) {
            alert('Please log in to save podcasts.')
        }
        else {
            await http.post(`${API_BASE_URL}/podcasts/my_list`, {...podcast, api_id: podcast.id})
            queryClient.invalidateQueries('podcasts/my-list')
        }
    }

    const removePodcast = async podcast => {
        await http.delete(`${API_BASE_URL}/podcasts/my_list/${podcast.id}`)
        queryClient.invalidateQueries('podcasts/my-list')
    }

    return {
        getTopPodcasts, 
        getSearchPodcasts, 
        myPodcasts: myPodcastsQuery?.data, 
        addPodcast, 
        removePodcast
    }
}

const usePodcast = id => {
    const http = useHttp()
    console.log('getting : ' + `${API_BASE_URL}/podcasts/${id}`)
    const {data, isSuccess} = useQuery(`podcasts/${id}`, async () => await http.get(`${API_BASE_URL}/podcasts/${id}`), {enabled: !!id} )
    return {podcast: data, isSuccess}
}

export {usePodcasts, usePodcast}