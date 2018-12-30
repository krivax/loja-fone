let valorInicial = 0;

const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick(){
    const $carrinho = document.querySelector('.-last');
    valorInicial += 1;

    $carrinho.textContent = "Carrinho (" + valorInicial + ")";
}
