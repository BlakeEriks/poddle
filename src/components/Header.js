import { Link } from "react-router-dom"
import { useAuthState } from '../hooks/auth';

const Header = () => {

    const [auth, setAuth] = useAuthState()

    return (
        <div className="flex flex-row justify-between items-end m-10">
            <div className="text-5xl">
                Poddle
            </div>
            <div className="text-3xl">
                <Link to="explore" className="px-10">
                    Explore
                </Link>
                <Link to="my-list" className="px-10">
                    My List
                </Link>
                { auth ? 'Hello ' + auth.user.username :
                <>
                    <Link to="login" className="">
                        Login
                    </Link> |{" "}
                    <Link to="sign-up" className="">
                        Sign Up
                    </Link>
                </>
                }
            </div>
        </div>
    )
}

export default Header