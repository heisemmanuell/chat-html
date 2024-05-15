window.addEventListener('DOMContentLoaded', (event) => {
  const messageContainer = document.getElementById('message-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
      displayMessage('You', message);
      messageInput.value = '';
    }
  });

  function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});