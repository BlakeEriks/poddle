import {useState} from "react"
import useUserActions from '../hooks/user';

const Login = ({ newUser }) => {

    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            if (newUser) {
                await userActions.register({...form})
            }
            else {
                await userActions.login({...form})
            }
        }
        catch (err) {
            alert('Invalid login or username taken')
        }
    }

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="flex w-full justify-center">
            <form onSubmit={handleSubmit} method="post" className="flex flex-col justify-center w-80 border br p-10">
                <input 
                    autoFocus
                    className="border p-5 br mb-5"
                    type="text" 
                    name="username" 
                    value={form.username} 
                    onChange={onChange} 
                    placeholder="username" 
                    required 
                />
                <input 
                    className="border p-5 br mb-5"
                    type="password" 
                    name="password" 
                    value={form.password} 
                    onChange={onChange} 
                    placeholder="password" 
                    required 
                />
                <button 
                    type="submit"
                    className="border br"
                >
                    {newUser ? 'Sign Up' : 'Log In'}
                </button>
                {/* <button onClick={() => setViewState('default')}>
                    <TimesIcon />
                </button> */}
            </form>
        </div>
    )
}

export default Login