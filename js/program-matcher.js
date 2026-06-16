// ===================================
// NGO PROGRAM MATCHER
// ===================================

const programButtons =
document.querySelectorAll(".program-btn");

const programResult =
document.getElementById("programResult");

const programs = {

    "Education":
    `
    <h3>Education Support Initiative</h3>
    <br>
    ✓ Teaching Children<br>
    ✓ Mentoring Students<br>
    ✓ Organizing Book Drives
    `,

    "Hunger Relief":
    `
    <h3>Food Distribution Program</h3>
    <br>
    ✓ Community Food Drives<br>
    ✓ Meal Distribution<br>
    ✓ Hunger Awareness Campaigns
    `,

    "Women's Hygiene":
    `
    <h3>Hygiene Awareness Initiative</h3>
    <br>
    ✓ Awareness Campaigns<br>
    ✓ Sanitary Product Distribution<br>
    ✓ Community Workshops
    `,

    "Clothing Distribution":
    `
    <h3>Clothing Support Program</h3>
    <br>
    ✓ Collect Donations<br>
    ✓ Sorting & Distribution<br>
    ✓ Community Outreach
    `,

    "Animal Welfare":
    `
    <h3>Animal Care Initiative</h3>
    <br>
    ✓ Feeding Drives<br>
    ✓ Awareness Campaigns<br>
    ✓ Animal Rescue Support
    `
};

programButtons.forEach(button => {

    button.addEventListener("click", () => {

        const program =
        button.textContent;

        programResult.innerHTML =
        programs[program];

    });

});