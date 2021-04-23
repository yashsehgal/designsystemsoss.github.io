
class __LinkDetails {
  
  getDiscordServerURL() {
    return "https://discord.gg/2m244yVTsg".toString()
  }
  getGitHubURL() {
    return "https://github.com/DesignSystemsOSS".toString()
  }

  getProjectData = () => {
    return [
      {
        "project_id": "1",
        "project_title": "Eccentric Touch",
        "project_description": "Suffering from Frontend crises? Here's something that might interest you. Eccentric Touch is a small CSS Library to solve all your frontend issues :)",
        "project_github_url": "https://github.com/DesignSystemsOSS/eccentrictouch",
        "project_stack": "CSS/SCSS"
      },
      {
        "project_id": "2",
        "project_title": "GetResume.io",
        "project_description": "Make Resumes in just one click.",
        "project_github_url": "https://github.com/DesignSystemsOSS/getresume.io",
        "project_stack": "ReactJS, CSS/CSS"
      }
    ]
  }
};

const LinkDetails = new __LinkDetails();
export default LinkDetails;