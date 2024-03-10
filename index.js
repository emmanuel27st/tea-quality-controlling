const { registerProject } = require('tea-demo-arsen');

console.log("Starting tea-quality-control project...");

const projectInfo = {
    name: "Tea Quality Control Initiative",
    repositoryUrl: "https://github.com/qc/tea-quality"
};

// Registering the quality control project
const projectId = registerProject(projectInfo);

console.log(`Tea-quality-control project registered with ID: ${projectId}`);
