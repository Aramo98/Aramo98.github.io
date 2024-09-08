
// for navbar buttons

const linkBtn = document.querySelectorAll(".linkBtn");
linkBtn.forEach((button)=>{
    button.addEventListener("click",()=>{
        linkBtn.forEach((btn)=>{
                btn.classList.remove("active")
           
        })
        button.classList.add("active")
    })
})


// for Light darkt heme

const toggle = document.querySelector(".toggle")
const circle = document.querySelector(".circle")
const header = document.querySelector("header")
const section = document.querySelectorAll("section")
const LS = localStorage

toggle.addEventListener("click",()=>{
    if (LS.getItem("mood") === "light") {
        LS.removeItem("mood")
    }else{
        LS.setItem("mood","light")
    }

    actionToggleButton()
})


function actionToggleButton(){
if (LS.getItem("mood") === "light") {
    circle.classList.add("light")
    header.classList.add("light")
    section.forEach((item)=>{
        item.classList.add("light")
    })

}else{
    circle.classList.remove("light");
    header.classList.remove("light")
    section.forEach((item)=>{
        item.classList.remove("light")
    })
}
}

actionToggleButton()



// skills open


const toggleBtn = document.querySelectorAll(".toggleBtn")
const SkillsBox = document.querySelectorAll(".SkillsBox");

toggleBtn.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        toggleBtn.forEach((btn,i)=>{
            btn.classList.remove("active")
            SkillsBox[i].classList.remove("active")
        })
        button.classList.add("active");
        SkillsBox[index].classList.add("active")
    })
})

// navbar open and close

const navBtn = document.querySelector(".navBtn")
const slider = document.querySelector(".slider")


navBtn.addEventListener("click",()=>{
    slider.classList.toggle("open")
    header.classList.toggle("open")
})