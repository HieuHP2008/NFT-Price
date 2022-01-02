var nft_box = document.querySelector('.nft-box')
var buy_button = document.querySelector('.button-19')
function random() {
    random_number = Math.floor(Math.random() * 5193)
    if (random_number <= 1000)
        nft_box.innerHTML = `<h1 class='cheap'>Price: ${random_number}$ ⭸</h1>`
    else
        nft_box.innerHTML = `<h1 class='expensive'>Price: ${random_number}$ ⭷</h1>`
}
buy_button.onclick = function () {
    alert("You don't have enought money to buy this NFT")
}
setInterval(random,5000)