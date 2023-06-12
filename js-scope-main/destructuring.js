const user = {
    id: 339,
    name: "Chris",
    age: 21,
    education: { degree: "Masters" },
};

let { education: { degree } } = user;
console.log(degree);