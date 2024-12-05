const { spawn } = require('child_process');

// Start the client
const client = spawn('npm', ['run', 'dev-client'], { stdio: 'inherit', shell: true });

// Start the server
const server = spawn('npm', ['run', 'dev-server'], { stdio: 'inherit', shell: true });

// Handle termination signals
process.on('SIGINT', () => {
  client.kill('SIGINT');
  server.kill('SIGINT');
  process.exit();
});
