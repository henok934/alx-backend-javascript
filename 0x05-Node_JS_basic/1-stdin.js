/**
 * Displays a message on the STDOUT.
 * @param {String} data The data to display.
 * @author Teklemariam Mossie <https://github.com/henok934>
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  // Check if the user wants to exit
  if (name.toLowerCase() === 'exit') {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  } else {
    process.stdout.write('What is your name?\n');
  }
});

// Handle program termination
process.on('SIGINT', () => {
  process.stdout.write('\nThis important software is now closing\n');
  process.exit();
});
