let messageCount = 0;
const trialLimit = 5;

function handleUserMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessageToChat(userMessage, "user");
    userInput.value = "";
    messageCount++;

    if (messageCount > trialLimit) {
        const paywall = document.getElementById("paywall");
        if (paywall) {
            paywall.style.display = "flex";
            return;
        }
    }

    setTimeout(() => {
        addMessageToChat("This is a trial bot response. Upgrade for full access!", "bot");
    }, 500);
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
