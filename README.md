#ElaoStrap

## Installation
---

Clone the project in your workspace

	$ git clone git@github.com:JeremyFagis/DefaultProject.git your-project
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
---

	#  compilation (watch & minification)
	$ gulp
	
	# Prod compilation (minification)
	$ gulp install
	
	# Dev compilation (watch & no-minification)
	$ gulp dev
	
	
## Details
---

### Sass

	sass/
	└── base/
	│   └─ fonts, reset, headers, links, variables
	│
	└── components/
	│   └─ fonts, reset, headers, links, variables
	│   └─ If you include plugins, insert scss files here
	│
	└── helpers/
	│   └─ mixins, responsive, shortcuts
	│
	└── layout/
	│   └─ forms, grid, layout
	│
	└── style.scss	
	

### Fonts

Use [fontello.com](http://fontello.com/) to generate fonts icons.


### 