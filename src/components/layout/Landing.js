import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Simple MERN Stack Login</h1>
          <p className="lead">
            Create an account to access and able to search other users
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary">Sign Up</Link>
            <Link to='/Login' className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
