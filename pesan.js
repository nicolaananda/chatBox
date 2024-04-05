document.addEventListener("DOMContentLoaded", (event) => {
  const sendButton = document.getElementById("sendButton");
  const messageInput = document.getElementById("messageInput");
  const messageArea = document.getElementById("messageArea");
  const clearChat = document.getElementById("clearChat");

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add(
        "bg-blue-100",
        "rounded",
        "p-2",
        "mb-2",
        "ml-auto",
        "max-w-xs",
        "break-words",
        "relative"
      );

      const messageText = document.createElement("span");
      messageText.textContent = message;

      const timestamp = document.createElement("span");
      timestamp.classList.add(
        "text-sm",
        "text-gray-600",
        "absolute",
        "bottom-0",
        "right-0",
        "mr-2",
        "mb-1"
      );
      timestamp.textContent = getCurrentTime();

      messageElement.appendChild(messageText);
      messageElement.appendChild(timestamp);

      messageArea.appendChild(messageElement);

      messageInput.value = "";
      messageArea.scrollTop = messageArea.scrollHeight;
    }
  }

  sendButton.addEventListener("click", sendMessage);

  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  clearChat.addEventListener("click", () => {
    messageArea.innerHTML = "";
  });
});

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`;
}
