const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem a idade de ${cliente["idade"]} anos`);

const chaves = ["nome", "idade", "email", "cpf", "altura"];
chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});