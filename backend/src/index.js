//Archivo que arranca el servidor y aca importamos modulos

const app = require('./app')

// app.listen(4000, ()=>{
//     console.log("server on port 4000")
// })

async function main() {
    await app.listen(4000);
    console.log("server on port 4000");
}

main();