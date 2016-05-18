'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

	var config = {
		app: 'app',
		dist: 'dist'
	}

	grunt.initConfig({
		config: config,

		copy: {
			dist_html: {
				files: [
					{
						expand: true,
						cwd: '<%= config.app %>/',
						src: '*.html',
						dest: '<%= config.dist %>/',
						ext: '.min.html'					
					}
				]
			}
		},

		clean: {
			dist: {
				src: ['<%= config.dist %>/**/*']
			}
		}
	});
}