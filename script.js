function placar(numbers) {
  let pontos = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      pontos += 1;
    } else if (numbers[i] % 2 === 1 && numbers[i] != 5) {
      pontos += 3;
    }
    if (numbers[i] === 5) {
      pontos += 5;
    }
  }

  return pontos;
}

var obj = {
  carrinho: {
    produtos: [
      {
        id: 458,
        nome: "Produto 1",
      },
      {
        id: 789,
        nome: "Produto 2",
      },
    ],
  },
};

function buscarProdutoPorId(id) {
  let valor = id.split(",").map((num) => parseInt(num.trim(), 10));

  const produtosEncontrados = valor
    .map((i) => obj.carrinho.produtos.find((produto) => produto.id === i))
    .filter((produto) => produto !== undefined);

  return produtosEncontrados;
}

function PiiRemoval(url) {
  const [urlBase, queryString] = url.split("?");

  if (!queryString) {
    return url;
  }

  const parametros = queryString.split("&");

  const parametrosNovos = parametros.map((param) => {
    const [key, value] = param.split("=");

    if (value && value.includes("@") && value.includes(".")) {
      return `${key}=pii`;
    }

    return param;
  });

  return `${urlBase}?${parametrosNovos.join("&")}`;
}
