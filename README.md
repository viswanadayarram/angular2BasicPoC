# angular2BasicPoC
Angular 2 Basic Example project

Create an angular2 application 
Create a component ‘nav.component’ with application title and navigation links.
Navigation Links
Users
Todos
Albums
Navigation menu should be available in every page and corresponding menu item should be highlighted when you visit a route.
Create a component named ‘user.list.component’ which shows information about users. 
On clicking an ‘user’ item it should redirect to a new route (user/userid) which shows all the information about the user
User posts
User albums
User to-do’s
Each of the above posts, albums and todos are individual components which retrieve required information based on userid from respective services.
Create a component named ‘post.list.component’ which shows user posts when a userid parameter is sent.
		
Create a component named ‘album.list.component’ which shows user album when a userid parameter is sent. If a parameter is not available show all albums.
		
Create a component named ‘todo.list.component’ which shows user todo when a parameter is sent. If a parameter is not available show all albums
		
All services should follow these rules 
Demonstrate rxjs observables
Error handling
Dependency Injection (Inject the service where ever required)

Create a component named ‘search.component’ which is helps user to perform search operations 
It should have input[type=text] , ‘search’ button and ‘clear’ button.
On clicking ‘search’, component should emit an event with search criteria to parent component
Use search component in user list and album list components.
Search component label should change to ‘user’ or ‘album’ based on the type of parent component.

Create a directive ‘highlight.directive.ts’ to which should highlight (the color of the text should change to ‘red’) all the users who has ‘LLC’ in the company name.

Demonstrate form validation with angular2 by creating a new user registration page.
A new button on ‘user.list.component’ should navigate to a new route (user/new)
Create user, address classes and bind them to create a registration page. 
Form should have following fields. Submit event should take the user object and log into console.
FirstName*
LastName*
MiddleName
Email*
Street*
Country*  
City*
* -required field.

Integrate a third party module into your application and demonstrate it (third party can be anything)
Ex: ng2-bootstrap, PrimeNG for Angular2, 
Material designs for Angular2 (I like this)
The template layouts (html design) is up to your creativity. You can refer the practice sessions for template layouts.

Organize your code in following folder structure
