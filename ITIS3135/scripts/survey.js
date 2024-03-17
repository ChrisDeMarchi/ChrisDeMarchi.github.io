// Function to display form data
function displayFormData(formData) {
    var introContent = document.createElement("div");
    for (var pair of formData.entries()) {
        var p = document.createElement("p");
        p.textContent = pair[0] + ": " + pair[1];
        if (pair[0] === "image") {
            var img = document.createElement("img");
            img.src = URL.createObjectURL(pair[1]);
            img.style.maxWidth = "300px"; // Set maximum width for the image
            introContent.appendChild(img);
        } else {
            introContent.appendChild(p);
        }
    }
    var main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(introContent);
    var resetLink = document.createElement("a");
    resetLink.href = "#";
    resetLink.textContent = "Reset";
    resetLink.onclick = function () {
        main.innerHTML = "";
        main.appendChild(document.getElementById("introForm"));
        document.getElementById("introForm").reset();
        return false;
    };
    main.appendChild(document.createElement("br"));
    main.appendChild(resetLink);
}

// Prevent form submission without necessary information
document.getElementById("introForm").addEventListener("submit", function(event) {
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
        event.preventDefault();
        alert("Please fill out all fields and agree to the terms.");
    } else {
        displayFormData(new FormData(this));
    }
});

// Reset the form
document.getElementById("resetBtn").addEventListener("click", function(event) {
    var main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(document.getElementById("introForm"));
    document.getElementById("introForm").reset();
});
