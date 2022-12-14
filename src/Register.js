import React,{useState} from 'react'

function Register() {


const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('')



    const registration = async (e) => {
        e.preventDefault();
         const requestOptions = {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin': '*',
                'accept': '*/*'         },
            body: JSON.stringify({ 'username': username, 'password': password})
        };
        fetch('http://localhost:3500/auth/registration', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data); setResult(JSON.stringify(data))
            })
            
            // .then(data => this.setState({ postId: data.id }))
           
}
    const handleSubmit = (e) => {

        console.log(username, password)
        console.log('handlesubmit')
                                                                        registration(e)
        // e.preventdefault();
    }

                                                                    

    return (
        <>
            <form id='myform' onSubmit={handleSubmit}>
                <label htmlFor='login'>Username</label>
                <input value={username} onChange={((e) => setUsername(e.target.value))} type='login' placeholder='login' id='login' name='login'></input>
                <label htmlFor='password'>password</label>
                <input value={password} onChange={((e) => setPassword(e.target.value))} type='password' placeholder='password' id='password' name='password'></input>
                <button id='myform' type='submit'>Log in</button>
                <h3>{result}</h3>
            </form>

        </>
    )
}

export default Register