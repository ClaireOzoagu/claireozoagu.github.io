/*
  ============================================================
  SITE SETTINGS — edit this file to update videos and links.
  ============================================================

  VIDEOS
  To swap a video, paste the new YouTube link between the quotes.
  Any YouTube link format works (youtube.com/watch?v=..., youtu.be/...).
  "start" is the second the video should begin at (0 = the beginning).
  Example: 1 minute 7 seconds = 67.

  LINKS
  Paste your own links between the quotes. Leave "" to hide a button.
*/
window.SITE = {
  videos: {
    // Onboarding Playbook short walkthrough (5:36). Paste the Google Drive link here
    // (sharing: "Anyone with the link") and it plays on the case study page.
    onboarding: {
      url: "https://drive.google.com/file/d/1naFyGKnu2FOcTd7AKQmIrqWdaFLG_JXt/view?usp=sharing",
      start: 0,
      title: "Customer Onboarding Playbook: short walkthrough"
    },
    onboardingFull: {
      url: "https://youtu.be/M9QFbwyFA_M",
      start: 0,
      title: "Customer Onboarding Playbook: full walkthrough"
    },
    bukkibooks: {
      url: "https://drive.google.com/file/d/1_bhiPb22aqJa0HzD7v4mmFnmR2TUX2sP/view?usp=drive_link",
      start: 0,
      title: "BukkiBooks: catching silent churn (walkthrough)"
    },
    ijeoma: {
      url: "https://drive.google.com/file/d/1bYU436oq6e0n8YpJzwAwsUDDG6ciQQh0/view?usp=sharing",
      start: 0,
      title: "Ijeoma Home & Living: customer journey walkthrough"
    }
  },

  links: {
    email: "amarachukwuozoagu@gmail.com",
    linkedin: "https://www.linkedin.com/in/ozoagu-amarachukwu-claire-virtual-assistant/",
    calendly: "https://calendly.com/amarachukwuozoagu/let-s-discuss-how-i-can-support-you",
    // Paste a shareable link to your CV (Google Drive "Anyone with the link") to show the CV button.
    cv: "",
    // Onboarding Playbook PDFs (Google Drive "Anyone with the link"). Leave "" to hide the button.
    onboardingCarousel: "",
    onboardingCaseStudy: "onboarding-playbook.pdf"
  }
};
