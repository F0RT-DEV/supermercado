// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  //Variáveis pra guardar as informações digitadas pelo usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");


  const UsandoCoisas = [
  { id: 1, name:"DougraS", email:"DougrasFBi@gmail.com", senha:"123"},
  { id: 2, name:"ForT", email:"ForToLev@gmail.com", senha:"456"}
  ]

  //criando o navigate
  const navigate = useNavigate()

  //função para gardar na memoria do navegador as informações do usuario
  const gravarLocalStorage =(usuario) => {
    localStorage.setItem('userName', usuario.nome) 
    localStorage.setItem('email', usuario.email)
  }

  //função pra trata os dados do login
  const handleLogin = async (e) => {
    e.preventDefault(); //impede o envio padrão do formulario(quando vc clica em login a pagina recarrega podendo perde os dados, ai que entra a função preventDefault())


    //verificando se ha aquele usuario digitado na lista
    const userToFind = UsandoCoisas.find(
      (user) => user.email === email
    )
    if(email !== ""){
      if(senha !== ""){
        if(userToFind !== undefined && userToFind.senha === senha){
          gravarLocalStorage(userToFind)
          setAlertClass("mb-3 mt-2");
          setAlertVariant("success")
          setAlertMensagem("Login realizado com sucesso");
          alert("Login efetuado com sucesso");
          navigate("/home")
        }else{
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("Usuario ou senha inválido");
        }
      }else{
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("Preencha o campo Senha!");
      }
    }else{
      setAlertClass("mb-4");
      setAlertMensagem("Preencha o campo de e-mail!");
    }
  }

  return (
    <div>
      <Container
        style={{ background: "dodgerblue", height: "100vh" }}
        className="justify-content-center align-content-center"
      >
        {/* Icone de login */}
        <span
          style={{ fontSize: "200px", color: "white" }}
          className="material-symbols-outlined"
        >
          login
        </span>
        <Form style={{width:"75%", margin:"auto"}} onSubmit={handleLogin}>
        {/* Caixinha de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FloatingLabel>

        {/* Caixinha de senha */}
        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </FloatingLabel>

        {/* Alerta caso haja erro */}
        <Alert variant={alertVariant} className={alertClass}>
          {alertMensagem}
        </Alert>

        {/* Botao pra enviar o formulário */}
        <Button variant="light" type="submit" className="mt-4" size="lg">
          Login
        </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
