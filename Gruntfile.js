module.exports = function(grunt) {

    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            development: {
                src: [
                    'assets/components/es5-shim/es5-shim.js',
                    'assets/components/angular/angular.js',
                    'assets/components/angular-ui-router/angular-ui-router.js',
                    'assets/components/angular-mocks/angular-mocks.js',
                    'app/**/*.js',
                ],
                dest: 'assets/js/app.js'
            },
            dist: {
                src: [
                    'assets/components/es5-shim/es5-shim.min.js',
                    'assets/components/angular/angular.min.js',
                    'assets/components/angular-ui-router/angular-ui-router.min.js',
                    'app/**/*.js',
                ],
                dest: 'assets/js/app.dist.js'
            }
        },

        uglify: {
            build: {
                src: 'assets/js/app.dist.js',
                dest: 'dist/assets/js/app.min.js'
            }
        },

        jshint: {
            beforeconcat: ['app/**/*.js']
        },

        sass: {
            development: {
                options: {
                    style: "expanded"
                },
                files: {
                    "assets/css/styles.css": "assets/scss/styles.scss"
                }
            },
            production: {
                options: {
                    style: "compressed"
                },
                files: {
                    "dist/assets/css/styles.min.css": "assets/scss/styles.scss"
                }
            }
        },

        imagemin: {
            dynamic: { 
                files: [{
                    expand: true,                 
                    cwd: 'assets/images/',                  
                    src: ['**/*.{png,jpg,gif}'],  
                    dest: 'dist/assets/images' 
                }]
            }
        },

        processhtml: {
            build: {
                files: {
                    'dist/index.html': ['index.html']
                }
            }
        },

        htmlmin: {                                     
            index: {                                      
                options: {                                
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                
                    'dist/index.html': 'dist/index.html',
                    'dist/404.html': '404.html',
                    'dist/500.html': '500.html',
                },
            },
            views: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'views/',      // Src matches are relative to this path.
                        src: ['**/*.html'], // Actual pattern(s) to match.
                        dest: 'dist/views/',   // Destination path prefix.
                    },
                ],
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
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
            sass: {
                files: ["assets/scss/**/*.scss"],
                tasks: ['sass:development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        'concat:development',
        'jshint', 
        'sass:development', 
        'watch'
    ]);

    grunt.registerTask('test', [
        'concat',
        'jshint', 
        'karma',
    ]);

    grunt.registerTask('build', [
        'concat:dist', 
        'uglify', 
        'jshint',
        'karma',
        'sass',
        'imagemin',
        'processhtml',
        'htmlmin'
    ]);

};