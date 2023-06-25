import Image1 from "../../../assets/project1image.jpg";
import Image2 from "../../../assets/project1image2.jpg";

const Project1 = () => {
  return (
    <div className="mt-20 project-card">
      <div className="grid lg:grid-cols-2">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
      </div>
      <h3 className="text-2xl font-medium">Project Name: Toy Thriver</h3>
      <ul>
        <li>
          <span className="font-bold">Live Link:</span>
          <a
            href="https://toy-thriver.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500"
          >
            Visit website
          </a>
        </li>
        <li>
          <span className="font-bold">GitHub Server Link:</span>
          <a
            href="https://github.com/Zehad-Sarkar/toy-thriver-server-side"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500"
          >
            View server code
          </a>
        </li>
        <li>
          <span className="font-bold">GitHub Client Link:</span>
          <a
            href="https://github.com/Zehad-Sarkar/toy-thriver-client-side-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500"
          >
            View client code
          </a>
        </li>
      </ul>
      <p>
        <span className="font-bold">Technology used:</span> react / react
        router, mongodb, express js, firebase tailwind and daisy ui
      </p>
      <p>
        <span className="font-bold">Tools used:</span> vs code, vercel and
        firebase (deploy)
      </p>
      <p>
        <span className="font-bold">Features:</span> 1.Toy thriver is a store
        based website and all toys show by categories in the home page. <br />
        2.User after login he can add toys ,update added toys and delete toys.
        <br /> 3. If user not login he can't see toys details.
      </p>
    </div>
  );
};

export default Project1;
