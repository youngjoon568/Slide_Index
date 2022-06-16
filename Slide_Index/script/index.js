const $controller = document.querySelector(".controller");
const $lis = $controller.querySelectorAll("li");

function func(e, listArr, listClass) {
    if (e.className === listClass) {
        e.classList.remove(listClass);
    } else if (e.className != listClass) {
        const arr = [...listArr].filter(t => t.className == listClass);
        arr.map(t => {
            t.classList.remove(listClass);
        })
        e.classList.add(listClass);
    }
}

[...$lis].map(t => {
    t.addEventListener("click", (e) => {
        func(e.target, $lis, "on");
    })
})