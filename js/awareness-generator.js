// ===================================
// AWARENESS GENERATOR
// ===================================

const generateBtn =
document.getElementById("generateBtn");

const topicInput =
document.getElementById("topicInput");

const generatedContent =
document.getElementById("generatedContent");

generateBtn.addEventListener("click", () => {

    const topic =
    topicInput.value.trim().toLowerCase();

    if(topic === ""){

        generatedContent.innerHTML =
        "Please enter a topic.";

        return;

    }

    let content = "";

    if(topic.includes("education")){

        content =
        "Education empowers individuals, strengthens communities, and creates opportunities for a brighter future. Together, we can ensure every child has access to quality learning.";

    }

    else if(
        topic.includes("hygiene") ||
        topic.includes("women")
    ){

        content =
        "Maintaining proper menstrual hygiene is essential for health, dignity, and confidence. Awareness and education can help break myths and empower women.";

    }

    else if(
        topic.includes("food") ||
        topic.includes("hunger")
    ){

        content =
        "No one should sleep hungry. Community support, food distribution, and awareness can help create a hunger-free society.";

    }

    else if(
        topic.includes("animal")
    ){

        content =
        "Every animal deserves care, food, and compassion. Together, we can create a safer environment for stray and vulnerable animals.";

    }

    else if(
        topic.includes("clothes") ||
        topic.includes("clothing")
    ){

        content =
        "Donating clothes can bring warmth, dignity, and hope to those in need. Small acts of kindness create lasting impact.";

    }

    else{

        content =
        `Awareness about ${topic} can inspire positive change, strengthen communities, and encourage people to take meaningful action for a better future.`;

    }

    generatedContent.innerHTML = `
        <h3>Generated Awareness Message</h3>
        <br>
        <p>${content}</p>
    `;

});