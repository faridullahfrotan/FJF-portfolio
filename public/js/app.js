const moonBtn = document.querySelector('#moon-btn')
const sunBtn = document.querySelector('#sun-btn')
const mobileBar = document.querySelector("#bar-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const xBtn = document.querySelector("#x-btn");
let serviceBox = document.querySelector('#services-box')
let mobileNavItem = document.querySelectorAll('.mobile-nav-item')
console.log(mobileNavItem)

let scrollAmount = document.querySelector('.status_inner')
function scrollHandler() {
  let scrollTop = window.scrollY
  let totalHeight = document.body.clientHeight
  let windowHeight = window.innerHeight
  let scrollPercentage = scrollTop/(totalHeight-windowHeight)
  let scrollPercentageRounded = Math.round(scrollPercentage*100) + '%'
  if (scrollTop > 0) {
    scrollAmount.style.width = scrollPercentageRounded
  } else {
    scrollAmount.style.width = "0"
  }
}

// dark and light mode handler 

if(localStorage.getItem('theme')==="dark"){
  document.documentElement.classList.add('dark')
    moonBtn.classList.add('hidden')
    sunBtn.classList.remove('hidden')
}

function darkMode(){
  if(localStorage.getItem('theme')==="dark"){
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
    moonBtn.classList.remove('hidden')
    sunBtn.classList.add('hidden')
  }else{
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme','dark')
    moonBtn.classList.add('hidden')
    sunBtn.classList.remove('hidden')
  }
}
moonBtn.addEventListener('click', darkMode)
sunBtn.addEventListener('click', darkMode)

let services = [
  { id: 1, scr: './public/image/s1.jpg', title: "FrontEnd Development", details: "I design clean and user-friendly interfaces focused on great user experience." },
  { id: 2, scr: './public/image/s2.jpg', title: "UI/UX Design", details: "I design clean and user-friendly interfaces focused on great user experience." },
  { id: 3, scr: './public/image/s3.png', title: "Responsive Design", details: "I make websites look perfect on mobile, tablet, and desktop devices." },
  { id: 6, scr: './public/image/s6.jpg', title: "Website Optimization", details: "I improve website speed, performance, and SEO for better results." },
  { id: 4, scr: './public/image/s4.jpg', title: "Portfolio & landing pages", details: "I create attractive portfolio and landing pages for personal and business use." },
  { id: 5, scr: './public/image/s5.png', title: "Bug Fixing & Maintenance", details: "I fix website issues and keep your site updated and running smoothly." },
]

function openMobileMenu(){
  mobileMenu.classList.remove("hidden");
  mobileBar.classList.add("hide");
  xBtn.classList.remove("hide");
}
function closeMobileMenu(){
  mobileMenu.classList.add("hidden");
  mobileBar.classList.remove("hide");
  xBtn.classList.add("hide");
}

mobileNavItem.forEach( item => {
  item.addEventListener('click', ()=>{
    closeMobileMenu()
  })
})

mobileBar.addEventListener('click',openMobileMenu)
xBtn.addEventListener("click", closeMobileMenu);
services.forEach((service) => {
  serviceBox.insertAdjacentHTML('beforeend', `
              <div class="w-full md:w-[48%] lg:w-[32%] border-t-3 bg-white dark:bg-slate-900 border-indigo-500 mt-3 shadow-xl rounded-lg px-5 py-2 space-y-3 hover:scale-105 trans">
            <img class="w-[4.5rem] rounded-full border-2 border-indigo-500 mt-3" src="${service.scr}" alt="">
            <h2 class="text-xl text-black dark:text-white font-bold">${service.title}</h2>
            <p class="text-gray-500 text-base">${service.details}</p>
            <a class="text-lg font-bold text-indigo-600" href="#">Read more</a>
          </div>
    `)
})



