import { IRepo } from '../../interfaces/IRepo';
import { BsLink45Deg } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { RepositoryStyled, Stars } from './Repository.style';

export default function Repository({name, language, stargazers_count, html_url}: IRepo) {
  return (
    <RepositoryStyled>
      <h3>{name}</h3>
      <div>
        <p>{language}</p>
        <Stars>
          <AiFillStar size={18}/> 
          <span>{stargazers_count}</span>
        </Stars>
      </div>
      <a href={html_url} rel="noreferrer noopener" target="_blank"><BsLink45Deg size={30} /></a>
    </RepositoryStyled>
  )
}
