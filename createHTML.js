// start with manager
const createManager = function(manager) {
    return `
        <div class="card" id="manager">
            <div class="body">
                <h3>${manager.name}}</h3>
                <h4>${manager.role}</h4>
                <p class="id">${manager.id} 34</p>
                <p class="email">Email: ${manager.email}</p>
                <p class="office-number">${manager.officeNumber}</p>
            </div>
        </div>
    `
}

const createEngineer = function (engineer) {
   return `
   <div class="card" id="engineer">
            <h3>${engineer.name}</h3>
            <h4>${engineer.role}</h4>
                <div class="body">
                    <p class="id">${engineer.id}</p>
                    <p class="email">${engineer.email}</p>
                    <p class="github">${engineer.github}</p>
            </div>
    `
}