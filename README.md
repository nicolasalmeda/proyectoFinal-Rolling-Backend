# Sistema de Gestión de Hotel

## Objetivo del Sistema

El proyecto consiste en desarrollar un sistema de gestión de hotel que permita a los usuarios registrados reservar habitaciones disponibles y al administrador gestionar las habitaciones y usuarios.

### Registro de Usuarios

Los usuarios podrán registrarse en el sistema proporcionando su información personal, como nombre, correo electrónico y contraseña. Se utilizará autenticación para asegurar el acceso a las funcionalidades del sistema.

### Reserva de Habitaciones

Los usuarios registrados podrán ver la lista de habitaciones disponibles y realizar reservas. Se mostrarán detalles sobre cada habitación, como el tipo, el precio y las fechas disponibles. Al realizar una reserva, el sistema verificará la disponibilidad de la habitación en las fechas seleccionadas y evitará que se realicen reservas duplicadas.

### Definición de la Estructura de la Base de Datos

Se creará un modelo de datos en MongoDB para almacenar la información necesaria. Por ejemplo, se tendrán colecciones para usuarios y habitaciones. Estas colecciones incluirán campos como nombre, correo electrónico, contraseña, roles, habitaciones, etc.

### Configuración de la Autenticación y Autorización

Se implementará el registro y el inicio de sesión utilizando Node.js y Express. Se utilizarán bibliotecas como jsonwebtoken para generar tokens JWT y bcrypt para el hash de las contraseñas.

## Grupo N3

Integrantes:
- [Nombre del Integrante 1](enlace_perfil_github)
- [Nombre del Integrante 2](enlace_perfil_github)
- [Nombre del Integrante 3](enlace_perfil_github)


