const user = {
  name: 'GD',
  dogs: [
    {
      name: '하루',
      age: 5
    },
    {
      name: '나무',
      age: 8
    }
  ]
};

const newDogs = user.dogs.map(dog => {
  if(dog.name === '하루'){
    return { ...dog, name: '이틀'};
  }else{
    return dog;
  }
});

const newUser = { 
  ...user,
  dogs: newDogs
};

console.log(user.dogs[0].name); // 하루
console.log(newUser.dogs[0].name); // 이틀