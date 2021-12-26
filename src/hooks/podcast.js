import { useQuery } from "react-query";
import useHttp from "./http";
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const useTopPodcasts = () => {
    const http = useHttp()
    const{data, isSuccess} = useQuery('podcasts/top', async () => {
        return await http.get(`${API_BASE_URL}/podcasts/top`)
    })

    return {podcasts: data?.podcasts, isSuccess}
}

const useMyPodcasts = () => {

    const http = useHttp()
    const{data, isSuccess} = useQuery('podcasts/my_list', async () => {
        return await http.get(`${API_BASE_URL}/podcasts/my_list`)
    })

    return {podcasts: data, isSuccess}
}

export {useTopPodcasts, useMyPodcasts}