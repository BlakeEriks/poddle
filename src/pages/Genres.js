import useGenres from '../hooks/genre';
import { useState } from 'react';
import { useEffect } from 'react';

const Genres = () => {

    const {allGenres, myGenres, updateGenres} = useGenres()
    const [userGenres, setUserGenres] = useState([])

    useEffect( () => {
        setUserGenres(myGenres)
    }, [myGenres])

    const toggleGenre = genre => {
        if (userGenres.find(userGenre => userGenre.id === genre.id)) {
            setUserGenres(userGenres.filter(userGenre => userGenre.id !== genre.id))
        }
        else {
            setUserGenres([...userGenres, genre])
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
            <button onClick={() => updateGenres({ids: userGenres.map(genre => genre.id)})} className={"my-4 px-10 py-3 text-2xl br border border-gray-300 " + ( hasChanges() ? 'bg-green' : '' )}>Save</button>
        </div>
    )
    
}

export default Genres