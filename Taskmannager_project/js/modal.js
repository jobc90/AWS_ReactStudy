class ModalEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ModalEvent();
        }
        return this.#instance;
    }

    addEventBackTask() {
        const modalContainers = document.querySelectorAll(".modal-container");
        const taskBackButton = document.querySelector(".task-back-button");
        taskBackButton.onclick = () => {
            for (let i = 0; i < modalContainers.length; i++) {
                const modalContainer = modalContainers[i];
                if(modalContainer.querySelector(".add-task-modal")) {
                    modalContainer.classList.add("modal-hidden");
                }
            }
        }
    }

    modalBackTask() {
        const modalContainers = document.querySelectorAll(".modal-container");
        const modalBackButton = document.querySelector(".modal-back-button");
        modalBackButton.onclick = () => {
            for (let i = 0; i < modalContainers.length; i++) {
                const modalContainer = modalContainers[i];
                if(modalContainer.querySelector(".modal-section")) {
                    modalContainer.classList.add("modal-hidden");
                }
            }
        }
    }
}