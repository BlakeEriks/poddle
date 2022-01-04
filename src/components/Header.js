import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';
import logo from '../img/Poddle.png'
import useUserActions from "../hooks/user";

const Header = () => {

    const [auth] = useAuthState()
    const { logout } = useUserActions()

    return (
        <div className="flex flex-row justify-between items-center px-6 font-script text-2xl border-b border-gray-300 w-full">
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
            <div className="text-lg font-normal">
                { auth ? 
                    <div className="flex flex-row">
                        <Link to="my-genres" className="p-2">
                            {auth.user.username}
                        </Link>
                        <Link to="home" onClick={logout} className="bg-green p-2 br">
                            Logout
                        </Link>
                    </div>
                :
                    <div className="flex items-center">
                        <Link to="login" className="p-2 whitespace-nowrap">
                            Log In
                        </Link> {" "}
                        <Link to="sign-up" className="bg-green p-2 br whitespace-nowrap">
                            Sign Up
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header