import About from "../../About/About";
import ContactForm from "../../ContactForm/ContactForm";
import ResumeSection from "../ResumeSection/ResumeSection";
import SkillSection from "../SkillSection/SkillSection";
import TopSection from "../TopSection/TopSection";

const Home = () => {
  return (
    <div>
      <TopSection />
      <SkillSection />
      <ResumeSection />
      {/* <About/> */}
      <ContactForm />
    </div>
  );
};

export default Home;
