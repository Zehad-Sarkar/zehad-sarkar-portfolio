import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div className="container select-none">
      <SectionTitle title="Contact Info" />
      <hr />
      <div className="mt-4">
        <address>
          <div className="mb-2">
            <span className="font-semibold">Name:</span> Zehad Sarkar
          </div>
          <div className="mb-2">
            <span className="font-semibold">Location:</span> Mymensingh,
            Bangladesh.
          </div>
          <div className="mb-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:zehadsarkar22@gmail.com" className="ml-2 text-blue-400">
              zehadsarkar22@gmail.com
            </a>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+8801930406486">+880 1930406486</a>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Linkedin:</span>
            <a
              href="https://www.linkedin.com/in/r-a-zehad-sarkar-developer/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-blue-400"
            >
              zehad sarkar
            </a>
          </div>
        </address>
      </div>
    </div>
  );
};

export default Contact;
