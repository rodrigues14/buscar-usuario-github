import { useState } from "react"
import { SearchStyled } from "./Search.style";

interface Props {
  fetchUser: (userName: string) => Promise<void>
}

export default function Search({ fetchUser }: Props) {
  const [userName, setUserName] = useState("");

  return (
    <SearchStyled>
      <h2>Digite o nome do usuário</h2>
      <div>
        <input
          required
          type="text"
          placeholder="Username"
          value={userName}
          onChange={event => setUserName(event.target.value)}
          onKeyDown={event => {if (event.key === "Enter") fetchUser(userName)}}
        /> 
        <button 
          onClick={() => fetchUser(userName)}
          disabled={userName.length < 1}
        >
          Procurar
        </button>
      </div>
    </SearchStyled>
  )
}
