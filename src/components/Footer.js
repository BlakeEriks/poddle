import listenNotes from '../img/powered-by-listen-notes.png'

const Footer = () => {
    return (
        <div className="py-4 text-center flex flex-col items-center">
            <div className="text-lg">
                Created by <span className="font-semibold">Blake Eriks</span>
            </div>
            <img src={listenNotes} className="w-40"/>
        </div>
    )
}

export default Footer