import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';
import logo from '../img/Poddle.png'

const Header = () => {

    const [auth, setAuth] = useAuthState()

    return (
        <div className="flex flex-row justify-between items-end p-6 bg-pink-300 font-script">
            <img src={logo} className="w-1/6" />
            <div className="text-3xl">
                <Link to="explore" className="px-10">
                    Explore
                </Link>
                <Link to="my-list" className="px-10">
                    My List
                </Link>
                <span className="px-10">
                    { auth ? 'Hello ' + auth.user.username :
                    <>
                        <Link to="login" className="">
                            Login
                        </Link> |{" "}
                        <Link to="sign-up" className="">
                            Sign Up
                        </Link>
                    </>}
                </span>
            </div>
        </div>
    )
}

export default Header