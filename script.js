document.getElementById("btn").addEventListener("click", () => {
    let input = document.getElementById("input").value;

    const p = "<p>";
    const delIcon = '</p><div><button><i class="fa-solid fa-trash fa-xl"></i></button></div>';
    const taskNow = document.createElement("div");

    const taskNowB = document.createElement("p");
    taskNowB.innerHTML = input;
    taskNow.append(taskNowB);

    const taskNowC = document.createElement("div");

    const taskNowD = document.createElement("button");

    const taskNowE = document.createElement("i");
    taskNowE.classList.add("fa-solid");
    taskNowE.classList.add("fa-trash");
    taskNowE.classList.add("fa-xl");

    taskNowD.append(taskNowE);
    taskNowD.addEventListener("click", function () { taskNow.remove(); });
    taskNowC.append(taskNowD);
    taskNow.append(taskNowC);

    document.getElementById("parent").append(taskNow);
})



document.getElementById("todoListByTidyCoder").addEventListener("keypress", (event) => {

    if (event.key == "Enter") {
        let input = document.getElementById("input").value;

        const p = "<p>";
        const delIcon = '</p><div><button><i class="fa-solid fa-trash fa-xl"></i></button></div>';
        const taskNow = document.createElement("div");

        const taskNowB = document.createElement("p");
        taskNowB.innerHTML = input;
        taskNow.append(taskNowB);

        const taskNowC = document.createElement("div");

        const taskNowD = document.createElement("button");

        const taskNowE = document.createElement("i");
        taskNowE.classList.add("fa-solid");
        taskNowE.classList.add("fa-trash");
        taskNowE.classList.add("fa-xl");

        taskNowD.append(taskNowE);
        taskNowD.addEventListener("click", function () { taskNow.remove(); });
        taskNowC.append(taskNowD);
        taskNow.append(taskNowC);

        document.getElementById("parent").append(taskNow);
    }

})
