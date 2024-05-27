// List of first names and last names
const firstNames = ['Joshy', 'Omary', 'Alice', 'Juma', 'Charlie', 'David', 'kindoki', 'Frank', 'AnnGrace', 'Robson'];
const lastNames = ['lucas', 'Jimmy', 'Johnson', 'Williams', 'mganga', 'Jones', 'Joseph', 'Davis', 'Garcia', 'shalon'];

// Function to generate email addresses
function generateEmails(numEmails) {
  const emails = [];
  let counter = 1;

  for (let i = 0; i < numEmails; i++) {
    // Get a first name and a last name
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];
    
    // Generate email
    const email = `${firstName.toLowerCase()}${lastName.toLowerCase()}${counter}@gmail.com`;

    // Add email to the list
    emails.push(email);

    // Increment the counter
    counter++;
  }

  //here i need to  change the numbes to be 
  return emails;
}

// Generate 100 emails
const emails = generateEmails(100);

// Print the emails
emails.forEach(email => console.log(email));
