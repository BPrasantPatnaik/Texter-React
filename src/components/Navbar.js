import PropTypes from 'prop-types';
  import { Link } from 'react-router-dom/cjs/react-router-dom.min';
  export default function Navbar(props) {
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
            <Link className="nav-a active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/about">{props.about}</Link>
          </li>
          <li className="nav-item dropdown" />
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
      </div>
    )
  }

  Navbar.propTypes = {
      title : PropTypes.string,
      about : PropTypes.string
  }

  Navbar.defaultProps ={
    title : "Title",
    about : "About line"
  }
