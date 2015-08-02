var context = require.context('./test', true, /.+\.js?$/ ); // /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;



// var testsContext = require.context(".", true, /_test$/);
// testsContext.keys().forEach(testsContext);
