import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
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
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg">
            <div className="bg1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul>
              {teamsData.map(each => (
                <TeamCard key={each.id} tmData={each} />
              ))}
            </ul>
          </div>
        )}
      </ul>
    )
  }
}
export default Home
