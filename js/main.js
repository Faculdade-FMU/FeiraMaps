const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");

document.addEventListener("DOMContentLoaded", () => {
  btn.style.display = "none";

  // Mostra o botão "Procurar" somente quando o input não está vazio
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Pills Feiras/ Eventos
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', function () {
      document.querySelectorAll('.pill').forEach(p => {
        p.classList.remove('pill--active');
        p.setAttribute('aria-selected', 'false');
      });
      this.classList.add('pill--active');
      this.setAttribute('aria-selected', 'true');
    });
  });

  // Atualiza ano no rodapé
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

});

const buttons = document.querySelectorAll('.btn-search');
const iframe = document.getElementById('mapFrame');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Pega o card correspondente
    const card = this.closest('.card');
    const addressElement = card.querySelector('.endereco');

    const cep = addressElement.dataset.cep || '';
    const enderecoTexto = addressElement.textContent.trim();

    // Combina endereço + CEP
    let searchQuery = enderecoTexto;
    if (cep) searchQuery += ` - ${cep}`;

    if (searchQuery === '') {
      alert('Erro ao localizar endereço');
      return;
    }

    console.log("Consulta no Maps:", searchQuery);

    // Atualiza o mapa
    const query = encodeURIComponent(searchQuery);
    iframe.src = `https://www.google.com/maps?q=${query}&output=embed`;
  });
});

document.querySelectorAll(".btn-detalhes").forEach(botao => {
  botao.addEventListener("click", function() {
    window.location.href = "detalhes.html";
  });
});
