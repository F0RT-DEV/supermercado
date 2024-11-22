import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navbarra = () => {
  const usuarioNome = localStorage.getItem("userName")
  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <span className="material-symbols-outlined" style={{fontSize:"40px", color:"white"}}> 
            store
          </span>

          <Navbar.Brand href="/home">Super&Fort</Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">

          {/* Paginas */}
          <Nav className="me-auto">
            <Nav.Link className="active" href="/Produtos">Produtos</Nav.Link>
            <Nav.Link  href="/produto/cadastrar">Cadastros</Nav.Link>
          </Nav>

          {/* sair */}
          <Nav className="justify-content-end">
            <Nav.Text style={{color:"white"}}>
              {/* Usuário:{usuarioNome} */}
            </Nav.Text>
            <Nav.Link href="/Login">Sair</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarra;
