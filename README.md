# Django | Vue | Docker

## Descrição

`O intuito deste projeto é para facilitar e agilizar o processo inicial do desenvolvimento de um sistema.`

`O projeto já conta com authenticação por JWT, tela de login e de cadastro.`




## Tecnologias

![My Skills](https://skillicons.dev/icons?i=python,django,postgresql,vue,javascript,bootstrap,docker)     


- Django Rest Framework
- JWT Authentication
- VueJS
- PostgreSQL
- Docker
- Docker-Compose




## Documentação da API

#### Retorna um token jwt de acesso ao sistema.

```http
  POST /auth/login/
```

| Parâmetro  | Tipo     | Descrição        |
| :--------- | :------- | :--------------- |
| `username` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### Cadastra um usuário.

```http
  POST /auth/register/
```

| Parâmetro   | Tipo     | Descrição        |
| :---------- | :------- | :--------------- |
| `username`  | `string` | **Obrigatório**. |
| `first_name`| `string` | **Obrigatório**. |
| `last_name` | `string` | **Obrigatório**. |
| `email`     | `string` | **Obrigatório**. |
| `password`  | `string` | **Obrigatório**. |
| `password2` | `string` | **Obrigatório**. |




## Autores

- [@fillipevieira92](https://www.github.com/fillipevieira92)
