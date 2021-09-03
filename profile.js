function clrbtn(event){
    event.preventDefault()

    alert('Chestnut brown')
}

let color = document.querySelector('#color')

color.addEventListener('click', clrbtn)

//==============================================================================================================

function plcbtn(event){
    event.preventDefault()

    alert('Northern Italy')
}

let place = document.querySelector('#place')

place.addEventListener('click', plcbtn)

//==============================================================================================================


function ritualbtn(event){
    event.preventDefault()

    alert('Late night burrito runs')
}

let ritual = document.querySelector('#ritual')

ritual.addEventListener('click', ritualbtn)