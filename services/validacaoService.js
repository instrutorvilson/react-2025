export function validarDados(nome, idade) {
  if (!nome || nome.trim() === '') {
    return {
      valido: false,
      mensagem: 'Informe o nome'
    };
  }

  if (!idade || idade.trim() === '') {
    return {
      valido: false,
      mensagem: 'Informe a idade'
    };
  }

  const idadeNumero = Number(idade);

  if (isNaN(idadeNumero) || idadeNumero < 0) {
    return {
      valido: false,
      mensagem: 'Idade inválida'
    };
  }

  return {
    valido: true,
    idade: idadeNumero
  };
}
