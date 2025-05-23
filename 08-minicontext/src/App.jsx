import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">React Context Demo</h1>
        <div className="flex flex-row items-start justify-center space-x-10 w-full max-w-6xl">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
