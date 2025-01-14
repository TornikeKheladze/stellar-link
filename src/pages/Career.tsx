import { useParams } from "react-router";
import { careers } from "../data/careers";

const Career = () => {
  const { id } = useParams();
  const career = id ? careers.find((career) => career.id == +id) : undefined;
  return (
    <section>
      <h1>{career?.title}</h1>
    </section>
  );
};

export default Career;
