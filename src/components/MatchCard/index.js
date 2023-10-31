// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = item
  const is = matchStatus === 'Won' ? 'Won' : 'Lost'
  return (
    <li className="lg">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="img2"
      />
      <p className="team">{competingTeam}</p>
      <p>{result}</p>
      <p className={is}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
