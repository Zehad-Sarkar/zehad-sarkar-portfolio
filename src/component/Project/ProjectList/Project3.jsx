import image1 from "../../../assets/project3image.jpg";
import image2 from "../../../assets/project3image2.jpg";

const Project3 = () => {
  return (
    <div className="mt-20 project-card">
      <div className="grid lg:grid-cols-2">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
      <h3 className="text-2xl font-medium">
        Project Name: Tasty Cookes Compass
      </h3>
      <ul>
        <li>
          <span className="font-bold">Live Link:</span>
          <a
            href="https://tasty-cookes-compass.web.app/"
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
            href="https://github.com/Zehad-Sarkar/tasty-cooks-compass-server.git"
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
            href="https://github.com/Zehad-Sarkar/tasty-cooks-compass-client.git"
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
        router, express js, firebase, tailwind and flowbite
      </p>
      <p>
        <span className="font-bold">Tools used:</span> vs code, vercel and
        firebase (deploy)
      </p>
      <p>
        <span className="font-bold">Features:</span> 1.The project features a
        main layout component, along with several shared pages for the home,
        blogs, login, registration, and chef recipes sections.
        <br />
        2.A protected page for the chef recipes section is included, requiring
        user authentication before access is granted.
        <br /> 3. Built using modern web technologies, Thai Spice Kitchen offers
        a seamless user experience and a visually appealing design.
      </p>
    </div>
  );
};

export default Project3;
