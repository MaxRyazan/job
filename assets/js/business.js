const cards = document.querySelectorAll('.business_cards_item')




for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', () => {
        watchThatOpenedCardIsUnique()
        cards[i].style.transition = '.5s'
        cards[i].style.height = '240px'
    })
}

function watchThatOpenedCardIsUnique(){
    for(let i = 0; i < cards.length; i++){
        cards[i].style.height = '60px'
    }
}