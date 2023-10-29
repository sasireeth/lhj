// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    const {id, name, teamImageUrl} = teamsData
    return (
      <ul className="teamData">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          teamsData.map(each => (
            <Link to={`/team-matches/${each.id}`} className="c1">
              <li>
                <img src={each.teamImageUrl} alt="name" className="img" />
                <p className="tr">{each.name}</p>
              </li>
            </Link>
          ))
        )}
      </ul>
    )
  }
}
export default TeamCard
