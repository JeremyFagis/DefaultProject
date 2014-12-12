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

Use [fontello.com](http://fontello.com/) to generate fonts icons. Move font files in assets/fonts/fontello, and update assets/sass/base/fonts.scss.


