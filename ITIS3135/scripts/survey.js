
function displayFormData(formData) {
    var main = document.querySelector("main");
    main.innerHTML = "";
    
    for (var pair of formData.entries()) {
        if (pair[0] === "image") {
            var img = document.createElement("img");
            img.src = URL.createObjectURL(pair[1]);
            img.style.maxWidth = "100%"; // Set maximum width for the image
            img.style.display = "block"; // Display the image as a block element
            img.style.marginBottom = "20px"; // Add some bottom margin for spacing
            main.appendChild(img);
        } else {
            var p = document.createElement("p");
            p.textContent = pair[0] + ": " + pair[1];
            main.appendChild(p);
        }
    }

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
