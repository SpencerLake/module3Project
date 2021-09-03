const crownBurger = ('Crown Burgers, 118 N 300 W, Salt Lake City, UT 84103')
const diversion = ('Diversion Social Eatery, 535 N 300 W H-104, Salt Lake City, UT 84103')
const california = ("California Burgers & Deli, 306 N 300 W, Salt Lake City, UT 84103")
const handleBar = ("HandleBar, 751 N 300 W, Salt Lake City, UT 84111")
const avenuesProper = ("Avenues Proper, 376 8th Ave, Salt Lake City, UT 84103")

let restList = [crownBurger, diversion, california, handleBar, avenuesProper]

//========================================================================================================

function randmRstrnt(event) {
    event.preventDefault()

    let rndm = Math.floor(Math.random() * restList.length)

    alert(restList[rndm])
}

let resturant = document.querySelector('#restraunt')

resturant.addEventListener('click', randmRstrnt)

//========================================================================================================

const memoryGrove = ('Memory Gorve Park, 300 N Canyon Rd, Salt Lake City, UT 84103')
const warmSprings = ('Warm Springs Park, 840 N 300 W, Salt Lake City, UT 84103')
const ensignDowns = ('Ensign Downs Park, Salt Lake City, UT 84103')
const cityCreek = ('City Creek Natural Area, 375 120 E, Salt Lake City, UT 84103')

let parkList = [memoryGrove, warmSprings, ensignDowns, cityCreek]


//========================================================================================================


function randmPark(event){
    event.preventDefault()

    let rndm = Math.floor(Math.random() * parkList.length)
    
    alert(parkList[rndm])
}

let park = document.querySelector('#park')

park.addEventListener('click', randmPark)