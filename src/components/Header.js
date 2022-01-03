import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';
import logo from '../img/Poddle.png'
import useUserActions from "../hooks/user";

const Header = () => {

    const [auth] = useAuthState()
    const { logout } = useUserActions()

    return (
        <div className="flex flex-row justify-between items-center px-6 font-script text-2xl border-b border-gray-300">
            <Link to="home" className="w-32 cursor-pointer font-semibold" >
                <img src={logo} />
            </Link>
            <div className="flex flex-row justify-center w-full">
                <Link to="home" className="hover:bg-green p-5">
                    Home
                </Link>
                <Link to="top" className="hover:bg-green p-5">
                    Top
                </Link>
                <Link to="recommended" className="hover:bg-green p-5">
                    Recommended
                </Link>
                <Link to="my-list" className="hover:bg-green p-5">
                    My List
                </Link>
            </div>
            <span className="text-lg font-normal">
                { auth ? 
                <>
                    <span className="p-2">
                        {auth.user.username}
                    </span>
                    <Link to="home" onClick={logout} className="bg-green p-2 br">
                        Logout
                    </Link>
                </>
                :
                <>
                    <Link to="login" className="p-2">
                        Log In
                    </Link> {" "}
                    <Link to="sign-up" className="bg-green p-2 br">
                        Sign Up
                    </Link>
                </>
                }
            </span>
        </div>
    )
}

export default Header