module.exports = {
  root: true,
  "extends": [
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    '@react-native-community'
  ],
  "plugins": ["react", "prettier", "react-hooks"],
  "settings": {
    "react": {
      "version": "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  "rules": {
    "prettier/prettier": ["error"],
    "react/jsx-wrap-multiline": 0,
    "react/jsx-alignment": 0,
    "react/jsx-no-lambda": 0,
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "interface-over-type-literal": 0,
    "interface-name": 0,
    "no-console": 0,
    "no-empty-interface": 0,
    "member-access": 0,
    "no-var-requires": 0,
    "default-case": 0,
    "no-unused-expressions": "off"
  }
}
