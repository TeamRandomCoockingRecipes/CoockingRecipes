# Course Project
_Angular 2_

## Team "Random"
*************************************************
Cooking Recipes Application is a SPA application developed by Team "Random" as part of the "Angular 2" course at Telerik Academy 2016 - Spring.

##Team
| Nickname  | Name |
| ------------- | ------------- |
| IvanAngelov  | Иван Ангелов  |
| todor_ia  | Тодор Арабаджиев  |
| Kristina.Barutska | Кристина Барутска  |

##Application Desription 

The main purpоse of the application is to help the user easy to find cooking recipes and interesting articles on food topics. Paging and well organized, structured functionality allow the user to easily navigate around the application. He can easily find fantastic gourmet recipes, simple or sophisticated, then label the best ones as favorite, and even share them with friends via Facebook.
The "Cooking Application" was designed and implemented using [Node.js](http://nodejs.org), [Angular 2] and [MongoDB](https://www.mongodb.com/).

## Application Logics

"Cooking Application" consist of the 2 main parts:

- **public part** (accessible without authentication)
- **private part** (available for registered users)

### Public Part

The **public part** is **visible without authentication**. This public part includes the following pages:

- the application start page: contains public menu options;
- user login page: login possible through user's site account;
- user registration page;
- categories page: buttons with links for each category; when clicked, the the recipes of this category are displayed;
- page with articles on cooking and alimentary topics;
- recipes by category chosen from the category page. 
 
### Private Part (Registered users area)

**Registered users** have personal area in the web application accessible after **successful login**.
This area holds the following pages:

- the user's profiles management functionality;
- pages for database CRUD operations on cooking recipes and categories;
- pages for database CRUD operations on popular cooking articles; 
- recipes by category chosen from the category page; 

## Technical Implementation

Technologies, frameworks and development techniques used in the "Cooking e-Web Application" project:

### Application Back-end (Server)

- 6 different **public dynamic web pages**
- 6 different **private (authenticated) dynamic web pages**
  
- **5 different public RESTful routes** for AJAX: 
  - home-router
  - article-router
  - category-router
  - recipe-router
  - search-router
- **1 private (authenticated) route** for AJAX:
  - authentication-router
  
- Cooking recipes data base was designed using **MongoDB**'s data storage, and data/service layer for accessing the database was created

- [Passport](http://passportjs.org/) strategy was applied for managing **users**
  - Registered users have role **user**
 

### Application front-end (client)


##  General Requirements

- Used Git repository:

 https://github.com/TeamRandomCoockingRecipes/CoockingRecipes
