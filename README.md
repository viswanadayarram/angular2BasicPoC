# Angular 2 Basic PoC
Angular 2 Basic Example project

This repository holds the Angular 2 sample project and mailnly it coantian the type script and HTML, CSS.

It's been extended with testing support so you can start writing tests immediately.

It exists primarily to get you started quickly with learning and prototyping in Angular

<h2>Prerequisites</h2>

Node.js and npm are essential to Angular development.

Get it now if it's not already installed on your machine.

Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

We recommend nvm for managing multiple versions of node and npm.

<h2>Create a new project based on the angular2BasicPoC</h2>

Clone this repo into new project folder (e.g., my-proj).

git clone https://github.com/angular/angular2BasicPoC  my-proj
cd my-proj
We have no intention of updating the source on angular/angular2BasicPoC. Discard the .git folder..

rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows

<h2>Install npm packages</h2>

See npm and nvm version notes above
Install the npm packages described in the package.json and verify that it works:

npm install
npm start
Doesn't work in Bash for Windows which does not support servers as of January, 2017.
The npm start command first compiles the application, then simultaneously re-compiles and runs the lite-server. Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.
