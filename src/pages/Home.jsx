import React from "react";
import CardProduto from "../components/CardProduto";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Carne",
      preco: 99.99,
      descricao: "E uma carne para carnivoro",
      categoria: "Carnívoro",
      imagemUrl:
        "https://i0.wp.com/www.sindicatoruraldebelavista.com.br/wp-content/uploads/2016/10/carne-vermelha-450x324-1.jpg?fit=450%2C324&ssl=1",
    },

    {
      id: 2,
      nome: "Ovo",
      preco: 19.99,
      descricao: "E um ovo de uma galinha",
      categoria: "Galinha",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAFYeuYQREUgjSPH9YV3xAwRSd-odU_uwIA&s",
    },

    {
      id: 3,
      nome: "Lagosta",
      preco: 39.71,
      descricao: "E uma Lagosta, eu acho!",
      categoria: "Peixe-lagosta",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeOCm-nNLhr7eHb5fdtx0-WqZ_YnPhN31Yg&s",
    },
    {
      id: 3,
      nome: "Lagosta",
      preco: 39.71,
      descricao: "E uma Lagosta, eu acho!",
      categoria: "Peixe-lagosta",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeOCm-nNLhr7eHb5fdtx0-WqZ_YnPhN31Yg&s",
    },
    {
      id: 3,
      nome: "Lagosta",
      preco: 39.71,
      descricao: "E uma Lagosta, eu acho!",
      categoria: "Peixe-lagosta",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeOCm-nNLhr7eHb5fdtx0-WqZ_YnPhN31Yg&s",
    },
    {
      id: 3,
      nome: "Lagosta",
      preco: 39.71,
      descricao: "E uma Lagosta, eu acho!",
      categoria: "Peixe-lagosta",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeOCm-nNLhr7eHb5fdtx0-WqZ_YnPhN31Yg&s",
    },
    {
      id: 3,
      nome: "Lagosta",
      preco: 39.71,
      descricao: "E uma Lagosta, eu acho!",
      categoria: "Peixe-lagosta",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeOCm-nNLhr7eHb5fdtx0-WqZ_YnPhN31Yg&s",
    },
    
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Container>
      <div
        className="lista-produto d-flex col-12 gap-2 mt-2 justify-content-center flex-wrap">
       
        <CardProduto
          id="1"
          nome="Carne"
          preco="99,99"
          descricao="E uma carne para carnivoro"
          categoria="Carnívoro"
          imagemUrl="https://i0.wp.com/www.sindicatoruraldebelavista.com.br/wp-content/uploads/2016/10/carne-vermelha-450x324-1.jpg?fit=450%2C324&ssl=1"/>

        {produtos.map((prod)=>
          <CardProduto 
          id={prod.id}
          nome={prod.nome} 
          preco={prod.preco} 
          descricao={prod.descricao}
          categoria={prod.categoria}
          imagemUrl={prod.imagemUrl}
          />
        )}
        
      </div>
      </Container>
    </div>
  );
};

export default Home;
