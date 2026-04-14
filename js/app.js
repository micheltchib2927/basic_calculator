let buttons_list = document.querySelectorAll(".btn")
let text_box_content = document.querySelector(".text-box").firstElementChild

buttons_list.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.type === "number" || button.dataset.type === "operator"){
            text_box_content.textContent = text_box_content.textContent + button.firstElementChild.textContent
        }
        else if (button.dataset.type === "equal_sign"){
            try{
                text_box_content.textContent = eval(text_box_content.textContent)
            }catch(e){
                text_box_content.textContent = "ERROR"
            }
        }
        else if (button.dataset.type === "cleaner"){
            text_box_content.textContent = ""
        }
        else{
            text_box_content.textContent = text_box_content.textContent.slice(0, -1)
        }
    })
});