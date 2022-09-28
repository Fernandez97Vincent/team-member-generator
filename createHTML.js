// start with manager
const createManager = function(Manager) {
    return `
        <div class="card" id="manager">
            <div class="body">
                <h3>${Manager.name}}</h3>
                <h4>${Manager.role}</h4>
                <p class="id">${Manager.id} 34</p>
                <p class="email">Email: ${Manager.email}</p>
                <p class="office-number">${Manager.officeNumber}</p>
            </div>
        </div>
    `
}

const createEngineer = function (Engineer) {
   return `
   <div class="card" id="engineer">
            <h3>${Engineer.name}</h3>
            <h4>${Engineer.role}</h4>
                <div class="body">
                    <p class="id">${Engineer.id}</p>
                    <p class="email">${Engineer.email}</p>
                    <p class="github">${Engineer.github}</p>
            </div>
    `
}

createHTML = (data) => {
    memberArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            memberArray.push(engineerCard);
        }
    }

    const employeeCards = memberArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Team Members</h1>
    </header>

    <div class="card-container">
        <div class="card" id="manager">
            <div class="body">
                ${employeeCards}
            </div>
        </div>
        </div>
</body>
<script src="index.js"></script>
</html>
    `
}

module.exports = createHTML;