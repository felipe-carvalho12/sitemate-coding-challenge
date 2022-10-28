class ConfirmationDialog {
  constructor(message) {
    this.dialogMessage = message;
    this.dialog = undefined;
    this.confirmButtion = undefined;
    this.cancelButton = undefined;

    this._createDialog();
  }

  getResult() {
    return new Promise((resolve, reject) => {
      if (!this.dialog || !this.confirmButtion || !this.cancelButton) {
        return reject("Something went wrong ):");
      }

      this.confirmButtion.onclick = () => {
        resolve(true);
        this._destroyDialog();
      };

      this.cancelButton.onclick = () => {
        resolve(false);
        this._destroyDialog();
      };
    });
  }

  _createDialog() {
    this.dialog = document.createElement("dialog");

    const dialogMessage = document.createElement("p");
    dialogMessage.classList.add("message");
    dialogMessage.innerText = this.dialogMessage;

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    this.confirmButtion = document.createElement("button");
    this.confirmButtion.classList.add("confirm-button");
    this.confirmButtion.innerText = "Yes";

    this.cancelButton = document.createElement("button");
    this.cancelButton.classList.add("cancel-button");
    this.cancelButton.innerText = "Cancel";

    buttonGroup.append(this.confirmButtion, this.cancelButton);

    this.dialog.append(dialogMessage, buttonGroup);

    document.body.append(this.dialog);

    this.dialog.showModal();
  }

  _destroyDialog() {
    this.dialog.remove();
    delete this;
  }
}
