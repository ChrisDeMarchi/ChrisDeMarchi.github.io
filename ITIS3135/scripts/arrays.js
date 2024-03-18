let persons = [];
let salaries = [];

window.onload = function () {
    document.getElementById("addSalaryButton").addEventListener("click", addSalary);
    document.getElementById("modifySalaryButton").addEventListener("click", modifySalary);
    document.getElementById("displayResultsButton").addEventListener("click", displayResults);
    document.getElementById("displaySalaryButton").addEventListener("click", displaySalary);

    document.getElementById("nameInput").focus();
};

function addSalary() {
    let name = document.getElementById("nameInput").value.trim();
    let salary = document.getElementById("salaryInput").value.trim();

    if (!name || !salary || isNaN(parseFloat(salary))) {
        alert("Invalid input. Please enter a valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(parseFloat(salary));

    document.getElementById("nameInput").value = "";
    document.getElementById("salaryInput").value = "";
    document.getElementById("nameInput").focus();
}

function modifySalary() {
    let select = document.getElementById("personSelect");
    let index = select.selectedIndex;
    if (index === -1) {
        alert("Please select a person.");
        return;
    }

    let newSalary = prompt("Enter the new salary for " + persons[index] + ":");
    if (!newSalary || isNaN(parseFloat(newSalary))) {
        alert("Invalid input. Please enter a valid numeric salary.");
        return;
    }

    salaries[index] = parseFloat(newSalary);
}

function displayResults() {
    if (salaries.length === 0) {
        alert("No data to display.");
        return;
    }

    let total = salaries.reduce((acc, val) => acc + val, 0);
    let average = total / salaries.length;
    let highest = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2><p>Average Salary: " + average.toFixed(2) + "</p><p>Highest Salary: " + highest.toFixed(2) + "</p>";
}

function displaySalary() {
    let resultsTable = document.getElementById("results_table");
    resultsTable.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for (let i = 0; i < persons.length; i++) {
        resultsTable.innerHTML += "<tr><td>" + persons[i] + "</td><td>" + salaries[i].toFixed(2) + "</td></tr>";
    }
}
