                                              Atividade

1. Crie uma nova API utilizando o express.

- A aplicação deve ser um pacote Node.js

- Dê ao pacote o nome de cep-lookup

- Utilize o express para gerenciar os endpoints da sua aplicação

2. A aplicação deve ter a rota GET /ping, que retorna o status 200 OK e o seguinte JSON:

```json
{ "message": "pong!" }
```

-A aplicação deve escutar na porta 3000

-Deve ser possível iniciar a aplicação através do comando npm start.

3. Crie o endpoint GET /cep/:cep

- O endpoint deve receber, no parâmetro :cep, um número de CEP válido.

- O CEP precisa conter 8 dígitos númericos e pode ou não possui traço. Dica: Utilize o regex \d{5}-?\d{3} para validar o CEP.

- Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:

```json
{ "error": { "code": "invalidData", "message": "CEP inválido" } }
```

- Caso o CEP seja válido, realize uma busca no banco de dados.

- Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:

```json
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

Caso o CEP exista, retorne o status 200 OK e os dados do CEP no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

4- Crie o endpoint POST /cep

O endpoint deve receber a seguinte estrutura no corpo da requisição:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

-Todos os campos são obrigatórios

-Utilize o Joi para realizar a validação. Em caso de erro, retorne o status 400 Bad Request, com o seguinte JSON:

```json
{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
```


-O CEP deve ser composto por 9 dígitos com traço. Dica: Utilize o seguinte regex para validar o CEP: \d{5}-\d{3}

-Se o CEP já existir, retorne o status 409 Conflict com o segiunte JSON:

```json
{
  "error": { "code": "alreadyExists", "message": "CEP já existente" }
}
```
- Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status 201 Created com os dados do novo CEP no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

                                          Bônus

1- Utilize uma API externa para buscar CEPs que não existem no banco de dados


- Quando um CEP não existir no banco de dados, utilize a API para obter suas informações.

- Caso o CEP não exista na API externa, você receberá o JSON { "erro": true }. Nesse caso, retorne status 404 Not Found com o seguinte JSON:
```json
{ "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

- Caso o CEP exista na API externa, armaezene-o no banco e devolva seus dados no seguinte formato:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

Dica: Na arquitetura MSC, os models são responsáveis por toda a comunicação externa de uma aplicação, o que inclui APIs externas. Logo, você precisará de um model para acesar a API.