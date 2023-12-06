import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-4">My Details</h2>
          <p className="text-gray-700 mb-2">First Name: Dipankar Prasad</p>
          <p className="text-gray-700 mb-2">Highest Degree Passout Year: July, 2023</p>
          <p className="text-gray-700">Technologies/Languages: ReactJS, React-Native, NodeJS, ExpressJS, MongoDB, MySQL, C++, TailwindCSS, Git, Photoshop</p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Download Resume</h2>
          <a
            href="../assets/dipankar__resume.pdf"
            download
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Download Resume
          </a>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">BMI Calculation</h2>
          <p>
            <Link to="/bmi" className="text-blue-500 underline hover:text-blue-700">
              Calculate BMI
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
