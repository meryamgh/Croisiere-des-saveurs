import {User} from "../models/user.model";
import {faker} from "@faker-js/faker";


export const users: User[] = [];

const generateRandomUser = () => {
    const user:User = {
        nom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        email: faker.internet.email(),
        password: "test123",
        highScore: Math.floor(Math.random() * 14) + 1,
    };

    return user;
};

const generateRandomUsers = (count:number) => {
    const randomUsers:User[] = [];
    for (let i:number = 0; i < count; i++) {
        const user:User = generateRandomUser();
        randomUsers.push(user);
    }
    return randomUsers;
};


users.push(...generateRandomUsers(20).map(userData => new User(userData.nom, userData.prenom, userData.email, userData.password,userData.highScore)));

users.push(
    new User('Dupont', 'John', 'john@example.com', 'test123',9),
    new User('Smith', 'Alice', 'alice@example.com', 'test123',3),
    new User('Johnson', 'Michael', 'michael@example.com', 'test123',0),
    new User('Lee', 'Emma', 'emma@example.com', 'test123',2),
    new User('Kim', 'David', 'david@example.com', 'test123',8),
    new User('Silva', 'Elyora', 'elyora@example.com', 'test123',28)
);
