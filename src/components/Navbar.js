import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode} bg-body-tertiary bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.abouttext}</a>
        </li> 
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch" text={`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" for="switchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  );
}

Navbar.propTypes = { // yha pr humne prop types ka use kiya hai jo props ke type ko check krta hai or agar props ka type galat ho to error show krta hai
  title: PropTypes.string, // use iss ky liye kiya hai kyunki humne title ko string type ka banaya hai or agar humne title ko number type ka banaya to error show krta hai use q krty hai ? ansewr: kyunki humne title ko string type ka banaya hai or agar humne title ko number type ka banaya to error show krta hai
  abouttext: PropTypes.string
};
Navbar.defaultProps = {
    title: "write about title here",
    abouttext: " write about text here"
}