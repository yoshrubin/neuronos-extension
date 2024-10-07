import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import parser from 'vue-eslint-parser'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

const compat = new FlatCompat({
    baseDirectory: _dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ),
    {
        plugins: {
            vue,
            prettier
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                chrome: true
            },

            parser: parser,
            ecmaVersion: 5,
            sourceType: 'commonjs',

            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },

        rules: {
            'vue/no-v-html': 'off',
            'vue/multi-word-component-names': 'off',
            'prettier/prettier': ['error']
        }
    }
]
