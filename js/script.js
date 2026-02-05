const TEAM_CSV_URL = "YOUR_PUBLIC_CSV_URL";

async function loadTeams() {
  const res = await fetch(TEAM_CSV_URL);
  const data = await res.text();

  const rows = data.split("\n").slice(1);
  const teamList = document.getElementById("teamList");

  rows.forEach(row => {
    const cols = row.split(",");
    if (cols[0]) {
      const li = document.createElement("li");
      li.textContent = cols[0]; // Team Name
      teamList.appendChild(li);
    }
  });

  document.getElementById("teamCount").textContent = rows.length;
}

loadTeams();

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});


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

