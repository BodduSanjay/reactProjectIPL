import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {listOfTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({listOfTeams: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, listOfTeams} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="Home-bg-cont">
            <div className="Home-h1-logo-cont">
              <img
                className="Home-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="Home-heading">IPL Dashboard</h1>
            </div>
            <ul className="Home-ul-cont">
              {listOfTeams.map(each => (
                <TeamCard each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default Home
