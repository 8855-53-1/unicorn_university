const readline = require('readline');

// Create interface for reading user input from console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrays of first names (male and female) and surnames
const firstNamesMale = [
    "Vratislav", "Jiří", "Petr", "Tomáš", "Lukáš", "Ondřej", "Jan", "Karel", "Miroslav", "Radek",
    "Martin", "David", "Jakub", "Josef", "Filip", "Šimon", "Daniel", "Václav", "Milan", "Aleš",
    "Bohumil", "Zdeněk", "Ivan", "Marek", "Jindřich", "Eduard", "Adam", "Emil", "Vojtěch", "Ladislav"
];
const firstNamesFemale = [
    "Jiřina", "Eva", "Marie", "Hana", "Lucie", "Petra", "Anna", "Barbora", "Veronika", "Kateřina",
    "Alena", "Martina", "Lenka", "Kristýna", "Zuzana", "Monika", "Nikola", "Eliška", "Tereza", "Karolína",
    "Simona", "Jana", "Helena", "Dagmar", "Gabriela", "Ivana", "Andrea", "Blanka", "Renata", "Michaela"
];
const surnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Kříž",
    "Beneš", "Fiala", "Kopecký", "Král", "Hruška", "Polák", "Malý", "Sedláček", "Zeman", "Kolář",
    "Urban", "Vávra", "Mach", "Šimek", "Růžička", "Bartoš", "Vlček", "Bureš", "Havlíček", "Straka"
];
const workloads = [10, 20, 30, 40];

// Function to get a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random birthdate within the given age range
function getRandomBirthdate(minAge, maxAge) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1;
    return new Date(Date.UTC(birthYear, birthMonth, birthDay)).toISOString();
}

// Main function to generate employees
function main(dtoIn) {
    const employees = [];
    for (let i = 0; i < dtoIn.count; i++) {
        // Randomly determine gender
        const gender = Math.random() < 0.5 ? "male" : "female";
        // Select a random name based on gender
        const name = gender === "male" ? getRandomItem(firstNamesMale) : getRandomItem(firstNamesFemale);
        // Select a random surname
        const surname = getRandomItem(surnames);
        // Generate a random birthdate within the specified age range
        const birthdate = getRandomBirthdate(dtoIn.age.min, dtoIn.age.max);
        // Assign a random workload
        const workload = getRandomItem(workloads);

        // Add the employee to the list
        employees.push({
            gender,
            birthdate,
            name,
            surname,
            workload
        });
    }
    return employees;
}

// Get user input from console
rl.question('Enter the number of employees: ', (count) => {
    rl.question('Enter the minimum age: ', (minAge) => {
        rl.question('Enter the maximum age: ', (maxAge) => {
            // Parse user input and create dtoIn object
            const dtoIn = {
                count: parseInt(count, 10),
                age: {
                    min: parseInt(minAge, 10),
                    max: parseInt(maxAge, 10)
                }
            };
            
            // Generate and display the employee list
            console.log(main(dtoIn));
            rl.close();
        });
    });
});
