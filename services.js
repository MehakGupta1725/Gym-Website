document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const serviceName = card.querySelector("h2").innerText;
      alert(`Learn more about ${serviceName}!`);
    });
  });
});
