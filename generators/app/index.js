'use strict';
//Require dependencies
var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    _s    = require('underscore.string'),
    path  = require('path'),
    mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  //Ask for user input
  askFor: function () {
    var done = this.async();
    // have Yeoman greet the user
    this.log(yosay(
          'Let\'s create ' + chalk.red('RESTify server in ES6') + '!'
        ));

    var appname = path.basename(process.cwd());
    appname = _s.slugify(_s.humanize(appname));

    return this.prompt([{
      type    : 'input',
      name    : 'appname',
      message : 'Your project name',
      default : appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'namespace',
      message : 'The namespace of your project',
      default : _s.slugify(appname) // Default to current folder name
    },{
      type    : 'input',
      name    : 'app_description',
      message : 'Your project description',
      default : "Description of " + _s.slugify(appname) // Default to current folder name
    },{
      type    : 'input',
      name    : 'project_url',
      message : 'Your project URL',
      default : "https://github.com/"
    }]).then(function (answers) {
      this.props = answers
      done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    //Copy application files
    app: function() {

      mkdirp('adaptors');
      this.fs.copy(
        this.templatePath('adaptors/nameFinderAdaptor.es'),
        this.destinationPath('adaptors/nameFinderAdaptor.es')
      );

      mkdirp('bootstrap');
      this.fs.copy(
        this.templatePath('bootstrap/init.es'),
        this.destinationPath('bootstrap/init.es')
      );
      this.fs.copy(
        this.templatePath('bootstrap/locator.es'),
        this.destinationPath('bootstrap/locator.es')
      );

      mkdirp('config');
      this.fs.copyTpl(
        this.templatePath('config/_common.api.json'),
        this.destinationPath('config/common.api.json'),
        { namespace: _s.slugify(this.props.namespace) }
      );
      this.fs.copy(
        this.templatePath('config/local.api.json'),
        this.destinationPath('config/local.api.json')
      );
      this.fs.copy(
        this.templatePath('config/test.api.json'),
        this.destinationPath('config/test.api.json')
      );

      mkdirp('routes');
      mkdirp('routes/hello');
      this.fs.copy(
        this.templatePath('routes/hello/get.es'),
        this.destinationPath('routes/hello/get.es')
      );

      mkdirp('services');
      this.fs.copy(
        this.templatePath('services/serviceList.es'),
        this.destinationPath('services/serviceList.es')
      );
      this.fs.copy(
        this.templatePath('services/staticNameFinderService.es'),
        this.destinationPath('services/staticNameFinderService.es')
      );

      mkdirp('test');
      mkdirp('test/routes');
      mkdirp('test/routes/hello');
      this.fs.copy(
        this.templatePath('test/helpers.es'),
        this.destinationPath('test/helpers.es')
      );
      this.fs.copy(
        this.templatePath('test/routes/hello/.gitkeep'),
        this.destinationPath('test/routes/hello/.gitkeep')
      );

      this.fs.copyTpl(
        this.templatePath('_ecosystem.json5'),
        this.destinationPath('ecosystem.json5'),
        { appname: this.props.appname }
      );

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          appname: this.props.appname,
          app_description: this.props.app_description,
          project_url: this.props.project_url
        }
      );

      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('env'),
        this.destinationPath('.env')
      );
      this.fs.copy(
        this.templatePath('env.sample'),
        this.destinationPath('.env.sample')
      );
      this.fs.copy(
        this.templatePath('env.test.ini'),
        this.destinationPath('.env.test.ini')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc.json'),
        this.destinationPath('.eslintrc.json')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('app.js'),
        this.destinationPath('app.js')
      );
      this.fs.copy(
        this.templatePath('server.es'),
        this.destinationPath('server.es')
      );
      this.fs.copy(
        this.templatePath('Dockerfile'),
        this.destinationPath('Dockerfile')
      );
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
    },
    //Install Dependencies
    install: function() {
      this.installDependencies();
    }
  },
});
