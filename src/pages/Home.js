const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="relative flex flex-row items-center space-evenly py-28">
                <div className="text-center w-1/2 flex justify-end z-10">
                    <div className="text-5xl leading-snug font-light text-gray-600" style={{width: "26rem"}}>
                        <span className="font-semibold">Poddle</span> is the #1 app for discovering 
                        <div className="text-purple-700 font-bold">
                            your next podcast.
                        </div>
                    </div>
                </div>
                <div className="w-3/5">
                    <img src="https://i.imgur.com/6XzrvsG.png" alt="woman listening to podcast"/>
                </div>
                <div style={{background: 'rgb(244,114,182)', background: 'linear-gradient(0deg, rgba(249, 168, 212,1) 0%, rgba(241,241,241,0.3) 40%, rgba(241,241,241,0.3) 60%, rgba(249, 168, 212,1) 100%)'}} 
                    className="absolute top-0 h-full w-full">
                </div>
            </div>
            <div className="flex flex-row justify-evenly text-xl font-light my-10 leading-snug">
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4 bg-pink-300">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "Finding a great new podcast has never been easier!"
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Alex</span>
                        <img className="h-16 rounded-full" src="https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg" alt="male profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4 bg-pink-300">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "I love the awesome new podcasts I found with poddle!"
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Jerry</span>
                        <img className="h-16 rounded-full" src="https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg" alt="male profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4 bg-pink-300">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "Poddle always has just what I'm looking for."
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Sam</span>
                        <img className="h-16 rounded-full" src="https://i.pinimg.com/236x/37/cd/4a/37cd4ae9239b20dfd0f7f1e80194b344.jpg" alt="female profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home