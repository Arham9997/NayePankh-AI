// ===================================
// NAYEPANKH AI CHATBOT
// ===================================

const sendBtn =
document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

const chatBox =
document.getElementById("chatBox");

// ===================================
// SEND MESSAGE
// ===================================

function sendMessage(){

    const message =
    userInput.value.trim();

    if(message === "") return;

    addUserMessage(message);

    userInput.value = "";

    setTimeout(() => {

        const reply =
        getBotResponse(message);

        addBotMessage(reply);

    }, 700);

}

// ===================================
// USER MESSAGE
// ===================================

function addUserMessage(message){

    const div =
    document.createElement("div");

    div.classList.add("user-message");

    div.textContent = message;

    chatBox.appendChild(div);

    scrollToBottom();

}

// ===================================
// BOT MESSAGE
// ===================================

function addBotMessage(message){

    const div =
    document.createElement("div");

    div.classList.add("bot-message");

    div.textContent = message;

    chatBox.appendChild(div);

    scrollToBottom();

}

// ===================================
// SCROLL CHAT
// ===================================

function scrollToBottom(){

    chatBox.scrollTop =
    chatBox.scrollHeight;

}

// ===================================
// BOT RESPONSES
// ===================================

function getBotResponse(message){

    const text =
    message.toLowerCase();

    // Volunteer

    if(
        text.includes("volunteer") ||
        text.includes("join")
    ){

        return "You can volunteer with NayePankh Foundation through education support, awareness campaigns, community outreach, fundraising, and event management activities.";

    }

    // Donate

    if(
        text.includes("donate") ||
        text.includes("donation")
    ){

        return "You can support NayePankh Foundation through financial contributions, skill-based volunteering, or by participating in awareness initiatives.";

    }

    // Education

    if(
        text.includes("education")
    ){

        return "NayePankh supports education initiatives by helping underprivileged children through learning programs, mentoring, and educational resources.";

    }

    // Women Hygiene

    if(
        text.includes("hygiene") ||
        text.includes("women")
    ){

        return "NayePankh conducts menstrual hygiene awareness programs and distributes sanitary products to empower women and girls.";

    }

    // Hunger Relief

    if(
        text.includes("food") ||
        text.includes("hunger")
    ){

        return "The foundation regularly conducts food distribution drives to support underprivileged families and individuals facing food insecurity.";

    }

    // Animal Welfare

    if(
        text.includes("animal")
    ){

        return "NayePankh also supports animal welfare initiatives by feeding and caring for stray animals.";

    }

    // About NGO

    if(
        text.includes("nayepankh") ||
        text.includes("foundation") ||
        text.includes("about")
    ){

        return "NayePankh Foundation is a youth-led NGO dedicated to education, hygiene awareness, hunger relief, clothing distribution, and community empowerment.";

    }

    // Contact

    if(
        text.includes("contact")
    ){

        return "You can reach NayePankh Foundation through the Contact section of this website or connect via social media channels.";

    }

    // Greetings

    if(
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ){

        return "Hello! I'm NayePankh AI. Ask me about volunteering, programs, awareness campaigns, or the foundation's impact.";

    }

    // Default

    return "Thank you for your question. NayePankh AI is here to assist with information about volunteering, awareness campaigns, community programs, and social impact initiatives.";

}

// ===================================
// BUTTON CLICK
// ===================================

sendBtn.addEventListener(
    "click",
    sendMessage
);

// ===================================
// ENTER KEY
// ===================================

userInput.addEventListener(
    "keypress",
    function(e){

        if(e.key === "Enter"){

            sendMessage();

        }

    }
);