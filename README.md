#ElaoStrap

## Dependencies

* [Gulp](https://github.com/gulpjs/gulp)
* [elao-assets-gulp](https://github.com/Elao/node-module-assets-gulp)
* [jQuery](https://github.com/jquery/jquery)
* [Bootstrap SASS](https://github.com/twbs/bootstrap-sass)


## Installation

Clone the project in your workspace

	$ git clone git@github.com:JeremyFagis/ElaoStrap.git your-project
	$ cd your-project

Download packages

	$ (sudo) npm install

Compile assets

	$ gulp

Your assets folder looks like this

	assets/
	├── fonts/
	│   └── ...
	├── images/
	│   └── ...
	├── js/
	│   └── ...
	├── sass/
	│   └── ...


## Compilation

	#  compilation (watch & minification)
	$ gulp

	# Prod compilation (minification)
	$ gulp install

	# Dev compilation (watch & no-minification)
	$ gulp dev


## Details

### JS

	js/
	└── vendors/
	│   └─ fancybox, dropify, simple select
	│   └─ Add others vendors here if they are not in node_modules
	│
	└── main.js


### Sass

	sass/
	└── base/
	│   └─ fonts, reset, headers, links, variables
	│
	└── components/
	│   └─ alerts, buttons, tooltips, popovers, tables...
	│   └─ If you include plugins, insert scss files here
	│
	└── helpers/
	│   └─ mixins, responsive, shortcuts
	│
	└── layout/
	│   └─ forms, grid, layout
	│
	└── pages/
	│   └─ Specific styles for pages
	│
	└── style.scss


### Fonts

Use [fontello.com](http://fontello.com/) to generate fonts icons. Move font files in assets/fonts/fontello, and update assets/sass/base/_font.scss.

### Usage

Add the following lines in the head of your pages
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<meta name="format-detection" content="telephone=no">
<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700,900|Roboto+Condensed:400,300,700|Inconsolata:400' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="assets/css/style.css">
<!--[if lt IE 9]>
    <script src="assets/js/vendors/html5shiv.js"></script>
<![endif]-->
```

Then this fragment of code as the first element of your body in order to handle older brothers
```html
<!--[if lt IE 8]>
    <div id="browsehappy">
        <div id="browsehappy-inner">
            Vous utilisez un navigateur internet trop vieux.<br/>Merci de le <a href="http://browsehappy.com/">mettre à jour</a> afin d'améliorer votre navigation.
        </div>
    </div>
<![endif]-->
```
And finally, just before the closing tag of your body, add the following code to include the required javascript:
```html
<script src="assets/js/main.js"></script>
```
