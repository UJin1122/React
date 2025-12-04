const user={
  name:'유진',
  dogs:[
    {
    name:'진',
    age:6
    },
    { 
    name:'반달',
    age:4
    }
  ]

};

const newDogs = user.dogs.map(dog => {
  if(dog.name==='진'){
    return{ ... dog, name:'쿠키'};
  }else{
    return dog;
  }
});

const newUser = {
  ...user,
  dogs: newDogs
};

console.log(user.dogs[0].name);     // 진 
console.log(newUser.dogs[0].name);  // 쿠키