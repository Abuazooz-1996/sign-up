let par=document.querySelectorAll(".input input")
let press=document.querySelector(".press")
let first=document.querySelector(".first")
let last=document.querySelector(".last")
let email=document.querySelector(".email")
let password=document.querySelector(".password")
let first_p=document.querySelector(".firs")
let last_p=document.querySelector(".las")
let email_p=document.querySelector(".emai")
let password_p=document.querySelector(".passwor")






console.log(password)
console.log(password_p)



// enter.forEach((en)=>{
//     en.addEventListener("click",()=>{
//         console.log(en)
//     })
// })

press.addEventListener("click",()=>{
        if(first.value.trim()==""){
            first_p.classList.add("on")
            first.parentElement.style.outline="2px solid red"
            
        }
        else{
            first_p.classList.remove("on")
            first.parentElement.style.outline="none "
            

            
        }
        if(last.value.trim()==""){
            last_p.classList.add("on")
            last.parentElement.style.outline="2px solid red"
            
            
        }
        else{
            last_p.classList.remove("on")
            last.parentElement.style.outline="none "

            
        }
        if(email.value.trim()==""){
            email_p.classList.add("on")
            email.parentElement.style.outline="2px solid red"
            
        }
        else{
            if(email.value.indexOf("@")){
                email_p.classList.remove("on")
                email.parentElement.style.outline="none "
            }
            else{
                
            }
         

            
        }
        if(password.value.trim()==""){
            password_p.classList.add("on")
            password.parentElement.style.outline="2px solid red"
            
        }
        else{
            password_p.classList.remove("on")
            password.parentElement.style.outline="none "

            
        }

})