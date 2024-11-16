module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
                options: {
                }
            },
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify'],
                options: {
                }
            },
            html: {
                files: ['src/*.html'],
                tasks: ['replace:dev'],
                options: {
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JSAREA',
                            replacement: '../src/scripts/areajs.js'
                        },
                        {
                            match: 'ENDERECO_DO_JSMEDIA',
                            replacement: '../src/scripts/mediajs.js'
                        }
                        
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html', 'src/calcmedia.html', 'src/calcarea.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JSAREA',
                            replacement: './scripts/areajs.js'
                        },
                        {
                            match: 'ENDERECO_DO_JSMEDIA',
                            replacement: './scripts/mediajs.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html', 'prebuild/calcmedia.html', 'prebuild/calcarea.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/calcmedia.html': 'src/calcmedia.html',
                    'prebuild/index.html': 'src/index.html',
                    'prebuild/calcarea.html' : 'src/calcarea.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/mediajs.min.js': 'src/scripts/mediajs.js',
                    'dist/scripts/areajs.min.js': 'src/scripts/areajs.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand:true,
                    cwd:'src/images/',
                    src: ['**/*.{png,jpg,svg}'],
                    dest: 'dist/images/'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify', 'imagemin']);
}