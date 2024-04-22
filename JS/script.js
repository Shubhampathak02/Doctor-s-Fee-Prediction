document.addEventListener("DOMContentLoaded", function () {
    const experienceInput = document.getElementById("experience");
    const experienceValue = document.getElementById("experienceValue");

    experienceInput.addEventListener("input", function () {
        experienceValue.textContent = experienceInput.value;
    });

    const predictButton = document.getElementById("predictButton");
    predictButton.addEventListener("click", function () {
        const speciality = document.getElementById("speciality").value;
        const degree = document.getElementById("degree").value;
        const experience = experienceInput.value;
        const location = document.getElementById("location").value;
        const city = document.getElementById("city").value;
        const npvotes = document.getElementById("npvotes").value;

        // Send the data to the backend for prediction
        fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                speciality,
                degree,
                experience,
                location,
                city,
                npvotes
            })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("feeValue").textContent = "₹ " + data.prediction.toFixed(2);
        });
    });
});
