// ===================================
// VOLUNTEER RECOMMENDER
// ===================================

const roleButtons =
document.querySelectorAll(".role-btn");

const volunteerResult =
document.getElementById("volunteerResult");

const recommendations = {

    "Student":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Education Mentor<br>
    ✓ Awareness Campaign Volunteer<br>
    ✓ Social Media Support<br>
    ✓ Event Volunteer
    `,

    "Teacher":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Teaching Programs<br>
    ✓ Child Mentorship<br>
    ✓ Learning Workshops<br>
    ✓ Academic Guidance
    `,

    "Doctor":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Health Awareness Drives<br>
    ✓ Hygiene Campaigns<br>
    ✓ Community Health Support<br>
    ✓ Medical Guidance
    `,

    "Designer":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Awareness Posters<br>
    ✓ NGO Branding<br>
    ✓ Social Media Graphics<br>
    ✓ Campaign Design
    `,

    "Developer":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Website Development<br>
    ✓ Technical Support<br>
    ✓ AI Tools Development<br>
    ✓ Digital Solutions
    `,

    "Working Professional":
    `
    <h3>Recommended Roles</h3>
    <br>
    ✓ Fundraising Support<br>
    ✓ Event Management<br>
    ✓ Community Outreach<br>
    ✓ Strategic Planning
    `
};

roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const role = button.textContent;

        volunteerResult.innerHTML =
        recommendations[role];

    });

});