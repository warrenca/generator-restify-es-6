# generator-restify-es-6 [![NPM version][npm-image]][npm-url]
## Restify boilerplate in ES6

## Installation

First, install [Yeoman](http://yeoman.io) and generator-restify-es-6 using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-restify-es-6
```

Then generate your new project:

```bash
yo restify-es-6


     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │   Let's create RESTify   │
   `---------´   │      server in ES6!      │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Your project name restify-es-6
? The namespace of your project restify-es-6
? Your project description Description of restify-es-6
? Your project URL https://github.com/myname/myproject.git


I'm all done. Running npm install && bower install for you to install the required dependencies. If this fails, try running the command yourself.


   create package.json
   create adaptors/nameFinderAdaptor.es
   create bootstrap/init.es
   create bootstrap/locator.es
   create config/common.api.json
   create config/local.api.json
   create config/test.api.json
   create routes/hello/get.es
   create services/serviceList.es
   create services/staticNameFinderService.es
   create test/helpers.es
   create test/routes/hello/.gitkeep
   create ecosystem.json5
   create .babelrc
   create .env
   create .env.sample
   create .env.test.ini
   create .editorconfig
   create .eslintrc.json
   create .gitignore
   create Gruntfile.js
   create app.js
   create server.es
   create Dockerfile
   create README.md
```

## View the generated application <u>[README ☺](https://github.com/warrenca/generator-restify-es-6/blob/master/generators/app/templates/README.md)</u>

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

GPLv3.0 © [WarrenCA]()


[npm-image]: https://badge.fury.io/js/generator-restify-es-6.svg
[npm-url]: https://npmjs.org/package/generator-restify-es-6
[travis-image]: https://travis-ci.org/warrenca/generator-restify-es-6.svg?branch=master
[travis-url]: https://travis-ci.org/warrenca/generator-restify-es-6
[daviddm-image]: https://david-dm.org/warrenca/generator-restify-es-6.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/warrenca/generator-restify-es-6
[coveralls-image]: https://coveralls.io/repos/warrenca/generator-restify-es-6/badge.svg
[coveralls-url]: https://coveralls.io/r/warrenca/generator-restify-es-6
