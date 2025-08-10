const input = document.querySelector("input");
const warning = document.querySelector(".warning");
const form = document.querySelector("form");
const trash = document.querySelector(".trash");
const warningDelete = document.querySelector(".delete");
const list = document.querySelector("ul");

// ao clicar no botão submit
form.onsubmit = (event) => {
  event.preventDefault();

  const valor = input.value.trim();

  if (valor) {
    // cria o <li>
    const li = document.createElement("li");

    // cria a div.checkbox-wrapper
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper");

    // cria a div.checkbox-image
    const checkboxImage = document.createElement("div");
    checkboxImage.classList.add("checkbox-image");

    // cria o input type=checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // adiciona imagem e input no wrapper
    checkboxWrapper.appendChild(checkboxImage);
    checkboxWrapper.appendChild(checkbox);

    // cria o texto do item
    const texto = document.createTextNode(valor);

    // cria o ícone de lixeira
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("trash");

    // evento para excluir o item
    trashIcon.addEventListener("click", () => {
      li.remove();
      // adicionando aviso
      warning.classList.remove("invisible");
    });

    // monta a estrutura final
    li.appendChild(checkboxWrapper);
    li.appendChild(texto);
    li.appendChild(trashIcon);

    // adiciona na lista
    list.appendChild(li);

    // limpa o input
    input.value = "";
  } else {
    alert("Erro ao adicionar item");
  }
};

// removendo aviso
warningDelete.addEventListener("click", () => {
  warning.classList.add("invisible");
});
