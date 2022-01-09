import useGenres from '../hooks/genre';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLoadingState } from '../hooks/loading';

const Genres = () => {

    const {allGenres, myGenres, updateGenres} = useGenres()
    const [userGenres, setUserGenres] = useState([])
    const navigate = useNavigate()
    const {setLoading} = useLoadingState()

    useEffect( () => {
        setUserGenres(myGenres)
    }, [myGenres])

    useEffect( () => {
        setLoading(false)
    }, [])

    const toggleGenre = genre => {
        if (userGenres.find(userGenre => userGenre.id === genre.id)) {
            setUserGenres(userGenres.filter(userGenre => userGenre.id !== genre.id))
        }
        else {
            if (userGenres.length === 5) {
                setUserGenres([...userGenres.slice(1), genre])
            }
            else {
                setUserGenres([...userGenres, genre])
            }
        }
    }

    const hasChanges = () => {
        let changed = false
        userGenres?.forEach( userGenre => {
            if (!myGenres?.some(genre => genre.id === userGenre.id)) changed = true
        })
        myGenres?.forEach( userGenre => {
            if (!userGenres?.some(genre => genre.id === userGenre.id)) changed = true
        })
        return changed
    }

    const onSave = event => {
        event.preventDefault()
        if (hasChanges()) {
            updateGenres({ids: userGenres.map(genre => genre.id)})
        }
        setLoading(true)
        navigate('/recommended')
    }

    return (
        <div className="flex flex-col items-center w-2/3 mx-auto">
            <div className="text-4xl my-10 font-head text center">
                Let's figure out where your interests lie...
            </div>
            <div className="w-full flex flex-wrap justify-evenly my-4">
                {allGenres?.map(genre => {
                    const selected = userGenres?.some(userGenre => userGenre.id === genre.id)
                    return (
                        <div className={"p-4 text-xl br box-shadow bg-gray-50 text-gray-600 m-2 cursor-pointer " + (selected ? "bg-green" : 'hover:bg-gray-100')}
                            onClick={() => toggleGenre(genre)}
                            key={genre.id}
                        >
                            {genre.name}
                        </div>
                    )
                })}
            </div>
            <form onSubmit={onSave}>
                <button className={"my-4 px-10 py-3 text-2xl br border border-gray-300 " + ( hasChanges() ? 'bg-green' : '' )}>
                    Save
                </button>
            </form>
        </div>
    )
    
}

export default Genres