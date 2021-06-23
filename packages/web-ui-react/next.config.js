const withTM = require("next-transpile-modules")(["@tic-tac-toe/game-state"]);

module.exports = withTM({
  reactStrictMode: true,
});