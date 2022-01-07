import { useMutation } from 'react-query';
import { useAuthState } from './auth';
import useHttp from './http';
import { useQueryClient } from 'react-query';
import { useQuery } from 'react-query';

const useGenres = () => {

    const API_BASE_URL = process.env.REACT_APP_API_URL
    const [auth] = useAuthState()
    const http = useHttp()
    const queryClient = useQueryClient()

    const allGenresQuery = useQuery(
        'genres', 
        async () => await http.get(`${API_BASE_URL}/genres`)
    )
    
    const myGenresQuery = useQuery('genres/my-list', async () => await http.get(`${API_BASE_URL}/genres/my_list`), {enabled: !!auth} )

    const genreMutation = useMutation( ids => {
        return http.put(`${API_BASE_URL}/genres/my_list`, ids)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('genres/my-list')
            queryClient.invalidateQueries('podcasts/recommended')
        }
    })

    return {
            allGenres: allGenresQuery?.data,
            myGenres: myGenresQuery?.data, 
            updateGenres: genreMutation.mutate
    }

}

export default useGenres