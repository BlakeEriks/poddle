import girl1 from '../img/girl1.png'
import girl2 from '../img/girl2.png'
import guy4 from '../img/guy4.png'
import guy5 from '../img/guy5.png'
import { useLoadingState } from '../hooks/loading';
import OnImagesLoaded from 'react-on-images-loaded';

const Home = () => {

    const testimonials = [
        {quote: `"Finding a great new podcast has never been easier!"`, name: "Alex", img: guy4},
        {quote: `"Poddle always has just what I'm looking for."`, name: "Sam", img: girl2},
        {quote: `"I love the awesome new podcasts I found with poddle!"`, name: "Josh", img: guy5}
    ]
    const {setLoading} = useLoadingState()

    return (
        <OnImagesLoaded
            onLoaded={() => setLoading(false)}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-evenly p-24 border-b border-gray-300">
                    <div className="text-center p-8">
                        <div className="flex flex-col text-4xl leading-snug font-light items-center w-80">
                            <div><span className="font-semibold">Poddle</span> is the #1 app for discovering </div>
                            <div className="bg-green font-medium">
                                your next podcast.
                            </div>
                        </div>
                    </div>
                    <img src={girl1} alt="woman listening to podcast" style={{width: '25vw'}}/>
                </div>
                <div className="flex flex-row justify-evenly items-center text-xl font-light my-10 leading-snug">
                    {testimonials.map( ({quote, name, img}, index) => 
                        <div key={index} className="flex flex-col items-center w-3/12 box-shadow br p-4">
                            <div className="text-center border-b border-gray-600 pb-3 italic">
                                {quote}
                            </div>
                            <div className="flex flex-row items-center w-1/2 justify-evenly mt-3">
                                <span>{name}</span>
                                <img className="h-16 rounded-full" src={img} alt="male profile" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </OnImagesLoaded>
    )
}

export default Home