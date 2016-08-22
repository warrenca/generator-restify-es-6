# RESTify on ES6

## Commands
```
#Run the application with file watcher using pm2, I use this for development
$ npm run local

#Run the application normally. It will not stop if the app crashes on runtime.
$ npm start

#Stop the application
$ npm stop

#Run the test
$ npm run test

#Grunt (still buggy). Run the app with grunt and it will automatically refresh
#the app for any changes, it will run the linter and test as well.
$ grunt
```

## Environments
```env``` file, this is a file that will be read by the application by default.
This should be in your ```.gitignore```.

```env.test.ini``` will be read by your
application if you run with test.
