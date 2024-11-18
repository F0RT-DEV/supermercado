//importando componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

const Login = () => {
  return (
    <div>
      <Container style={{background:"#574759", height:"100vh"}} className="justify-content-center align-content-center">
        <span style={{fontSize:"200px", color:"#ffffff"}} className="material-symbols-outlined">login</span>

        {/* caixa de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        {/* caixa da senha */}
        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button variant="light" 
        className="mt-4"
        size="lg"
        >Success</Button>
      </Container>
    </div>
  );
};

export default Login;
