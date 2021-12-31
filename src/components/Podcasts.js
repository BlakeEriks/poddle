import { useNavigate } from "react-router";

const Podcasts = ({podcasts}) => {

    const navigate = useNavigate()

    return (
        <div className="w-full flex flex-wrap flex-row justify-evenly">
            {podcasts?.map( podcast => {

                const bgImage = "url(\"" + podcast.image + "\")"
                if (!podcast.api_id) podcast.api_id = podcast.id
                let description = podcast.description ? podcast.description : podcast.description_original ? podcast.description_original : ''
                description = description?.length > 150 ? description?.substring(0,150) + '...' : description
                let title = podcast.title ? podcast.title : podcast.title_original ? podcast.title_original : ''
                title = title?.length > 30 ? title?.substring(0,30) + '...' : title

                return (
                    <div onClick={() => navigate(`/podcasts/${podcast.api_id}`)} key={podcast.id} className="m-8 flex flex-col overflow-hidden br group duration-500 transform hover:scale-110 cursor-pointer">
                        <div className="w-full flex justify-center p-2 bg-gradient-to-b from-pink-100 to-pink-300">
                            {title}
                        </div>
                        <div className={"relative w-80 h-72 flex justify-end items-center podcast-container overflow-hidden bg-center bg-cover"} style={{backgroundImage: bgImage}}>
                            <div className="opacity-0 text-center text-bg group-hover:opacity-100 duration-300 transition z-10">
                                {description}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Podcasts