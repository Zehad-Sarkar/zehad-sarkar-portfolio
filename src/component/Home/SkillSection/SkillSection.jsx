import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaBootstrap, FaCss3, FaHtml5, FaNode } from "react-icons/fa";
import react from "../../../assets/react.svg";
import firebase from "../../../assets/firebase.png";
import mongodb from "../../../assets/mongodb-logo.png";
import express from "../../../assets/express.png";
import javascript from "../../../assets/javascript.png";
import tailwind from "../../../assets/tailwind.png";

const SkillSection = () => {
  return (
    <section>
      {/* title for skills section */}
      <SectionTitle title="Skills" />
      {/* skills content here */}
      <div className="grid gap-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="flex flex-col skills html">
          <FaHtml5 />
          HTML
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills css">
          <FaCss3 /> CSS
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills tailwind">
          <img src={tailwind} className="w-12 h-8" /> TAILWIND CSS
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills bootstrap">
          <FaBootstrap /> <p>BOOTSTRAP</p>
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills javascript">
          <img src={javascript} className="w-12" />
          <div className="flex">
            JAVA <span className="text-6xl animate-spin text-rose-500">S</span>
            CRIPT
          </div>
          <progress
            className="w-56 progress progress-primary"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills react">
          <img src={react} alt="" /> REACT JS
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="85"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills node">
          <FaNode /> NODE
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="70"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills express">
          <img src={express} className="w-12 h-8" /> EXPRESS JS
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills firebase">
          <img src={firebase} className="w-12 h-8" /> Firebase
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="78"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col skills mongodb">
          <img src={mongodb} className="w-12 h-8" /> MongoDB
          <progress
            className="w-56 mt-2 progress progress-primary"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
