import { useState } from "react"
import { Title, UserInfos } from "./App.style";
import Search from "./components/Search"
import User from "./components/User";
import { IUser } from "./interfaces/user";


function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json();

    setLoading(false)
    if (response.status === 404) return setError(true)
    const { avatar_url, login, location, followers, following, bio } = data;
    const userData: IUser = {
      avatar_url,
      login,
      location,
      followers,
      following,
      bio
    }
    setUser(userData)
  }

  return (
    <section>
      <UserInfos>
        <Title>Encontre usuários do Github</Title>
        <Search fetchUser={fetchUser} />
        {user && <User {...user} />}
        {loading && <p>Carregando...</p>}
        {error && <p>Usuário não encontrado</p>}
      </UserInfos>
    </section>
  )
}

export default App
