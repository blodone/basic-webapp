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
                    'assets/components/angular-mocks/angular-mocks.js',
                    'app/**/*.js',
                ],
                dest: 'assets/js/app.js'
            }
        },

        uglify: {
            build: {
                src: 'assets/js/app.js',
                dest: 'dist/assets/js/app.min.js'
            }
        },

        jshint: {
            beforeconcat: ['app/**/*.js']
        },

        less: {
            development: {
                files: {
                    "assets/css/styles.css": "assets/less/styles.less"
                }
            },
            production: {
                options: {
                    cleancss: true,
                    keepSpecialComments: 0,
                    compress: true
                },
                files: {
                    "dist/assets/css/styles.min.css": "assets/less/styles.less"
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // Default task(s).
    grunt.registerTask('default', [
        'concat',
        'jshint', 
        'less:development', 
        'watch'
    ]);

    grunt.registerTask('build', [
        'concat', 
        'uglify', 
        'jshint', 
        'less',
        'imagemin',
        'processhtml',
        'htmlmin'
    ]);

};