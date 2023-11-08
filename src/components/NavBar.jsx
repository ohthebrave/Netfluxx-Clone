import React from 'react';

function NavBar() {
  return (
    <div className='fixed-top'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fs-1" href="#">Netflix</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">New & Popular</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">My List</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
                
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link fs-4" aria-current="page" href="#">KIDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-4" aria-current="page" href="#">DVD</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
