import React from "react";

const Project2 = () => {
  return (
    <div className="mt-20 project-card">
      <h3 className="text-2xl font-medium">
        Project Name: Art Innovators Academy
      </h3>
      <ul>
        <li>
          <span className="font-bold">Live Link:</span>
          <a
            href="https://art-innovators-academy.web.app/"
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
            href="https://github.com/Zehad-Sarkar/art-innovators-server.git"
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
            href="https://github.com/Zehad-Sarkar/art-innovators-client.git"
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
        router, express js, firebase, mongodb, tailwind and daisy ui
      </p>
      <p>
        <span className="font-bold">Tools used:</span> vs code, vercel and
        firebase (deploy)
      </p>
      <p>
        <span className="font-bold">Features:</span> 1.Art innovators academy
        based website show by banner, instructor’s classes in the home page.
        <br />
        2.User after login he can see dashboard. He can’t see others dashboard.
        <br /> 3. If user not login he can’t see dashboard and can’t select any
        classes.
      </p>
    </div>
  );
};

export default Project2;
