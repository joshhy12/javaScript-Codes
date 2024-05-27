// Function to generate random timestamps within a specified date range
function generateTimestamps(numTimestamps) {
    const timestamps = [];
    const startDate = new Date(2024, 4, 17); // May 17, 2024
    const endDate = new Date(2024, 4, 21);   // May 21, 2024
    
    // Calculate the difference in time between the end date and the start date
    const timeDiff = endDate.getTime() - startDate.getTime();
  
    for (let i = 0; i < numTimestamps; i++) {
      // Generate a random time difference within the range
      const randomTimeDiff = Math.floor(Math.random() * timeDiff);
      
      // Create a new date object within the range
      const newDate = new Date(startDate.getTime() + randomTimeDiff);
  
      // Format the date and time
      const year = newDate.getFullYear();
      const month = String(newDate.getMonth() + 1).padStart(2, '0');
      const day = String(newDate.getDate()).padStart(2, '0');
      const hours = newDate.getHours();
      const minutes = String(newDate.getMinutes()).padStart(2, '0');
      const seconds = String(newDate.getSeconds()).padStart(2, '0');
      const period = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const timeZone = 'GMT+3';
  
      // Construct the timestamp
      const timestamp = `${year}/${month}/${day} ${formattedHours}:${minutes}:${seconds} ${period} ${timeZone}`;
  
      // Add the timestamp to the list
      timestamps.push(timestamp);
    }
  
    return timestamps;
  }
  
  // Generate 100 timestamps
  const timestamps = generateTimestamps(100);
  
  // Print the timestamps
  timestamps.forEach(timestamp => console.log(timestamp));
  