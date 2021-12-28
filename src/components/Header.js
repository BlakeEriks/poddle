import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';
import logo from '../img/Poddle.png'
import useUserActions from "../hooks/user";

const Header = () => {

    const [auth] = useAuthState()
    const { logout } = useUserActions()

    return (
        <div className="flex flex-row justify-between items-center p-6 bg-pink-300 font-script text-2xl font-semibold">
            <Link to="home" className="w-1/6 cursor-pointer">
                <img src={logo} className="" />
            </Link>
            <div className="">
                <Link to="home" className="px-10 py-5 hover:bg-pink-200">
                    Home
                </Link>
                <Link to="explore" className="px-10 py-5 hover:bg-pink-200">
                    Explore
                </Link>
                <Link to="my-list" className="px-10 py-5 hover:bg-pink-200">
                    My List
                </Link>
            </div>
            <span className="text-lg font-normal">
                { auth ? 
                <>
                    <span className="p-2">
                        {auth.user.username}
                    </span>
                    <span onClick={logout} className="bg-white p-2 br">
                        Logout
                    </span>
                </>
                :
                <>
                    <Link to="login" className="p-2">
                        Log In
                    </Link> {" "}
                    <Link to="sign-up" className="bg-white p-2 br">
                        Sign Up
                    </Link>
                </>
                }
            </span>
        </div>
    )
}

export default Header