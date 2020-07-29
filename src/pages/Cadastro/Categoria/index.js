import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [campos, setCampos] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      campos,
    ]);

    setCampos(valoresIniciais);
  }
  
  function setValor(chave, valor) {
    setCampos({
      ...campos,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValor(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {campos.nome}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={campos.nome}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="descricao">
            Descrição da Categoria
            <textarea
              name="descricao"
              value={campos.descricao}
              onChange={handleChange}
            />
          </label>  
        </div>

        <FormField
          label="Cor da Categoria:"
          type="color"
          name="cor"
          value={campos.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
