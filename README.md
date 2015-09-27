# Simple Angular 2 app written in TypeScript with Gulp Automation

## Install Gulp

    $ npm install -g gulp  # Or sudo npm install -g gulp

## Compile your source and libs and move to dist

    $ cd angular2-gulp-typescript
    $ gulp
    Using gulpfile ....angular2-gulp-typescript/gulpfile.js
    Starting 'js'...
    Starting 'libs'...
    Starting 'html'...
    Finished 'html' after 1.11 s
    Finished 'js' after 1.13 s
    Finished 'libs' after 1.12 s
    Starting 'default'...
    Finished 'default' after 14 μs

## Edit your app (src folder)
We have good experience using these Typescript aware editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

## Load the app
From the directory that contains index.html:

    $ npm install -g http-server  # Or sudo npm install -g http-server
    $ cd dist
    $ http-server                 # Creates a server at localhost:8080
    # In a browser, visit localhost:8080/index.html

## Clean dist

    $ cd angular2-gulp-typescript
    $ gulp clean
