const form = document.querySelector('#form') as HTMLFormElement;
const submitBtn = document.querySelector('#submitBtn') as HTMLButtonElement;
const modalEl = document.querySelector('#modal') as HTMLDivElement;
const modalText = modalEl.querySelector(".modal-text") as HTMLParagraphElement;
const modalButton = modalEl.querySelector(".modal-button") as HTMLButtonElement;
const donationEl = document.querySelector("#donation") as HTMLInputElement;
const confirmationAreaEl = document.querySelector(".confirmation-area") as HTMLDivElement;
const confirmationTextEl = confirmationAreaEl.querySelector(".confirmation-area-text") as HTMLParagraphElement;
checkFormValidity();

function onFormSubmit(): void {
  if (confirmationAreaEl) {
    confirmationAreaEl.classList.remove('is-hidden')
  }
  const donationValue = donationEl.value;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  current.setMonth(current.getMonth()+1);
  const nextMonth = months[current.getMonth()];

  const finalConfirmationText = "We'll ask for your donation of " + donationValue +
   "€ with your newsletter arrive on the first few days of " + nextMonth + ". We plan to send out the newsletter on the first workday of every month."
  confirmationTextEl.innerHTML = finalConfirmationText;
}

function markRequiredAttributes(event: Event): void {
  const element = event.target as HTMLInputElement;
  const errorMsgId = element.getAttribute('aria-describedby');
  const errorMsgEl = document.querySelector('#' + errorMsgId) as HTMLElement;
  const isInputEmpty = !(element as HTMLInputElement).value;
  const isCheckboxUnchecked = (element.type === 'checkbox') && !element.checked
  if(isInputEmpty || isCheckboxUnchecked) {
    element.classList.add("is-required");
    errorMsgEl.style.visibility = "visible";
   }
   else {
    element.classList.remove("is-required");
    errorMsgEl.style.visibility = "hidden";
   }
}

function checkFormValidity(): void {
  submitBtn.disabled = !form.checkValidity();
}

function onFinalSubmit(): void {
  modalText.innerHTML = "Thank you for the donation, we highly appreciate your passion to protect the world around us! Please visit 'About us' section to learn more of how you can help to defend your planet.";
  modalEl.style.display = "block";
  modalButton.addEventListener('click', () => closeModalAndReload());

  console.log('Server part to be implemented!');
}

function onSubscriptionChanged(event: Event): void {
  const target = event.currentTarget as HTMLInputElement;
  if(target && !target.checked) {
    modalText.innerHTML = "We will miss you. You can change your mind any time. Thank you for being part of our mission!";
    modalEl.style.display = "block";
    modalButton.addEventListener('click', () => closeModal());
  }
}

function closeModal(): void {
  modalEl.style.display = "none";
}

function closeModalAndReload(): void {
  window.location.reload();
}