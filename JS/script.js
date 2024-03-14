document.addEventListener("DOMContentLoaded", function () {
  // Hide all sections initially
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Function to show selected section
  function showSection(sectionId) {
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }

  // Event listener for dropdown change
  const sectionSelector = document.getElementById("sectionSelector");
  sectionSelector.addEventListener("change", function () {
    const selectedSection = sectionSelector.value;
    showSection(selectedSection);
  });

  // Show the initially selected section
  const initialSection = sectionSelector.value;
  showSection(initialSection);
});
