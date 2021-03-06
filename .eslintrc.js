module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": ["airbnb"],
    "plugins": [
        "import",
    ],
    "rules": {
        "func-names": ["error", "never"],
        "indent": [1, 4, { "SwitchCase": 1 }],
        "global-require": ["off"],
        "consistent-this": [1, "self"],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "no-use-before-define": ["off", { "functions": false }],
        "import/extensions": [1, "never"],
        "import/no-absolute-path": ["off"],
        "import/prefer-default-export": ["off"],
        "import/no-unresolved": ["error", {"ignore": ["getMongoConnection"]}],
        "no-param-reassign": ["warn"],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [2, "single", { "avoidEscape": true }],
        "semi": [
            "error",
            "always"
        ]
    },
    "settings": {
        "import/resolver": {
            "babel-module": {}
        },
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};