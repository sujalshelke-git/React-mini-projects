// import React, {useState, useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [passowrd, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, passowrd}) 
    
//     }
//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="text"
//       value={username}
//       onChange={(e) => setUsername(e.target.value) }
//       placeholder='username' />
//       {"   "}
//       <input type="password" 
//       value={passowrd}
//       onChange={(e) => setPassword(e.target.value) }
//       placeholder='password' />
//       <button onClick={handleSubmit}>submit</button>

//     </div>
//   )
// }

// export default Login

import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting:", { username, password });
        setUser({ username, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onClick={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
