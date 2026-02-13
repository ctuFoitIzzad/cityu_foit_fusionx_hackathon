// Load Team Tags from CSV
const TEAM_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSc0ZlL_ci5wH2jjABfU6WchjB8abDTVS9xh4ryzMq_8UiL2AUBEvQ_mnF-4iSufwqW2Y4DL2ZVmYMV/pub?gid=461577163&single=true&output=csv";

async function loadTeams() {
  try {
    const res = await fetch(TEAM_CSV_URL);
    const text = await res.text();

    const rows = text.trim().split("\n");
    rows.shift(); // remove header row

    const teamTags = document.getElementById("teamTags");
    teamTags.innerHTML = "";

    rows.forEach(row => {
      const teamName = row.split(",")[0]?.replace(/"/g, "").trim();
      if (!teamName) return;

      const tag = document.createElement("span");
      tag.className = "team-pill";
      tag.textContent = teamName;

      teamTags.appendChild(tag);
    });

    // Optional: update team counter if exists
    const teamCountEl = document.getElementById("teamCount");
    if (teamCountEl) {
      teamCountEl.textContent = rows.length;
    }

  } catch (err) {
    console.error("Failed to load teams:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTeams);


// FAQ Accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    // Close all items
    document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

    // Toggle current
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

