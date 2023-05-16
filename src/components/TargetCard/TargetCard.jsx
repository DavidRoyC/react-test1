import "./TargetCard.css";

const TargetCard = ({target}) => {

  return (<li className={'Target ' + target.state}>
            <div className="action"><button onClick={() => {}}><span className="mi-outlined">edit</span></button></div>
            <div className="action"><button onClick={() => {}}><span className="mi-outlined">delete</span></button></div>
            <div className="name">{target.name}</div>
          </li>);
}
export default TargetCard;