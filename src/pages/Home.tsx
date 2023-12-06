import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section>
        <h2>My Details</h2>
        <p>First Name: Dipankar Prasad</p>
        <p>Highest Degree Passout Year: July, 2023</p>
        <p>Technologies/Languages: ReactJS, React-Native, NodeJS, ExpressJS, MongoDB, MySQL, C++, TailwindCSS, Git, Photoshop</p>
      </section>
      <section>
        <h2>Download Resume</h2>
        <Link to="/dipankar__resume.pdf" download>
          Download Resume
        </Link>
      </section>
      <section>
        <h2>BMI Calculation</h2>
        <p>
          <Link to="/bmi">Calculate BMI</Link>
        </p>
      </section>
    </div>
  )
}

export default Home