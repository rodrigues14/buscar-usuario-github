import { useEffect, useState } from "react"
import Search from "./components/Search"
import { IUser } from "./interfaces/user";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json();
    console.log(data);
    const { avatar_url, login, location, followers, following } = data;
    const userData: IUser = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData)
  }
  

  return (
    <>
      <h1>Encontre usuários do Github</h1>
      <Search fetchUser={fetchUser} />
      <p>{user && user.login}</p>
    </>
  )
}

export default App
