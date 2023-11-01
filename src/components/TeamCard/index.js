// Write your code here

import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {tmData} = props

  return (
    <Link to={`/team-matches/${tmData.id}`} className="c1">
      <li>
        <img src={tmData.teamImageUrl} alt="name" className="img" />
        <p className="tr">{tmData.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
