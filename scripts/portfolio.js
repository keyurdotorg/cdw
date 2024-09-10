const projectDetails = {
    project1: {
        title: "Inventory Management Development",
        description: "Sophisticated microservices and API development for inventory management, designed to handle high volumes of data and provide real-time updates.",
        features: [
            "Real-time inventory tracking",
            "Automated reordering management",
            "Integration with ERP systems",
            "User-friendly interface for warehouse management"
        ],
        technologies: "Java, Spring Boot, Hibernate, AWS, Docker, Kubernetes, Jenkins, CI/CD"
    },
    project2: {
        title: "Customizable Power BI Dashboard",
        description: "A customizable Power BI dashboard designed to provide various Fortune 500 companies real-time insights into their property risk management, with a focus on ease of use and scalability.",
        features: [
            "Customizable dashboards with user-defined parameters",
            "User-friendly interface for property risk management",
            "Company, user and dashboard level security access management",
            "Row level security for database"
        ],
        technologies: "Power BI, SQL, C#, Azure, Rest API"
    },
    project3: {
        title: "Cellular Connectivity Remediation",
        description: "Cellular connectivity remediation inside large domestic and international buildings for a Fortune 50 client.",
        features: [
            "Project management and execution",
            "Weekly status reporting",
            "Vendor coordination and management",
            "Project closeout"
        ],
        technologies: "Microsoft Project, Excel, Power BI, "
    },
    project4: {
        title: "Machine-to-Machine (M2M) Cellular Data Analytics",
        description: "Extract and analyze data from Android devices to provide better application support and management insights",
        features: [
            "Android API development",
            "Wireless network data collection",
            "Geospatial data analysis",
            "Data visualization"
        ],
        technologies: "Android API, SQL, VB.NET, Power BI, Splunk"
    },
    project5: {
        title: "Database Migration from Cassandra to Google BigQuery",
        description: "Migrate a large data warehouse from Cassandra to Google BigQuery for a Fortune 50 client.",
        features: [
            "Data modeling and design",
            "Data extraction and transformation",
            "Data loading and integration",
            "Microservice development"
        ],
        technologies: "Java, Spring Boot, Hibernate, BigQuery, Google Cloud Platform, Docker, Kubernetes, Jenkins, CI/CD"
    }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTechnologies = document.getElementById("modalTechnologies");
const closeBtn = document.getElementsByClassName("closeModal")[0];

document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", function() {
        const project = projectDetails[this.dataset.project];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
        modalTechnologies.innerHTML = project.technologies.split(',').map(tech => `<li>${tech}</li>`).join("");
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