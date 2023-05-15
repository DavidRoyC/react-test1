import "./TargetCard.css";

const TargetCard = ({target}) => {

  return (<li className={'Target ' + target.state}>
            <div className="action"><button onClick={() => {}}>🖋</button></div>
            <div className="action"><button onClick={() => {}}>❌</button></div>
            <div className="name">{target.name}</div>
          </li>);
}
export default TargetCard;