# ECOMMERCE 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Este proyecto implementa un ECOMMECE que muestra una página principal en donde se encuentran los productos y tiene un carrito de compras, permitiendo a los usuarios agregar, eliminar y actualizar la cantidad de productos.

Requisitos previos
Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes requisitos:

Node.js (v16 o superior)

npm (gestor de paquetes de Node.js)

## Instrucciones para ejecutar el proyecto localmente
Clonar el repositorio

Si no has clonado el proyecto aún, abre una terminal y ejecuta el siguiente comando:

bash
Copiar
Editar
git clone 
Instalar dependencias

Una vez clonado el repositorio, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

bash
Copiar
Editar
cd 
npm install

## Ejecutar el proyecto

Para ejecutar el proyecto localmente, utiliza el siguiente comando:

bash
Copiar
Editar
npm start
Esto iniciará el servidor de desarrollo y podrás acceder al proyecto en tu navegador en http://localhost:3000.

## Descripción de las características implementadas ✨
Este proyecto tiene las siguientes características principales:

1. Gestión del Carrito de Compras

Agregar productos al carrito: Los usuarios pueden agregar productos al carrito de compras.

Actualizar el número de elementos de un mismo producto.

Eliminar productos del carrito: Los usuarios pueden eliminar productos de su carrito en cualquier momento.

Persistencia de datos en memoria: La información del carrito se mantiene en el estado de la aplicación mientras el usuario esté interactuando con ella (la información no persiste después de un recargue de página).

2. Interfaz de Usuario:

Lista de productos: El carrito muestra una lista de los productos añadidos, incluyendo nombre, precio y cantidad.

Interacción dinámica: Los usuarios pueden cambiar la cantidad de productos, eliminar artículos del carrito o ver un resumen de los productos seleccionados.

3. Context API de React:

Utiliza el CartContext para gestionar el estado del carrito a lo largo de la aplicación, proporcionando una forma eficiente de compartir el estado entre componentes sin necesidad de pasar props manualmente a través de todos los niveles.

## Decisiones técnicas y arquitectónicas

1. Uso de React Context para gestionar el estado global:
Elegí usar React Context API para manejar el estado del carrito debido a su simplicidad y efectividad en la gestión de estados globales en aplicaciones pequeñas a medianas. De esta forma, no es necesario pasar las props entre componentes profundamente anidados.

Ventajas:

Mantiene el código más limpio y fácil de mantener.

Facilita la extensión del proyecto si se desea integrar una funcionalidad como la persistencia de datos entre sesiones.

2. Se implemento un diseño simple e intuitivo para los usiarios.

## Desafíos y soluciones 

1. Desafío de manejar el estado del carrito:
Inicialmente, intenté manejar el estado del carrito en cada componente, pero esto llevó a una duplicación innecesaria de lógica y a la dificultad de mantener el estado sincronizado.

Solución: Implementé el CartContext, centralizando la gestión del carrito y evitando la necesidad de pasar el estado entre múltiples componentes de forma manual.

2. Eliminar productos del carrito:
Al principio, al intentar eliminar un producto del carrito, no lograba mantener la estructura correcta del estado, lo que llevaba a perder elementos no deseados o a modificar la estructura.

Solución: Utilicé el método filter para crear una nueva lista del carrito excluyendo el producto que se eliminaba, lo que aseguraba que la actualización del estado se realizara correctamente sin alterar la integridad de la lista.

## Posibles Mejoras
Ingresar datos sobre Nosotros y contacto en el Header

Optimización en el manejo de cantidades: Poder disminuir o aumentar la cantidad de productos desde el carrito y agregar validaciones más robustas al cambiar la cantidad de productos (por ejemplo, no permitir cantidades negativas o muy altas).

Carrito dinámico con API externa: Integrar un backend para manejar productos y precios dinámicamente, permitiendo que el carrito se sincronice con datos reales de un servidor.

Se podría agregar una solución de almacenamiento local o en base de datos para mantener el estado del carrito a través de sesiones del navegador.

Responsable: Elizabeth Patiño Jaramillo