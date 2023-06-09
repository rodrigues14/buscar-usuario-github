import { IUser } from "../../interfaces/IUser";
import { Social, UserImage, UserStyled } from "./User.style";

export default function User(props: IUser) {
  const { avatar_url, login, location, followers, following, bio } = props
  return (
    <UserStyled>
      <UserImage src={avatar_url} alt="Imagem de perfil do usuário" />
      <h3>{login}</h3>
      <p>{location}</p>
      {bio && <p>{bio}</p>}
      <Social>
        <p>Seguidores: {followers}</p>
        <p>Seguindo: {following}</p>
      </Social>
    </UserStyled>
  )
}
