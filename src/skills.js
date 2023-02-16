function Skills() {
    return (
        <>
        <h1 id="page-title">Skills</h1>
        <div id="skills-container">
          <div class="skill-container">
            <h4 class="skill-header">Golang</h4>
            <progress value="100" max="100"></progress>
          </div>
          <div class="skill-container">
            <h4 class="skill-header">Terraform</h4>
            <progress value="90" max="100"></progress>
          </div>
          <div class="skill-container">
            <h4 class="skill-header">JavaScript</h4>
            <progress value="70" max="100"></progress>
          </div>
          <div class="skill-container">
            <h4 class="skill-header">HTML</h4>
            <progress value="65" max="100"></progress>
          </div>
        </div>
        </>);
}
export default Skills;