import {User} from "../models/user.model";
import {faker} from "@faker-js/faker";

export const users: User[] = [];

const generateRandomUser = () => {
  const user: User = {
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    password: "test123",
    highScore: Math.floor(Math.random() * 14) + 1,
    boardingTicketNumber:
      `${Math.floor(Math.random() * (200 - 100 + 1)) + 100}${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`,

  };

  return user;
};

const generateRandomUsers = (count: number) => {
  const randomUsers: User[] = [];
  for (let i: number = 0; i < count; i++) {
    const user: User = generateRandomUser();
    randomUsers.push(user);
  }
  return randomUsers;
};

users.push(...generateRandomUsers(90).map(userData =>
  new User(userData.lastName, userData.firstName, userData.email, userData.password, userData.highScore, userData.boardingTicketNumber)));

users.push(
  new User('Ghulam', 'Meryam', 'meryam.ghulam@gmail.com', 'test123', 9, '18B'),
  new User('Naloufi', 'Amel', 'naloufi.amel@gmail.com', 'test123', 3, '45F'),
  new User('Johnson', 'Michael', 'michael@example.com', 'test123', 0, '541X'),
  new User('Lee', 'Emma', 'emma@example.com', 'test123', 2, '93A'),
  new User('Kim', 'David', 'david@example.com', 'test123', 8, '238I'),
  new User('Trabelsi', 'Elyora', 'trabelsi.elyora@gmail.com', 'test123', 28, '192H')
);
