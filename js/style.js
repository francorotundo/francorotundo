// ------- menu responsive -------
const openM = document.getElementById("openMenu");
const closeM = document.getElementById("closeMenu");
var sidemenu = document.getElementById("sidemenu");

openM.addEventListener("click", openmenu);
function openmenu(){
    sidemenu.style.right="0";
}

closeM.addEventListener("click", closemenu);
function closemenu(){
    sidemenu.style.right = "-150px";
}

// ------- section skills and education ----------
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab (tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// -------- Conf with google sheet----------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzCxzhxYx3O_jMx5ZFQi3mpUAJV_u1rkaUGFt5mEHAQ9bjXNcp5ST3RatEnsowMrgIX5Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

// -----------------

addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section")
    const menuitem = document.querySelectorAll(".menu_item")

    const functionObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const itemActual = Array.from(menuitem).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add("active")
                for (const item of menuitem) {
                    if (item != itemActual) {
                        item.classList.remove("active")
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(functionObserver, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    })

    sections.forEach(section => observer.observe(section))
})

