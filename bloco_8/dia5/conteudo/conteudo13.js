/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!