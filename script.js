const dateInput = document.querySelector("#appointment-date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;
document.querySelector("#current-year").textContent = today.getFullYear();

document.querySelector("#booking-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    document.querySelector("#form-message").textContent = "Demonstração concluída. Nenhum dado foi enviado ou armazenado.";
});
