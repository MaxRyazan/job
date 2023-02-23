const vostok = document.querySelectorAll('.d-vostok_point')
const siberia = document.querySelectorAll('.siberia_point')
const ural = document.querySelectorAll('.ural_point')
const nord_west = document.querySelectorAll('.nord_west_point')
const volga = document.querySelectorAll('.volga_point')
const center = document.querySelectorAll('.center_point')
const south = document.querySelectorAll('.south_point')
const moscow = document.querySelectorAll('.moscow_point')
const arrow = document.querySelector('.map__nav_arrow')
const offices = document.querySelector('.map__nav_wrapper_left')
const navigationBar = document.querySelector('.map__nav_wrapper_right')
const map = document.querySelector('.map__earth')
const officeList = document.querySelector('.map__list_wrapper')

const locations = [...vostok, ...siberia, ...ural, ...nord_west, ...volga, ...center, ...south, ...moscow]

const nav = document.querySelector('.map__nav_right_links').children

spyForClickNavigationLink()
spyForMouseMoveNavigationLink()
showMarksFromOfficeList()

for(let i = 0; i < offices.children.length; i++){
    offices.children[i].addEventListener('click', () => {
        toggleDisableNavButtons()
        reverseArrow()
        changeMapOpacity()
        toggleOfficesList()
    })
}


function toggleDisableNavButtons(){
    for(let i = 0; i < nav.length; i++){
        nav[i].classList.toggle('disabled')
    }
}

function toggleOfficesList(){
    officeList.classList.toggle('hide')
}

function spyForClickNavigationLink(){
    clearAllMarksOnMap()
    preventManyMarked()
    for(let i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', () => {
            preventManyMarked()
            clearAllMarksOnMap()
            if(!nav[i].classList.contains('disabled')){
                nav[i].style.transition = '.7s linear'
                nav[i].style.borderBottom = '3px solid rgb(163, 12, 51)'
                showMarks(nav[i])
            }
        })
    }
}

function spyForMouseMoveNavigationLink(){
    for(let i = 0; i < nav.length; i++){
        nav[i].addEventListener('mouseover', () => {
            if((nav[i].style.borderBottom === '' || nav[i].style.borderBottom === '3px solid white') && !nav[i].classList.contains('disabled')) {
                nav[i].style.transition = '1s linear'
                nav[i].style.borderBottom = '3px solid rgb(163, 12, 50)'
            }
        })
        nav[i].addEventListener('mouseout', () => {
            if(nav[i].style.borderBottom === '3px solid rgb(163, 12, 50)') {
                nav[i].style.transition = '1s linear'
                nav[i].style.borderBottom = '3px solid white'
            }
        })
    }
}

function clearAllMarksOnMap(){
    for(let i = 0; i < locations.length; i++){
        locations[i].style.display = 'none'
    }
}

function preventManyMarked(){
    for(let j = 0; j < nav.length; j++){
        if(nav[j].style.borderBottom === '3px solid rgb(163, 12, 51)' || nav[j].style.borderBottom === '3px solid rgb(163, 12, 50)'){
            nav[j].style.borderBottom = '3px solid white'
        }
    }
}

function showCities(region){
    for(let k = 0; k < region.length; k ++){
        region[k].style.display = 'block'
    }
}

function showMarks(arg){
    const param = arg.innerHTML
    switch (param) {
        case "Дальний Восток" : showCities(vostok);
            break;
        case "Сибирь" : showCities(siberia);
            break;
        case "Урал" : showCities(ural);
            break;
        case "Волга" : showCities(volga);
            break;
        case "Юг" : showCities(south);
            break;
        case "Северо-Запад" : showCities(nord_west);
            break;
        case "Центр" : showCities(center);
            break;
        case "Москва" : showCities(moscow);
            break;
        case "Все" : showCities(locations);
            break;

    }
}

function reverseArrow(){
    if(arrow.style.transform === 'rotate(180deg)'){
        arrow.style.transform = 'rotate(360deg)'
        arrow.style.top = '50%'
        arrow.style.transform = 'translate(0, -50%)'
    } else {
        arrow.style.transform = 'rotate(180deg)'
        arrow.style.top = 'calc(50% - 10px)'
    }
}

function changeMapOpacity(){
    if(!navigationBar.classList.contains('menu_shadow')){
        navigationBar.classList.toggle('menu_shadow')
        map.classList.toggle('menu_shadow')
    } else {
        navigationBar.classList.toggle('menu_shadow_remove')
        map.classList.toggle('menu_shadow_remove')
    }
}

function showMarksFromOfficeList(){
    const data = document.querySelector('.map__list').children

    for(let i = 0; i < data.length; i++ ){
        data[i].addEventListener('click', () => {
            clearAllMarksOnMap()
            spyForClickNavigationLink()
            showMarks(data[i].children[0])
            for(let j = 0; j < nav.length; j++){
                nav[i+1].style.transition = '1s linear'
                nav[i+1].style.borderBottom = '3px solid rgb(163, 12, 50)'
            }
            if(window.innerWidth > 480){
            changeMapOpacity()
            reverseArrow()
            toggleDisableNavButtons()
            toggleOfficesList()
            }
        })
    }
}