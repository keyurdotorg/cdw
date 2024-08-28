const projectDetails = {
    project1: {
        title: "AI-Powered Analytics Dashboard",
        description: "A sophisticated real-time analytics dashboard that leverages machine learning algorithms to predict market trends and provide actionable insights for businesses.",
        features: [
            "Real-time data processing and visualization",
            "Machine learning-based predictive analytics",
            "Customizable dashboards and reports",
            "Integration with multiple data sources"
        ],
        technologies: "Python, TensorFlow, React, D3.js, AWS"
    },
    project2: {
        title: "Blockchain Supply Chain Solution",
        description: "A decentralized application (DApp) built on Ethereum to enhance transparency and traceability in supply chain management, ensuring product authenticity and reducing fraud.",
        features: [
            "Smart contract-based product tracking",
            "Immutable record of supply chain events",
            "Integration with IoT devices for automated data input",
            "User-friendly interface for stakeholders"
        ],
        technologies: "Solidity, Ethereum, Web3.js, React, Node.js"
    },
    project3: {
        title: "IoT Smart Home System",
        description: "An integrated IoT solution for home automation, featuring energy optimization, security monitoring, and voice-controlled assistants to enhance comfort and efficiency in modern homes.",
        features: [
            "Central hub for controlling all smart devices",
            "AI-powered energy optimization",
            "Advanced security features with real-time alerts",
            "Voice control integration with popular assistants"
        ],
        technologies: "Raspberry Pi, Python, MQTT, React Native, TensorFlow Lite"
    }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTechnologies = document.getElementById("modalTechnologies");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", function() {
        const project = projectDetails[this.dataset.project];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
        modalTechnologies.textContent = project.technologies;
        modal.style.display = "block";
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}