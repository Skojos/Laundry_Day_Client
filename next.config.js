// next.config.js

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({
  // any other next.js settings here
});
