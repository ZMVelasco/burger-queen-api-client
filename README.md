# Burger Queen 🍔🍟🥤

## Índice

* [1. About Burger Queen](#1-about-the-project)
* [2. Login](#2-login-🔐)
* [3. Waiter](#3-waiter-🍽)
* [4. Chef](#4-chef-👩🏻‍🍳🧑🏽‍🍳)
* [5. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [6. Despliegue](#6-despliegue)
* [7. Pistas / tips](#7-pistas--tips)

***

## 1. About the project
Burger Queen is a management system for a restaurant, it is web native but per the client request it was carefully designed to be used on **tablet**. 

This project was developed based on the menu information and by the client's needs, the menu is very simple and it's divided in two sections, one for breakfast and another for the rest of the day. 

The interface is integrated with the API provided by the restaurant, allowing the frontend development team to work with endpoints such as products, users and orders. In the next sections you will find a deeper explanation on how its different components work.


## 2. Login 🔐

The login screen will have two fields, email and password, in order to have your own user, please reach out to the restaurant management and they will gladly provide unique credentials for you. If the credentials are not valid, an error message will appear, feel free to change them and try again. 

![Error handling demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689788260/GIF_Recording_2023-07-18_at_19.08.12_ubkd2b.gif)

![Successful login demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689787812/GIF_Recording_2023-07-18_at_19.09.59_yjlnsx.gif) 

Above you will find a demo of the login screen, but in case you're curious like us, we will provide a **sample mail** and **password** for all the sections, **except** for the administrator screen.

#### Credentials to test this screen

📩: sample@mail.com

🔑: 123456


## 3. Waiter 🍽

In this screen the waiter will find a sidebar, in which two items will appear, the first one is _Create order_, in which they will have access to both menus, depending on what they need and the time of the day, they can add an unlimited of products to the order, and the place order button will be enabled only if there's items in the new order **and** if the client name is typed in the corresponding input field. Once the order is successfully created, a confirmation modal will show, it has a closing button or clicking outside it will suffice to close it. 

![Order creation demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689788280/GIF_Recording_2023-07-18_at_19.13.06_1_qfchfb.gif) 

#### Pending order

On this section of the screen the waiter will be able to visualize the orders that are ready to be delivered, once the waiter delivers the order he or she should click the deleted button so that the system can have the data related to the total time an order takes from the moment of its creation to is delivery. 

![Pending waiter orders demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689790990/Pending_waiter_sd7xv8.gif) 

#### Credentials to test this screen

📩: waiter@mail.com

🔑: 123456

## 4. Chef 👩🏻‍🍳🧑🏽‍🍳

Just like the screen for waiters, Chef will have a sidebar that has two items in it, the first one is called _pending orders_, in which the chef will be able to see the order summary in cards, each card has has a Ready to serve button which they will click to let the waiter know that the order is fully done and then he can deliver it to the customer. 

![Order creation demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689788280/GIF_Recording_2023-07-18_at_19.13.06_1_qfchfb.gif) 

#### Past orders

Here the chef will be able to see all the orders that the kitchen team marked as ready to serve and the ones that have already been delivered by the waiter, the client specifically asked to be able to see how long it took to cook an order, and since this section is read only, these cards have no buttons.

![Pending waiter orders demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689790990/Pending_waiter_sd7xv8.gif) 

#### Credentials to test this screen

📩: chef@mail.com

🔑: 123456


## 5. Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 6. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Recuerda que si mockeaste la API, también tienes que desplegarla.
Te recomendamos explorar las siguientes opciones:

* [Vercel](https://vercel.com/) es una plataforma de _despliegue_ que
nos permite desplegar nuestra aplicación web estática (HTML, CSS y
JavaScript) y también nos permite desplegar aplicaciones web que se
ejecutan en el servidor (Node.js).
* [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 7. Pistas / Tips

Súmate al canal de Slack
[#project-bq-api-client](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar y pedir ayuda del proyecto.

### Frameworks / libraries

* [React](https://react.dev/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [json-server](https://www.npmjs.com/package/json-server)
* [mockoon](https://mockoon.com)
* [nock](https://github.com/nock/nock)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
