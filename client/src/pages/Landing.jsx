import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components/index';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          "Jobify" is a job search platform designed to help users find job opportunities that align with their skills, experience, and preferences. It typically allows job seekers to create profiles, upload resumes, and search for jobs by various criteria such as location, industry, and job title. Employers can post job listings, search for potential candidates, and manage applications. The platform might include features like job alerts, company reviews, and career advice, making it a comprehensive tool for both job seekers and employers.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
