const screen = document.querySelector(".screen-container");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnClick = btn.textContent;

        if(btn.id === "btn-c"){
            screen.textContent = "0";
            return;
        }

        if(btn.id === "btn-delete"){
            if(screen.textContent.length === 1 || screen.textContent === "Error!"){
                screen.textContent = "0";
            }
            else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if(btn.id ==="btn-equal"){
            try{
                screen.textContent = eval(screen.textContent);
            }catch{
                screen.textContent = "Error!";
            }
            return;
        }

        if(screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnClick;
        }else{
            screen.textContent += btnClick;
        }

    })
})