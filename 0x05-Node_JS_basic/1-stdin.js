// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if input is received from command line argument
if (process.argv[2]) {
  const name = process.argv[2];
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
} else {
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
}
