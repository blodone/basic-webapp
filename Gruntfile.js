module.exports = function(grunt) {

    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'assets/components/es5-shim/es5-shim.js',
                    'assets/components/angular/angular.js',
                    'assets/components/angular-route/angular-route.js',
                    'assets/js/**/*.js',
                ],
                dest: 'assets/dist/js/app.js'
            }
        },

        uglify: {
            build: {
                src: 'assets/dist/js/app.js',
                dest: 'assets/dist/js/app.min.js'
            }
        },

        jshint: {
            beforeconcat: ['assets/js/**/*.js']
        },

        less: {
            development: {
                files: {
                    "assets/dist/css/styles.css": "assets/less/styles.less"
                }
            },
            production: {
                options: {
                    cleancss: true,
                    keepSpecialComments: 0,
                    compress: true
                },
                files: {
                    "assets/dist/css/styles.min.css": "assets/less/styles.less"
                }
            }
        },
        
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ["<%= concat.dist.src %>"],
                tasks: ['concat', 'jshint']
            },
            less: {
                files: ["assets/less/*.less"],
                tasks: ['less:development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // Default task(s).
    grunt.registerTask('default', [
        'concat', 
        'uglify', 
        'jshint', 
        'less', 
        'watch'
    ]);

    grunt.registerTask('build', [
        'concat', 
        'uglify', 
        'jshint', 
        'less'
    ]);

};