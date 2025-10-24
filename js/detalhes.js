// Pega o ID da feira da URL
const params = new URLSearchParams(window.location.search);
const idFeira = parseInt(params.get('id'));

// Carrega o JSON
fetch('..\Feiras.json')
  .then(res => res.json())
  .then(feiras => {
    const feira = feiras.find(f => f.id === idFeira);
    const container = document.getElementById('detalhes-container');

    if (feira) {
      container.innerHTML = `
        <h1>${feira.nome}</h1>
        <p><strong>Endereço:</strong> ${feira.endereco}</p>
        <p><strong>Cidade:</strong> ${feira.cidade}</p>
        <p><strong>Horário:</strong> ${feira.horario}</p>
        <p><strong>Produtos:</strong> ${feira.produtos.join(', ')}</p>
      `;
    } else {
      container.innerHTML = "<p>Feira não encontrada!</p>";
    }
  })
  .catch(err => console.error(err));
