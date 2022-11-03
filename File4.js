const uuid = require("uuid")

function createUser(name,age){
    return{
        name,
        age,
        id: uuid.v4(),
    }
}
const namee = process.argv[2];
const age = process.argv[3];
console.log(createUser(namee,age))

