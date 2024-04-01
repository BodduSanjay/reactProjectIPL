// Write your code here
import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="LatestMatch-bg-cont">
      <div className="LatestMatch-img-details-cont">
        <div className="LatestMatch-details-cont">
          <p className="latestMatchDetails-heading">{competingTeam}</p>
          <p className="LatestMatch-date-para">{date}</p>
          <p className="LatestMatch-content-para">{venue}</p>
          <p className="LatestMatch-content-para">{result}</p>
        </div>
        <div className="LatestMatch-img-cont">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="LatestMatch-img"
          />
        </div>
      </div>
      <div className="LatestMatch-other-details-cont">
        <p className="LatestMatch-content-para-2">
          First Innings
          <br />
          {firstInnings}
        </p>
        <p className="LatestMatch-content-para-2">
          Second Innings
          <br />
          {secondInnings}
        </p>
        <p className="LatestMatch-content-para-2">
          Man Of The Match
          <br />
          {manOfTheMatch}
        </p>
        <p className="LatestMatch-content-para-2">
          Umpires
          <br />
          {umpires}
        </p>
      </div>
    </div>
  )
}
export default LatestMatch
