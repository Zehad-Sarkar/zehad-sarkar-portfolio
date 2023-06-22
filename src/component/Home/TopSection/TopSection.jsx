import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profile_picture from "../../../assets/zs.jpg";

const TopSection = () => {
  return (
    <div className="grid items-center justify-center gap-3 mt-8 mb-20 select-none lg:grid-cols-2">
      <div className="order-2 space-y-4 lg:order-1">
        <h4 className="text-3xl font-medium">Hi , I am </h4>
        <h3 className="pl-12 text-6xl font-bold text-indigo-600">
          Zehad Sarkar
        </h3>
        <p>
          As a passionate web developer with expertise in HTML, CSS, JavaScript,
          and frameworks like Tailwind CSS and Bootstrap. I have a strong eye
          for clean and visually appealing designs. I'm skilled in frontend
          development with React and have recently started exploring backend
          programming with Node.js and Express. I'm experienced in data
          management using MongoDB and Firebase. As a beginner, I prioritize
          continuous learning and staying updated with industry trends. I enjoy
          collaborating with other developers and clients to bring ideas to
          life. Feel free to explore my portfolio to see my skills in action.
          Let's connect and create something amazing together!
        </p>
        <div className="p-4 text-white bg-purple-600 rounded-lg">
          <p className="flex items-center gap-2">
            Follow me on:
            <a href="https://www.linkedin.com/in/r-a-zehad-sarkar-developer/">
              <FaLinkedin className="w-24 h-12 hover:text-indigo-500" />
            </a>
            <a href="https://github.com/Zehad-Sarkar">
              <FaGithub className="w-24 h-12 hover:text-indigo-500" />
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center order-1 mt-48 lg:order-2">
        <img
          src={profile_picture}
          className="rounded-lg sunlight-logo"
          style={{ borderRadius: "200px 200px 50px 50px" }}
          alt="https://i.ibb.co/ZzRd5pj/zs.png"
        />
      </div>
    </div>
  );
};

export default TopSection;
