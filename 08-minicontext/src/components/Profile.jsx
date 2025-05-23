// import React, {useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Profile() {
//     const {user} = useContext(UserContext)

//   if (!user) return <div>please login</div>
//   return <div>welcome {user.username }</div>
// }

// export default Profile

import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    console.log("Current user in profile:", user);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <p className="text-lg text-gray-700">Please login to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome,</h2>
                <p className="text-xl text-blue-600 font-semibold">{user.username}</p>
            </div>
        </div>
    );
}

export default Profile;
