import { useMutation, useQuery } from "react-query";
import useHttp from "./http";
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const usePodcasts = () => {
    const http = useHttp()

    const getTopPodcasts = async () => (await http.get(`${API_BASE_URL}/podcasts/top`)).podcasts

    const getSearchPodcasts = async query => (await http.get(`${API_BASE_URL}/podcasts/search?query=${query}`)).results

    const getMyPodcasts = async () => await http.get(`${API_BASE_URL}/podcasts/my_list`)

    const addPodcast = async podcast => await http.post(`${API_BASE_URL}/podcasts`, podcast)

    return {getTopPodcasts, getSearchPodcasts, getMyPodcasts, addPodcast}
}

// const useAddPodcast = () => {

//         const http = useHttp()
//         const addPodcastMutation = useMutation( 
//             podcast => http.post(`${API_BASE_URL}/podcasts`, podcast), 
//             {onSuccess: () => queryClient.invalidateQueries(`podcasts/my_list`)}
//         )

//         return podcast => addPodcastMutation.mutate(podcast)
// }

export default usePodcasts