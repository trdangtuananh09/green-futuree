function showMessage() {

    alert("🌱 Cảm ơn bạn đã chung tay bảo vệ môi trường!");

}

// THỬ THÁCH SỐNG XANH

const tasks = document.querySelectorAll(".green-task");

const progressText =
    document.getElementById("progressText");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const resetButton =
    document.getElementById("resetChallenge");

const storageKey = "greenFutureTasks";

// Khôi phục trạng thái đã lưu
const savedTasks = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
);

tasks.forEach((task, index) => {
    task.checked = savedTasks[index] === true;

    task.addEventListener("change", updateProgress);
});

// Cập nhật thanh tiến độ
function updateProgress() {
    const completed = [...tasks]
        .filter(task => task.checked).length;

    const percent = Math.round(
        completed / tasks.length * 100
    );

    progressText.textContent =
        `${completed}/${tasks.length} thử thách`;

    progressPercent.textContent = percent + "%";

    progressFill.style.width = percent + "%";

    localStorage.setItem(
        storageKey,
        JSON.stringify(
            [...tasks].map(task => task.checked)
        )
    );

    if (completed === tasks.length) {
        alert("🎉 Chúc mừng! Bạn đã hoàn thành thử thách sống xanh!");
    }
}

// Đặt lại thử thách
resetButton.addEventListener("click", () => {
    tasks.forEach(task => task.checked = false);
    updateProgress();
});

updateProgress();
function commit() {

    let name = document.getElementById("name").value;

    if (name === "") {

        alert("Bạn hãy nhập tên trước nhé!");

    } else {

        alert(
            "💚 Cảm ơn " + name +
            " đã cam kết bảo vệ môi trường!"
        );

    }

}