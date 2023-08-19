import { Helmet } from "react-helmet-async";
import Project1 from "./ProjectList/Project1";
import Project3 from "./ProjectList/Project3";
import Project2 from "./ProjectList/project2";

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div>
        {/* project 1 */}
        <Project1 />
        {/* project 2 */}
        <Project2 />
        {/* project 3 */}
        <Project3 />
      </div>
    </>
  );
};

export default Project;
