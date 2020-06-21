module.exports = {
    extends: './node_modules/stylelint-config-recess-order',
    plugins: ['./node_modules/stylelint-scss'],
    ignoreFiles: [
        'node_modules/**',
        'public/**'
    ],
    rules: {
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['appearance'],
                checkPrefixed: true
            }
        ],
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates']
            }
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': false,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': [
            true,
            {
                ignore: 'custom-elements'
            }
        ],
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'use',
                    'extend',
                    'include',
                    'mixin',
                    'function',
                    'for',
                    'if',
                    'return'
                ]
            }
        ],
        'comment-no-empty': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        /*
         * Limit language features
         */
        'color-named': 'never',
        'function-blacklist': [],
        'function-url-no-scheme-relative': true,
        'function-url-scheme-blacklist': [/^http/],
        'number-max-precision': 6,
        'shorthand-property-no-redundant-values': true,
        'value-no-vendor-prefix': true,
        'property-blacklist': ['clip'],
        'property-no-vendor-prefix': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-no-important': true,
        'declaration-property-unit-whitelist': {
            'font-size': ['px', 'Px', 'rem', 'em', 'vw', '%'],
            'line-height': []
        },
        'declaration-property-value-blacklist': {
            border: ['none'],
            'border-style': ['none']
        },
        'declaration-block-single-line-max-declarations': 1,
        'selector-class-pattern': /^(site|str|mod|unq|nav|js|of|var|is|adjust|mt|mb|w|fz|align|func|icn|show|hide|break)-[_a-z0-9]([a-zA-Z0-9]+)?(-[a-z0-9]?([a-zA-Z0-9])+)?(__[a-z0-9]?[a-zA-Z0-9]+)?$|^.*?\.is-.*$/,
        'selector-max-empty-lines': 0,
        'selector-max-id': 1,
        'selector-max-universal': 1,
        'selector-no-qualifying-type': [
            false,
            {
                ignore: ['attribute']
            }
        ],
        'selector-no-vendor-prefix': true,
        'media-feature-name-blacklist': ['max-width'],
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-property-requirelist': {
            'font-face': ['font-display', 'font-family', 'font-style', 'src']
        },

        /*
         * Stylistic issues
         */
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'font-family-name-quotes': 'always-where-recommended',
        'function-comma-newline-after': 'never-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'never-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'string-quotes': 'double',
        'length-zero-no-unit': true,
        'value-keyword-case': 'lower',
        'value-list-comma-newline-after': 'never-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'custom-property-empty-line-before': [
            'always',
            {
                except: 'after-custom-property'
            }
        ],
        'property-case': 'lower',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'rule-empty-line-before': [
            'always',
            {
                ignore: ["after-comment", "first-nested"]
            }
        ],
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'never-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                    'first-nested'
                ],
                ignoreAtRules: ['import', 'include', 'for', 'mixin', 'function', 'keyframes']
            }
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands']
            }
        ],
        'comment-whitespace-inside': 'always',
        indentation: 2,
        linebreaks: 'unix',
        'max-empty-lines': 3,
    },
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true
};
