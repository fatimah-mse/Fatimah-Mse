// Access To Elements 
let navLinks = document.querySelectorAll('.nav-link')
var numbers = document.getElementById('numbers')
let num = document.querySelectorAll('.num')
let preloader = document.querySelector('#preloader')
let started = false

// NavLinks Border Bottom and close ul after Select a Link
navLinks.forEach(element => {
    element.addEventListener('click', function() {
        var navBar = document.querySelector('.navbar-collapse')
        navBar.classList.remove('show')

        navLinks.forEach(e => e.classList.remove('active'))
        this.classList.add('active')
    })
})

// Change Navbar Background Color
window.addEventListener('scroll',() =>{

    var navbar = document.querySelector('.navbar')
    var progress = document.querySelector('#about-desc')
    var spans = document.querySelectorAll('.progress-span')
    
    window.scrollY > 50 ? up.classList.add('show') : up.classList.remove('show') 

    window.scrollY > 50 ?  navbar.classList.add('scroll') : navbar.classList.remove('scroll')

    {if (window.scrollY >= progress.offsetTop - 150) {
        spans.forEach((e) => {
            e.style.width = e.dataset.width
        })
    }
    else {
        spans.forEach((e) => {
            e.style.width = '0'
        })
    }}

    if (window.scrollY >= numbers.offsetTop - 500) {
        if (!started) {
            num.forEach(num => counter(num))
        }
        started = true
    }

}) 

// Scroll To Top
function Top () {
window.scrollTo({
    top: 0,
    behavior: "smooth"
})
}

// Animation With AOS Library
window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false })
})

// Animation With Typed JS Library
let typed = new Typed('.auto-type' ,
    {
        strings: ["Fatimah Mselmani" , "Software Engineering" , "WEB Developer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    }) 

// Show Portfolio
const filterList = document.querySelector(".filter")
const filterButtons = filterList.querySelectorAll(".filter-btn")
const conferences = document.querySelectorAll(".conference")

let conferenceIndex = 0
AOS.init()

conferences.forEach((conference) => {
  conference.style.viewTransitionName = `conf-${++conferenceIndex}`
})

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let confCategory = e.target.getAttribute("data-filter")

    if (!document.startViewTransition) {
      updateActiveButton(e.target)
      filterEvents(confCategory)
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target)
      filterEvents(confCategory)
      AOS.refresh()
    })
  })
})

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active")
  newButton.classList.add("active")
}

function filterEvents(filter) {
  conferences.forEach((conference) => {
    let eventCategory = conference.getAttribute("data-category")
    if (filter === "all" || filter === eventCategory) {
      conference.removeAttribute("hidden")
    } else {
      conference.setAttribute("hidden", "")
    }
  })
}
// Increase Number
function counter(obj) {
    var goal = obj.dataset.number
    var count = setInterval( () => {
        obj.textContent++
        if (obj.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal )
}


// Preloader
if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  })
  }