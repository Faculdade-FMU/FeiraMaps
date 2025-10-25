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

// Script para favoritar feira
document.querySelectorAll('.favorito').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('ativo');
  });
});

// Máscara CEP
var cep = document.getElementById('cep');
var cepMask = IMask(cep, { mask: '00000-000' });

// Máscara Telefone
var contato = document.getElementById('contato');
var contatoMask = IMask(contato, { mask: '(00) 00000-0000' });
