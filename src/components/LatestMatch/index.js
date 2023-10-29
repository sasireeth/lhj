// Write your code here
import './index.css'

const LatestMatch = props => {
  const {item} = props
  const {
    umpires,
    manOfTheMatch,
    id,
    date,
    venue,
    secondInnings,
    firstInnings,
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = item
  return (
    <div className="cc1">
      <div className="co1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="co2">
        <img
          src={competingTeamLogo}
          alt="latest match {competingTeam}"
          className="img1"
        />
      </div>
      <div className="co3">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
