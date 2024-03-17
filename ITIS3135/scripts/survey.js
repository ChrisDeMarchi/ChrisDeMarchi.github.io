// Function to display form data
function displayFormData(formData) {
    var introContent = document.createElement("ul");
    for (var pair of formData.entries()) {
        var li = document.createElement("li");
        li.textContent = pair[0] + ": " + pair[1];
        introContent.appendChild(li);
    }
    var main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(introContent);
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

// Prevent form submission without necessary information
document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var mascot = document.getElementById("mascot").value;
    var image = document.getElementById("image").files[0];
    var imageCaption = document.getElementById("imageCaption").value;
    var personalBackground = document.getElementById("personalBackground").value;
    var professionalBackground = document.getElementById("professionalBackground").value;
    var academicBackground = document.getElementById("academicBackground").value;
    var webDevBackground = document.getElementById("webDevBackground").value;
    var primaryComputer = document.getElementById("primaryComputer").value;
    var courses = document.getElementsByName("course[]");
    var agree = document.getElementById("agree").checked;

    if (name === "" || mascot === "" || image === undefined || imageCaption === "" || personalBackground === "" || professionalBackground === "" || academicBackground === "" || webDevBackground === "" || primaryComputer === "" || courses.length === 0 || !agree) {
        alert("Please fill out all fields and agree to the terms.");
    } else {
        displayFormData(new FormData(this));
    }
});

// Add new course text boxes
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
