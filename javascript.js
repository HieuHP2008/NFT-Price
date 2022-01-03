var nft_box = document.querySelector('.nft-box')
var button = document.querySelector('.buy_button')

function random() {
    random_number = Math.floor(Math.random() * 5193)
    if (random_number <= 1000)
        nft_box.innerHTML = `<h1 class='cheap'>Price: ${random_number}$ ⭸</h1>`
    else
        nft_box.innerHTML = `<h1 class='expensive'>Price: ${random_number}$ ⭷</h1>`
    button.onclick = () => {
        if (random_number <= 1200)
            alert("This NFT was bought by you")
        else 
            alert("You don't have enough money to buy this NFT")
    }
}
setInterval(random,5000)