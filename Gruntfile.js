module.exports = function(grunt) {
	// -> Configures settings for each of your Grunt tasks
 	grunt.initConfig({
 		// -> Defines the configuration for your LESS tasks
	    less: {
	    	/* -> Tells the Grunt LESS plugin to compile myCss/main.less 
	    	into tmp/build/main.css */
	     	main: {
	        	options: {
	          		paths: ["public/myCSS"]
	        	},
	        	files: {
	          		"tmp/build/main.css": "public/myCSS/main.less"
				} 
			}
		} ,
		// -> Defines the configuration for your BROWSERIFY tasks
		browserify: {
		// Starts configuring Browserify
			client: {
      		src: ["public/myJS/main.js"],
      		dest: "tmp/build/main.js",
			} 
		} ,
		uglify: {
      		myApp: {
        		files: {
          			"tmp/build/main.min.js": ["tmp/build/main.js"]
				} 
			}
		},
		watch: {
			/* -> Tells the Grunt watch task to run the Browserify t
			ask any time a .js file changes */
      		scripts: {
        		files: ["**/*.js"],
        		tasks: ["browserify"]
			}, 
			/*
			Tells the Grunt watch task to run the LESS task any time 
			a .less file changes */
			styles: {
        		files: ["**/*.less"],
        		tasks: ["less"]
      		}
		}
	});
 	grunt.loadNpmTasks("grunt-contrib-less");
 	grunt.loadNpmTasks("grunt-browserify");
 	grunt.loadNpmTasks("grunt-contrib-uglify");
 	grunt.loadNpmTasks("grunt-contrib-watch");

  	grunt.registerTask("default", ["browserify", "less"]);
  	grunt.registerTask("build", ["browserify", "less", "uglify"]);
};
