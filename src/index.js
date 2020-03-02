const server = require('./server');

function init() {
  try {
    server.listen();
  } catch (err) {
    console.error('Init failed:', err.stack);
    process.exit(1); // eslint-disable-line no-process-exit
  }
}

init();
