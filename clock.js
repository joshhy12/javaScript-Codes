function printCurrentTime() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString();
  console.log(`Current time: ${timeString}`);
  console.log(`Current date: ${dateString}`);
}

printCurrentTime();
