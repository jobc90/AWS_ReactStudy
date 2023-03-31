class ModalEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ModalEvent();
        }
        return this.#instance;
    }
    
    addEventCancelClick() {
        const modalCancelButton = document.querySelector(".modal-cancel-button");
        modalCancelButton.onclick = () => {
            ModalService.getInstance().closeModal();
        }
    }

    addEventRemoveOKClick(removeIndex) {
        const modalOKButton = document.querySelector(".modal-ok-button");
        modalOKButton.onclick = () => {
            TodoService.getInstance().todoList.splice(removeIndex, 1);
            ModalService.getInstance().closeModal();
            TodoService.getInstance().updateLocalStorage();
        }
    }

    addEventAddTodoKeyUp() {
        const modifyInput = document.querySelector(".modifycontent");
        modifyInput.onkeyup = () => {
            if(window.event.keyCode == 13) {
                const modalOKButton = document.querySelector(".modal-ok-button");
                modalOKButton.click();
            }
        }
    }

    addEventModifyOKClick(modifyIndex) {
        const modalOKButton = document.querySelector(".modal-ok-button");
        modalOKButton.onclick = () => {
            const modifyInput = document.querySelector(".modifycontent");
            TodoService.getInstance().todoList[modifyIndex].todoContent = modifyInput.value;
            ModalService.getInstance().closeModal();
            TodoService.getInstance().updateLocalStorage();
        }

    }
}



class ModalService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ModalService();
        }
        return this.#instance;
    }

    showModal() {
        const modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.remove("modal-hidden");
    }

    closeModal() {
        const modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.add("modal-hidden");
    }

    showRemoveModal(removeIndex) {
        const modalSection = document.querySelector(".modal-section");
        modalSection.innerHTML = `
            <div class="modal-header">
                <h1 class="modal-title">ToDo 삭제</h1>
            </div>
            <div class="modal-main">
                <p class="modal-message">ToDo를 삭제하시겠습니까?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="modal-ok-button">확인</button>
                <button type="button" class="modal-cancel-button">취소</button>
            </div>
        `;
        ModalEvent.getInstance().addEventRemoveOKClick(removeIndex);
        ModalEvent.getInstance().addEventCancelClick();
        this.showModal();
        
    }

    showModifyModal(modifyIndex) {
        const todoObj = TodoService.getInstance().todoList[modifyIndex];
        const modalSection = document.querySelector(".modal-section");
        modalSection.innerHTML = `
            <div class="modal-header">
                <h1 class="modal-title">ToDo 수정</h1>
            </div>
            <div class="modal-main">
                <p class="modal-message">${todoObj.todoDate} ${todoObj.todoDateTime}</p>
                <input class="modifycontent" value="${todoObj.todoContent}">
            </div>
            <div class="modal-footer">
                <button type="button" class="modal-ok-button">확인</button>
                <button type="button" class="modal-cancel-button">취소</button>
            </div>
        `;
        ModalEvent.getInstance().addEventAddTodoKeyUp();
        ModalEvent.getInstance().addEventModifyOKClick(modifyIndex);
        ModalEvent.getInstance().addEventCancelClick();
        this.showModal();
        
    }
}