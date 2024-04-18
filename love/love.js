document.getElementById('loveForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get sender's and receiver's names from the form
  var senderName = document.getElementById('sender').value;
  var receiverName = document.getElementById('receiver').value;

  // Set sender's and receiver's names in the love card
  document.getElementById('senderName').textContent = senderName;
  document.getElementById('receiverName').textContent = receiverName;
});
\


