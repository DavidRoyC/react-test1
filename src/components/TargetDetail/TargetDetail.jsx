import { useContext } from "react";
import { useParams, Link } from "react-router-dom"

import PublicTargets from "../../contexts/PublicTargets";

import "./TargetDetail.css";

const TargetDetail = () => {
  const {targets, loadingTargets, errorTargets} = useContext(PublicTargets);
  const { id } = useParams();

  let target = targets.find(target => target.id.toString() === id.toString());

  return (
    <div className="targetForm">
      <div className="fieldBlock">
        <label>Nombre:</label>
        <p className="field">{target.name}</p>
      </div>
      <div className="fieldBlock">
        <label>Estado:</label>
        <p className="field">{target.state === 'alive' ? 'Activo' : 'Abatido'}</p>
      </div>
      <div className="fieldBlock">
        <label>Recompensa:</label>
        <p className="field">{target.reward}</p>
      </div>
      <Link to="/targets">Volver</Link>
    </div>
  )
}

export default TargetDetail;