import listenNotes from '../img/powered-by-listen-notes.png'

const Footer = () => {
    return (
        <div className="py-4 text-center flex flex-col items-center bg-pink-300">
            <div className="text-xl font-semibold">
                Created by Blake Eriks
            </div>
            <img src={listenNotes} className="w-40"/>
        </div>
    )
}

export default Footer