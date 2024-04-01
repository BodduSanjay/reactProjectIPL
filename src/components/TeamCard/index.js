// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({each}) => {
  const {id, name, teamImageUrl} = each
  return (
    <li className="teamCard-li">
      <Link to={`/team-matches/${id}`} className="teamCard-link">
        <img src={teamImageUrl} alt={name} className="teamCard-img" />
        <p className="teamCard-h1">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
