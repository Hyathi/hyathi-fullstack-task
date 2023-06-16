import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;


//=================================================================//

// import React from 'react'
// import {Link} from 'react-router-dom';


// const Navbar = () => {
//     return (
//         <div>
//             <nav claasName="navbar navbar-expand-lg navbar-light bg-light">
//                 <div claasName="container-fluid">
//                     <Link claasName="navbar-brand" to="#">Navbar</Link>
//                     <button claasName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span claasName="navbar-toggler-icon"></span>
//                     </button>
//                     <div claasName="collapse navbar-collapse" id="navbarNav">
//                         <ul claasName="navbar-nav">
//                             <li claasName="nav-item">
//                                 <Link claasName="nav-link active" aria-current="page" to="#">Home</Link>
//                             </li>
//                             <li claasName="nav-item">
//                                 <Link claasName="nav-link" to="#">Features</Link>
//                             </li>
//                             <li claasName="nav-item">
//                                 <Link claasName="nav-link" to="#">Pricing</Link>
//                             </li>
//                             <li claasName="nav-item">
//                                 <Link claasName="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar