import './index.css'

const MatchCard = ({each}) => {
  const {competingTeam, competingTeamLogo, result, matchStatus} = each

  const matchCardStatus =
    matchStatus.toLowerCase() === 'won' ? 'green-color' : 'red-color'

  return (
    <li className="matchCard-li">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matchCard-img"
      />
      <p className="matchCard-h1">{competingTeam}</p>
      <p className="matchCard-result">{result}</p>
      <p className={matchCardStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
