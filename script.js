document.querySelector(".result").addEventListener("click", () => {
    // let current = document.querySelector(".current").value;
    // let currentValue = parseFloat(current);
    let currentValue = 0;

    let destination = document.querySelector(".distination").value;
    let destinationValue = parseFloat(destination);

    let total = currentValue + destinationValue;
    if (total > 0 && total <= 5) {
        alert('you will be charged of : 15 rupees')
    }
    else if (total > 5 && total <= 10) {
        alert('you will be charged of : 20 rupees')
    }
    else if (total > 10 && total <= 15) {
        alert('you will be charged of : 25 rupees')
    }
    else if (total > 15 && total <= 20) {
        alert('you will be charged of : 30 rupees')
    }
    else if (total > 20 && total <= 25) {
        alert('you will be charged of : 35 rupees')
    }
    else if (total > 25 && total <= 30) {
        alert('you will be charged of : 40 rupees')
    }
    else if (total > 30 && total <= 35) {
        alert('you will be charged of : 45 rupees')
    }
    else if (total > 35 && total <= 40) {
        alert('you will be charged of : 50 rupees')
    }
    else {
        alert("you will charged of : 55 rupees")
    }

});








