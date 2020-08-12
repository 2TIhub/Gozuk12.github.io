let url = 'https://api.hypixel.net/guild?key=42d03e58-1c4b-4eb0-8752-f8f57e96a129&name=scorpionsquad';
 
fetch(url)
// Send an HTTP request to the API using fetch.
.then(res => res.json())
// Parse the data as JSON.
.then((out) => {
  document.getElementById("totalmembers").innerHTML = (out.guild.members.length);
  console.log("Total Members:" + out.guild.members.length);
  // Retrieve the member count.
  // Use this data and output it somewhere in your HTML... (Perhaps using HTML DOM?)
})
.catch(err => { throw err });
// For debugging/ error-handling purposes.
