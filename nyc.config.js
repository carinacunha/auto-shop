module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/Models",
    "src/Services",
    "src/Controllers"
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
  "all": true
}
