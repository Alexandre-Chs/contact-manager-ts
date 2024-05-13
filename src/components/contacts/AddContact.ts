const button = document.querySelector("#add-contact-button");
const modal = document.createElement("div");
modal.innerHTML = `
    <div class="modal text-white absolute top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md">
        <div>
            <h2>Add Contact</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <button>Add</button>
            <button id='close-modal'>Close</button>
        </div>    
    </div>
`;

button?.addEventListener("click", () => {
  document.body.appendChild(modal);

  const closeModal = document.querySelector("#close-modal");
  closeModal?.addEventListener("click", () => {
    modal.remove();
  });
});
