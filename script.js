function updateDiv() {
    // Obtém o valor do input
    const inputValue = document.getElementById('myInput').value;
  
    // Cria um novo elemento script para carregar o conteúdo da página 2
    const script = document.createElement('script');
    script.src = 'output.html'; // Substitua por seu caminho real
  
    // Adiciona o script ao corpo da página
    document.body.appendChild(script);
  
    // Quando o script for carregado, busca o div e atualiza o conteúdo
    script.onload = () => {
      const div = document.getElementById('myDiv');
      div.textContent = inputValue;
    };
  }