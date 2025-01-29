import fs from 'fs';

const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

export default generateRandomNumber;

export function saveToJSONFile(data) {
    const filePath = './users.json';

    let users = [];
    if (fs.existsSync(filePath)) {
        const existingData = fs.readFileSync(filePath, 'utf-8');
        users = JSON.parse(existingData);
    }

    users.push(data);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf-8');
    console.log(`Data saved to ${filePath}`);
}

export function getAllUsersByRole(role) {
    try {
        const data = fs.readFileSync('./users.json', 'utf-8');
        const users = JSON.parse(data);
        
        return users.filter(user => user.role === role);
    } catch (error) {
        console.error("Error reading users.json:", error.message);
        return [];
    }
}