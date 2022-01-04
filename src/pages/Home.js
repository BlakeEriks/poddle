import girl1 from '../img/girl1.png'

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-evenly p-24">
                <div className="text-center p-8">
                    <div className="text-4xl leading-snug font-light justify-center items-center w-80">
                        <span className="font-semibold">Poddle</span> is the #1 app for discovering 
                        <div className="bg-green font-medium">
                            your next podcast.
                        </div>
                    </div>
                </div>
                <img src={girl1} alt="woman listening to podcast" style={{width: '25vw'}}/>
            </div>
            <div className="flex flex-row justify-evenly items-center text-xl font-light my-10 leading-snug">
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "Finding a great new podcast has never been easier!"
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Alex</span>
                        <img className="h-16 rounded-full" src="https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg" alt="male profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "Poddle always has just what I'm looking for."
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Sam</span>
                        <img className="h-16 rounded-full" src="https://i.pinimg.com/236x/37/cd/4a/37cd4ae9239b20dfd0f7f1e80194b344.jpg" alt="female profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center w-3/12 box-shadow br p-4">
                    <div className="text-center border-b border-gray-600 pb-3 italic">
                        "I love the awesome new podcasts I found with poddle!"
                    </div>
                    <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                        <span>Jerry</span>
                        <img className="h-16 rounded-full" src="https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg" alt="male profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home