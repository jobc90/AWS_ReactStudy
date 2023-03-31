class ProfileEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProfileEvent();
        }
        return this.#instance;
    }

    addEventMainChange() {
        const profileBackButton = document.querySelector(".profile-back-button");
        profileBackButton.onclick = () => {
            const mainContainers = document.querySelectorAll(".main-container")
            mainContainers.forEach(mainContainer => {
                mainContainer.classList.toggle("main-hidden")
            });
        };
    }
}