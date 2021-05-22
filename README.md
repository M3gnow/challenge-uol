# Facilidades

Para facilitar a execução dos testes, foi disponibilizado um cluster remoto no Mongo Atlas
A string de conexão com login e senha de acesso está presente no _.env-sample_

A aplicação será exposta na porta _8001_ ( pode ser alterada no _.env_ que deverá ser gerado)

# Como executar com Docker

Passo 1:
Necessario gerar um arquivo _.env_ utilizando o _.env-sample_

Passo 2 (dentro do diretorio da aplicação):
`docker build -t challenge_uol .`

Passo 3 (porta deve ser a mesma registrada no _.env_):
`docker run -d -p 8001:8001 --name challenge-uol challenge_uol`

Acessar logs da aplicação:
`docker logs challenge-uol` || `docker logs -f challenge-uol` (execução iterativa)

# Carregar modelos de requisição no Postman

Utilize o link público: https://www.getpostman.com/collections/0737a8cb82a4145209f8

# Requisitos funcionais

[x] Cadastrar cidade
`endpoint: /v1/city`
`- metodo: POST`

[x] Cadastrar cliente
`- endpoint: /v1/client`
`- metodo: POST`

[x] Consultar cidade pelo nome
`- endpoint: /v1/city`
`- metodo: GET`

[x] Consultar cidade pelo estado
`- endpoint: /v1/city`
`- metodo: GET`

[x] Consultar cliente pelo nome
`- endpoint: /v1/client`
`- metodo: GET`

[x] Consultar cliente pelo Id
`- endpoint: /v1/client`
`- metodo: GET`

[x] Remover cliente
`- endpoint: /v1/client`
`- metodo: DELETE`

[x] Alterar o nome do cliente
`- endpoint: /v1/client`
`- metodo: PATCH`

# Parametros (_Body_)

Todos parametros necessarios são esperados em JSON

## Regras de negocio

[x] Cidades: nome e estado

[x] Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.

#### Requisitos Obrigatórios:

[x] Operações acima funcionando sem erros

[x] Código válido, estruturado e organizado para que possamos testar sua aplicação

[x] Utilização de Node 10+ o resto é por sua conta escolher.
