function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Kobe',
    lastName: 'Bryant'
}

findUser(userData);
