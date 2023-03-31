class ManagerEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ManagerEvent();
        }
        return this.#instance;
    }

    addEventMainChange() {
        const profileButton = document.querySelector(".profile-photo");
        profileButton.onclick = () => {
            const mainContainers = document.querySelectorAll(".main-container")
            mainContainers.forEach(mainContainer => {
                mainContainer.classList.toggle("main-hidden")
            });
        };
    }

    addEventAddTask() {
        const modalContainers = document.querySelectorAll(".modal-container");
        const addTaskButton = document.querySelector(".add-task-button");
        addTaskButton.onclick = () => {
            for (let i = 0; i < modalContainers.length; i++) {
                const modalContainer = modalContainers[i];
                if(modalContainer.querySelector(".add-task-modal")) {
                    modalContainer.classList.remove("modal-hidden");
                }else {
                    modalContainer.classList.add("modal-hidden");
                }
            }
        }
    }

    addEventShowTask() {
        const taskContainers = document.querySelectorAll(".content-container");
        taskContainers.forEach((taskContainer, index) => {
            taskContainer.onclick = function() {
                console.log(`Clicked on task container ${index}`);
                this.classList.add("active");
            };
        });
    }

    addEventcheckTask() {
        const modalContainers = document.querySelectorAll(".modal-container");
        const taskCheckButton = document.querySelector(".content-check-button");
        taskCheckButton.onclick = () => {
            for (let i = 0; i < modalContainers.length; i++) {
                const modalContainer = modalContainers[i];
                if(modalContainer.querySelector(".modal-section")) {
                    modalContainer.classList.remove("modal-hidden");
                }else {
                    modalContainer.classList.add("modal-hidden");
                }
            }
        }
    }
      
      
      
      
      
}

class ManagerService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ManagerService();
        }
        return this.#instance;
    }
}