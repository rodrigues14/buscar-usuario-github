import { IUser } from "../../interfaces/user";

export default function User(props: IUser) {
  const { avatar_url, login, location, followers, following, html_url, bio } = props
  return (
    <div>
      <img src={avatar_url} alt="Imagem de perfil do usuário" />
      <div>
        <p>{login}</p>
        <p>{location}</p>
        <p>{bio}</p>
        <p>{followers}</p>
        <p>{following}</p>
        <a href={html_url} rel="noreferrer noopener">Visitar Perfil</a>
        
      </div>
    </div>
  )
}
