import { atom, useRecoilState } from 'recoil'
import usePodcasts from './podcast'

const loadingState = atom({
    key: 'loading',
    // get initial state from local storage to enable user to stay logged in
    default: true
})

export const useLoadingState = () => {
    const [loading, setLoading] = useRecoilState(loadingState)
    const { podcastsLoading } = usePodcasts()

    return {loading: loading || podcastsLoading, setLoading}
}