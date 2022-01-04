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
                title = title?.length > 24 ? title?.substring(0,24) + '...' : title

                return (
                    <div onClick={() => navigate(`/podcasts/${podcast.api_id}`)} key={podcast.id} className="m-8 flex flex-col overflow-hidden br group duration-500 transform hover:scale-110 cursor-pointer w-60 box-shadow">
                        <div className="w-full flex justify-center p-2 bg-green">
                            {title}
                        </div>
                        <div className={"flex w-full items-end overflow-hidden bg-cover bg-no-repeat h-48"} style={{backgroundImage: bgImage}}>
                            <div className="opacity-0 text-center group-hover:opacity-100 bg-opacity-80 bg-green duration-300 transition text-xs">
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