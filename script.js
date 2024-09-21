function showSection(sectionId) {
    // Fela allar undirsíður
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Sýna valda undirsíðu
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
function showSection(sectionId) {
    // Fela allar undirsíður
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Sýna valda undirsíðu
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Sjálfkrafa sýna forsíðuna þegar síðan er opnuð
window.onload = function() {
    showSection('home');
};
