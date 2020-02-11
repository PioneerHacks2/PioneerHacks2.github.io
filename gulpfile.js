var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', async function () {
    return Promise.all([gulp.src('assets/images/teamThree/*.{jpg,png,PNG}').pipe(
        $.responsive(
            {
                '*.{jpg,png,PNG}': [
                    {
                        width: 1920,
                        rename: {
                            suffix: '-xl',
                            extname: '.webp'
                        }
                    },
                    {
                        width: 1600,
                        rename: {
                            suffix: '-lg',
                            extname: '.webp'
                        }
                    },
                    {
                        width: 720,
                        rename: {
                            suffix: '-md',
                            extname: '.webp'
                        }
                    },
                    {
                        width: 480,
                        rename: {
                            suffix: '-sm',
                            extname: '.webp'
                        }
                    },
                    {
                        width: 320,
                        rename: {
                            suffix: '-xs',
                            extname: '.webp'
                        }
                    }
                ]
            },
            {
                // Global configuration for all images
                // The output quality for JPEG, WebP and TIFF output formats
                quality: 85,
                // Strip all metadata
                withMetadata: false,
                // Do not emit the error when image is enlarged.
                errorOnEnlargement: false
            }
        )
    ).pipe(gulp.dest('dist/images/teamThree')),
        gulp.src('assets/images/sponsors/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 1920,
                            rename: {
                                suffix: '-xl',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 1600,
                            rename: {
                                suffix: '-lg',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 720,
                            rename: {
                                suffix: '-md',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 480,
                            rename: {
                                suffix: '-sm',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 320,
                            rename: {
                                suffix: '-xs',
                                extname: '.webp'
                            }
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/sponsors')),
        gulp.src('assets/images/partner/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 1920,
                            rename: {
                                suffix: '-xl',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 1600,
                            rename: {
                                suffix: '-lg',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 720,
                            rename: {
                                suffix: '-md',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 480,
                            rename: {
                                suffix: '-sm',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 320,
                            rename: {
                                suffix: '-xs',
                                extname: '.webp'
                            }
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/partner')), gulp.src('assets/images/backgrounds/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 1920,
                            rename: {
                                suffix: '-xl',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 1600,
                            rename: {
                                suffix: '-lg',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 720,
                            rename: {
                                suffix: '-md',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 480,
                            rename: {
                                suffix: '-sm',
                                extname: '.webp'
                            }
                        },
                        {
                            width: 320,
                            rename: {
                                suffix: '-xs',
                                extname: '.webp'
                            }
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/backgrounds')),
        gulp.src('assets/images/teamThree/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 720,
                            rename: {
                                extname: '.jpg'
                            },
                            flatten: true
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/teamThree')),
        gulp.src('assets/images/sponsors/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 720,
                            rename: {
                                extname: '.jpg'
                            },
                            flatten: true
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/sponsors')),
        gulp.src('assets/images/partner/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 720,
                            rename: {
                                extname: '.jpg'
                            },
                            flatten: true
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/partner')), gulp.src('assets/images/backgrounds/*.{jpg,png,PNG}').pipe(
            $.responsive(
                {
                    '*.{jpg,png,PNG}': [
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg'
                            },
                            flatten: true
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 85,
                    // Strip all metadata
                    withMetadata: false,
                    // Do not emit the error when image is enlarged.
                    errorOnEnlargement: false
                }
            )
        ).pipe(gulp.dest('dist/images/backgrounds'))])
});