import { useState } from "react"
import { Container, Title, UserInfos, Repositories } from "./App.style";
import Search from "./components/Search"
import User from "./components/User";
import { IRepo } from "./interfaces/IRepo";
import { IUser } from "./interfaces/user";


function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [repo, setRepo] = useState<IRepo[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setRepo(null);
    setLoading(true);

    const responseUser = await fetch(`https://api.github.com/users/${userName}`);
    const responseRepo = await fetch(`https://api.github.com/users/${userName}/repos`);

    const [dataUser, dataRepo] = await Promise.all([responseUser.json(), responseRepo.json()]);

    setLoading(false);
    if (responseUser.status === 404 || responseRepo.status === 404) return setError(true);

    const { avatar_url, login, location, followers, following, bio } = dataUser;
    const userData: IUser = {avatar_url, login, location, followers, following, bio};
    setUser(userData)

    const repoData: IRepo[] = dataRepo.map((repo: any) => {
      const { name, language, stargazers_count } = repo;
      return { name, language, stargazers_count };
    });
    setRepo(repoData);
  }

  return (
    <Container>
      <UserInfos>
        <Title>Encontre usuários do Github</Title>
        <Search fetchUser={fetchUser} />
        {user && <User {...user} />}
        {loading && <p>Carregando...</p>}
        {error && <p>Usuário não encontrado</p>}
      </UserInfos>
      <Repositories>
        {repo?.map(item => <p>{item.name}</p>)}
      </Repositories>
    </Container>
  )
}

export default App
