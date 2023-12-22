const questions = document.querySelectorAll(".question");

questions.forEach( question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
        const plus = question.querySelector(".plusShow");
        const minus = question.querySelector(".minusHide");
        const ans = question.nextElementSibling;

        if (ans.style.maxHeight) {
            ans.style.maxHeight = null;
            plus.style.display = "block";
            minus.style.display = "none";
        } else {
            ans.style.maxHeight = ans.scrollHeight + "px";
            plus.style.display = "none";
            minus.style.display = "block";
        }
    });
});