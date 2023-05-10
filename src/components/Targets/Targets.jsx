import "./Targets.css";
import TargetsList from "../TargetsList/TargetsList";

const Targets = ({targets}) => {
  return (
    <section>
      <TargetsList targets={targets} />
    </section>
  );
}

export default Targets; 