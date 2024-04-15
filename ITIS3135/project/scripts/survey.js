function displayFormData(formData) {
    var main = document.querySelector("main");
    main.innerHTML = "";

    for (var pair of formData.entries()) {
        if (pair[0] === "image") {
            var img = document.createElement("img");
            img.src = URL.createObjectURL(pair[1]);
            img.style.width = "300px"; // Set width of the image
            img.style.display = "block"; // Display the image as a block element
            img.style.margin = "auto"; // Center the image
            img.style.marginBottom = "20px"; // Add some bottom margin for spacing
            main.appendChild(img);
        }
    }

    var ul = document.createElement("ul");
    for (var pair of formData.entries()) {
        if (pair[0] !== "image") {
            var li = document.createElement("li");
            li.textContent = pair[0] + ": " + pair[1];
            ul.appendChild(li);
        }
    }
    main.appendChild(ul);

    var resetLink = document.createElement("a");
    resetLink.href = "#";
    resetLink.textContent = "Reset";
    resetLink.onclick = function () {
        location.reload();
        return false;
    };
    main.appendChild(document.createElement("br"));
    main.appendChild(resetLink);
}




document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    
    if (name === "" || number === "" ||  email === "" || comments === "") {
        alert("Please fill out all fields and agree to the terms.");
    } else {
        displayFormData(new FormData(this));
    }
});

function addCourse() {
    var courseList = document.getElementById("courseList");
    var input = document.createElement("input");
    input.type = "text";
    input.name = "course[]";
    input.required = true;
    courseList.appendChild(input);
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = "Delete";
    button.onclick = function () {
        courseList.removeChild(input);
        courseList.removeChild(button);
    };
    courseList.appendChild(button);
}
