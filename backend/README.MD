# MoveMind Academy

MoveMind-Academy API es la API de la aplicación de MoveMind-Academy la cual se encarga de proporcionar las respectivas conexiones entre la aplicación http://movemind-academy y su base de datos 
tiene como principales funcionalidades 
- [x] registrar usuarios
- [x] logear usuarios
- [x] añadir cursos
- [x] añadir clases a los cursos
- [x] comprar cursos
- [x] modificar el perfil del usuario
- [x] modificar cursos (instructores)
- [x] modificar clases (instructores
- [x] eliminar cursos (instructores)
- [x] eliminar clases(instructores)
- [x] manejar roles de usuario (usuarios, instructores)
- [x] eliminar cuenta de usuario
- [x] visualizar compras realizadas
- agendar clases en vivo
- comentar los cursos adquiridos
- manejar rol de administrador general
- manejar rol de control
  
## Instalación

Utilize el comando 
```bash
pnpm i
```
para instalar todas las dependencias necesarias para el funcionamiento de la API

## EndPoints

- users: http://localhost:9000/api/v1/MoveMind-Academy/users
- login: http://localhost:9000/api/v1/MoveMind-Academy/auth/login
- register: http://localhost:9000/api/v1/MoveMind-Academy/auth/register
- courses: http://localhost:9000/api/v1/MoveMind-Academy/courses
- disciplines: http://localhost:9000/api/v1/MoveMind-Academy/disciplines
- courses: http://localhost:9000/api/v1/MoveMind-Academy/courses
- classes: http://localhost:9000/api/v1/MoveMind-Academy/clases

## Uso

```bash
# inicializar el servidor
pnpm run dev 
```