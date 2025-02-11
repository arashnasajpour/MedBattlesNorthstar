const trialLimit = 5;
let messageCount = 0;

async function handleUserMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessageToChat(userMessage, "user");
    userInput.value = "";
    messageCount++;

    if (messageCount > trialLimit) {
        document.getElementById("paywall").style.display = "flex";
        return;
    }

    addMessageToChat("This is a placeholder response. OpenAI integration will replace this.", "bot");
}

function addMessageToChat(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "message user-message" : "message bot-message";
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("send-button").addEventListener("click", handleUserMessage);
document.getElementById("user-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleUserMessage();
});
