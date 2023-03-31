window.onload = () => {
    ManagerEvent.getInstance().addEventMainChange();
    ManagerEvent.getInstance().addEventShowTask();
    ProfileEvent.getInstance().addEventMainChange();
    ManagerEvent.getInstance().addEventAddTask();
    ModalEvent.getInstance().addEventBackTask();
    ManagerEvent.getInstance().addEventcheckTask();
    ModalEvent.getInstance().modalBackTask();
    
}