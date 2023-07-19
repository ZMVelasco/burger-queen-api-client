# Burger Queen 🍔🍟🥤

## Índice

* [1. About Burger Queen](#1-about-the-project)
* [2. Login](#2-login-🔐)
* [3. Waiter](#3-waiter-🍽)
* [4. Chef](#4-chef-👩🏻‍🍳🧑🏽‍🍳)
* [5. Administrator or manager 💼👜](#5-administrator-or-manager-💼👜)
* [6. Frameworks and libraries](#6-frameworks-and-libraries)
* [7. Developers 👩🏻‍💻👩🏽‍💻💛](#7-developers-👩🏻‍💻👩🏽‍💻💛)


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

![Pending chef orders demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689795902/pending-chef_d9xo9z.gif) 

#### Past orders

Here the chef will be able to see all the orders that the kitchen team marked as ready to serve and the ones that have already been delivered by the waiter, the client specifically asked to be able to see how long it took to cook an order, and since this section is read only, these cards have no buttons.

![Pending waiter orders demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689795902/past-chef_zzoczg.gif) 

#### Credentials to test this screen

📩: chef@mail.com

🔑: 123456


## 5. Administrator or manager 💼👜

To continue with the tradition, the manager's sidebar also has two items, the first one is _employees_, in which they will be able to see the total employees on the team, as well as an addition button to create a new user.

![Employee addition demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689799649/employeeaddition_muw35r.gif) 

Below it, there will be a table that contains all the info about every staff member, they'll find two action buttons, one to edit and one to delete, in both cases a modal will show up. 

The edition modal displays all the current staff member info, and once the save changes button is clicked, the information will be automatically updated. 

![Employee edition demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689799649/employeeedit_h8gfak.gif) 

Once the delete modal is clicked, a confirmation modal will appear, to ensure that no employee is deleted from the restaurant's database it will require another click on the confirm button, also having the option to cancel in case it was just a mistake.

![Employee deletion demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689799649/employeedelete_asc9lo.gif) 

#### Products

![Product addition demo gif](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689799649/productaddition_egixqm.gif) 

All the functionalities that are available for employees are available for products as well, which means the manager can add a new product, edit the existing products data or delete them.

![Product edition and deletion](https://res.cloudinary.com/dslzbcaxd/image/upload/v1689799649/producteditanddelete_fx93k7.gif) 

## 6. Frameworks and libraries

* [⚛️ React](https://react.dev/)
* [🎨 React Bootstrap](https://react-bootstrap.netlify.app/)
* [🔗 React Router](https://reactrouter.com/)
* [🧪 Vitest](https://vitest.dev/)

## 7. Developers 👩🏻‍💻👩🏽‍💻💛

* [Belén Neira 👩🏻💻](https://github.com/Belenoese) 
* [Mariana Velasco 🌸✨](https://github.com/ZMVelasco )
