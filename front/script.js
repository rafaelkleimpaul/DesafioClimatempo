const btn = document.querySelector("#enviar");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const cidade = document.querySelector("#cidade");

  const value = cidade.value;

  alert(value);

  function salvar() {
    let texto = document.getElementById("cidade").value;
    let titulo = document.getElementById("cidade").value;
    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    saveAs(blob, titulo + ".txt");
  }
});
