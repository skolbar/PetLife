var elementsDuvida = document.querySelectorAll(".duvida");

elementsDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});
