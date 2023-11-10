import React from 'react';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function NavBar({setSearchValue,searchValue}) {
    // console.log(searchValue)
function handleSubmit(e){
    e.preventDefault()
}

  return (
    <div className='fixed-top'>
      <nav className="navbar navbar-expand-lg bg-light transparent-nav">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fs-1" href="#">Netfluxx</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fw-bold lh-1" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/movies'}>Movies</Link>
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
              <div class="d-flex" role="search">
                <input class="form-control-sm "  type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
                <BsSearch className='nav-item fs-2 pt-1' type="submit" />
             </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
