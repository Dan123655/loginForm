import React,{useState} from 'react'

function Login() {


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
   const handleSubmit = (e) => {
    //    e.preventdefault();
       console.log(username,password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='login'>Username</label>
                <input value={username} onChange={((e) => setUsername(e.target.value))} type='login' placeholder='login' id='login' name='login'></input>
                <label htmlFor='password'>password</label>
                <input value={password} onChange={((e) => setPassword(e.target.value))} type='password' placeholder='password' id='password' name='password'></input>
                <button>Log in</button>
            </form>

        </>
    )
}

export default Login