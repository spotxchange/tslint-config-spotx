module.exports = {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "interface-over-type-literal": false,
        "max-line-length": [true, 140],
        "no-angle-bracket-type-assertion": false,
        "no-empty": false,
        "no-reference": false,
        "no-string-literal": false,
        "object-literal-key-quotes": false,
        "object-literal-sort-keys": false,
        "only-arrow-functions": false,
        "one-line": false,
        "one-variable-per-declaration": false,
        "prefer-const": false,
        "prefer-for-of": false,
        "quotemark": false,
        "trailing-comma": false,
        "typedef": [
            true,
            "call-signature",
            "property-declaration",
            "arrow-call-signature",
            "arrow-parameter",
            "member-variable-declaration"
        ],
        "variable-name": [true, "allow-leading-underscore"]
    },
    "rulesDirectory": []
};
