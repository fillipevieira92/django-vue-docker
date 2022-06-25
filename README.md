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
  POST :3000/auth/login/
```

| Parâmetro  | Tipo     | Descrição        |
| :--------- | :------- | :--------------- |
| `username` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### Cadastra um usuário.

```http
  POST :3000/auth/register/
```

| Parâmetro   | Tipo     | Descrição        |
| :---------- | :------- | :--------------- |
| `username`  | `string` | **Obrigatório**. |
| `first_name`| `string` | **Obrigatório**. |
| `last_name` | `string` | **Obrigatório**. |
| `email`     | `string` | **Obrigatório**. |
| `password`  | `string` | **Obrigatório**. |
| `password2` | `string` | **Obrigatório**. |




## Autor
<p>Fillipe Vieira</p>
<a target="_blank" href="http://www.github.com/fillipevieira92"><img src="https://img.icons8.com/fluency/48/000000/github.png"/></a>
<a target="_blank" href="http://www.linkedin.com/in/fillipevieira92"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/></a>
