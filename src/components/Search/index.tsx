import { useState } from "react"

interface Props {
  fetchUser: (userName: string) => Promise<void>
}

export default function Search({ fetchUser }: Props) {
  const [userName, setUserName] = useState("");

  return (
    <div>
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
        <button onClick={() => fetchUser(userName)}>Procurar</button>
      </div>
    </div>
  )
}
