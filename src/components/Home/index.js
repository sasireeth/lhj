import './index.css'
import TeamCard from '../TeamCard'

const Home = () => (
  <div className="bg" testid="loader">
    <div className="bg1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        className="logo"
        alt="ipl logo"
      />
      <h1>IPL Dashboard</h1>
    </div>
    <ul>
      <TeamCard />
    </ul>
  </div>
)

export default Home
