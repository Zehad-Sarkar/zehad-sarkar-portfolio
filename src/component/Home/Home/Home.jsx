import { Helmet } from "react-helmet-async";
import ContactForm from "../../ContactForm/ContactForm";
import ResumeSection from "../ResumeSection/ResumeSection";
import SkillSection from "../SkillSection/SkillSection";
import TopSection from "../TopSection/TopSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TopSection />
      <SkillSection />
      <ResumeSection />
      <ContactForm />
    </div>
  );
};

export default Home;
