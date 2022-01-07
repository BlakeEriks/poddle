import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';
import logo from '../img/Poddle.png'
import useUserActions from "../hooks/user";
import { useLocation } from "react-router-dom"
import { useLoadingState } from '../hooks/loading';
import { useNavigate } from 'react-router';

const Header = () => {

    const [auth] = useAuthState()
    const { logout } = useUserActions()
    const { pathname } = useLocation()
    const {loading, setLoading} = useLoadingState()
    const navigate = useNavigate()

    const links = [
        {name: 'Home', path: '/home' },
        {name: 'Top', path: '/top' },
        {name: 'Recommended', path: '/recommended' },
        {name: 'My List', path: '/my-list' }
    ]

    return (
        <div className="flex flex-row justify-between items-center px-6 font-script text-2xl border-b border-gray-300 w-full shadow-lg sticky top-0 bg-white z-10 box-border">
            <Link onClick={() => setLoading(true)} to="home" className="w-32 cursor-pointer font-semibold" >
                <img src={logo} />
            </Link>
            <div className="flex flex-row justify-center w-full">
                {links.map( link => 
                <Link onClick={() => setLoading(true)} key={link.path} to={link.path} className={"hover:bg-gray-100 p-5 box-border " + (pathname === link.path ? 'border-b-4 border-green' : '')}>
                    {link.name}
                </Link> )}
            </div>
            <div className="text-lg font-normal">
                { auth ? 
                    <div className="flex flex-row">
                        <div onClick={() => {setLoading(true);setTimeout(() => navigate('/my-genres'), 10)}} className="p-2">
                            {auth.user.username}
                        </div>
                        <div onClick={() => {setLoading(true);logout();navigate('home')}} to="home" className="bg-green p-2 br">
                            Logout
                        </div>
                    </div>
                :
                    <div className="flex items-center">
                        <Link onClick={() => setLoading(true)} to="login" className="p-2 whitespace-nowrap">
                            Log In
                        </Link> {" "}
                        <Link onClick={() => setLoading(true)} to="sign-up" className="bg-green p-2 br whitespace-nowrap">
                            Sign Up
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header