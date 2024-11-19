import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (propos) => {
  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem"}}>
        {/* imagem do card */}
        <Card.Img variant="top" src={propos.imagemUrl} height="200px" />

        <Card.Body>
          <Card.Title>{propos.nome}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            Preço: {propos.preco}
          </Card.Subtitle>

          <Card.Text>
            <b>Descrição:</b>
            <br></br> {propos.descricao}
          </Card.Text>

          <Card.Text>
            <b>Categoria:</b>
            <br></br> {propos.categoria}
          </Card.Text>

            <Card.Link href="/login">
            <Button variant="success">Comprar</Button>
            </Card.Link>
          <Card.Link href="/login">
          <Button variant="danger">Excluir</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
