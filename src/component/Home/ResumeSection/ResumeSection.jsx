import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";

const ResumeSection = () => {
  return (
    <div className="select-none">
      <SectionTitle title="Education / Courses" />
      <div className="grid lg:grid-cols-2">
        {/* left side */}
        <div className="pl-4 border-r">
          <h3 className="mt-2 mb-3 text-4xl font-bold">Education</h3>
          <h5 className="text-xl font-bold">Diploma in engineering</h5>
          <p className="font-semibold">
            Shamoly Ideal Polytechnic Institute 2013 - 2017
          </p>
          <p>
            During my time at Shamoly Ideal Polytechnic Institute, I pursued a
            diploma in engineering with a specialization in mechanical
            engineering. The four-year program provided me with a strong
            foundation in the principles and practices of mechanical
            engineering.
          </p>
        </div>
        {/* right side */}
        <div className="pl-4">
          <h3 className="mt-2 mb-3 text-4xl font-bold">Professional Course</h3>
          <h5 className="text-xl font-bold">Web Development</h5>
          <p className="font-semibold">Programming Hero Dec 2022 - June 2023</p>
          <p>
            I completed an intensive web development course through Programming
            Hero, where I honed my skills in HTML, CSS, JavaScript, React.js,
            Node.js, Express.js, Firebase, and MongoDB. This comprehensive
            program provided me with hands-on training and practical experience
            in building responsive and interactive websites and web
            applications. Throughout the course, I worked on various projects
            that allowed me to apply my knowledge and develop a solid foundation
            in web development best practices. I am eager to leverage my
            new found skills and contribute to innovative web development
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
