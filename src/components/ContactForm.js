import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    errors: [],
    fileNames: [],
    fileInput: React.createRef(),
    status: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleInputFileChange = (e) => {
    const loadedFiles = [...e.target.files];
    const fileNames = [];
    loadedFiles.map((e) => {
      fileNames.push(e.name);
      return null;
    });

    this.setState({ fileNames: [...this.state.fileNames, ...fileNames] });
  };

  handleModalClose = () => {
    if (typeof this.props.closeModal === "function") {
      this.props.closeModal();
    }
  };

  handleInfoModal = (status) => {
    if (typeof this.props.handleInfoModal === "function") {
      this.props.handleInfoModal(status);
    }
  };

  handleClearForm = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    if (this.props.type === "element") {
      messageInput.value = "";
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    const { name, phone } = this.state;

    if (name.length < 3 || phone.length < 9) {
      errors.push(
        "Pole imię i nazwisko musi składać się z co najmniej 3. znaków, a pole numer telefonu z co najmniej 9. cyfr."
      );
      this.setState({
        errors,
      });

      return;
    }

    if (this.props.type !== "element") {
      const application = {
        name: this.state.name,
        offer_name: this.props.offer_name,
        email: this.state.email,
        phone: this.state.phone,
        position: this.props.position,
      };

      const fileInput = document.getElementById("file");

      fetch(
        "http://panel.dmka.allan690.usermd.net/api/create/job_applications",
        {
          method: "POST",
          body: JSON.stringify(application),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const id = data.id;

          const link = `http://panel.dmka.allan690.usermd.net/api/media/job_applications/${id}`;

          const formdata = new FormData();
          for (let i = 0; i < fileInput.files.length; i++) {
            formdata.append(
              "attachments[]",
              fileInput.files[i],
              fileInput.files[i].name
            );
          }

          const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
          };

          fetch(link, requestOptions)
            .then((response) => {
              response.text();
              console.log(response.status);
              const status = response.status;
              console.log(status);
              this.handleInfoModal(status);
            })
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        })
        .catch((err) => {
          console.log(err);
        });

      this.handleModalClose();
    } else {
      const message = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      };

      fetch("http://panel.dmka.allan690.usermd.net/api/create/contact_forms", {
        method: "POST",
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((result) => {
          const status = result.id;
          console.log(status);
          this.handleInfoModal(status);
        })
        .catch((error) => console.log("error", error));
    }

    this.handleClearForm();
  };

  render() {
    return (
      <form
        className={
          this.props.type === "element" ? "form slide-left" : "form modal"
        }
        onSubmit={this.handleFormSubmit}
      >
        <h2 className="form__header">
          {this.props.type === "element" ? "Formularz kontaktowy biuro" : "Aplikuj"}
        </h2>

        {this.props.type === "element" ? null : (
          <i className="far fa-times-circle" onClick={this.handleModalClose} />
        )}

        <div className="form__field">
          <i className="fas fa-user" />
          <input
            id="name"
            onChange={this.handleChange}
            name="name"
            type="text"
            className="form__input--name"
            placeholder="np. Jan Kowalski"
          />
        </div>

        <div className="form__field">
          <i className="fas fa-mobile-alt" />
          <input
            id="phone"
            type="number"
            onChange={this.handleChange}
            name="phone"
            className="form__input--phone"
            placeholder="np. +48 000 000 000"
          />
        </div>

        <div className="form__field">
          <i className="fas fa-at" />
          <input
            id="email"
            type="email"
            onChange={this.handleChange}
            name="email"
            className="form__input--email"
            placeholder="np. j.kowalski@portal.pl"
          />
        </div>

        {this.props.type === "element" ? (
          <div className="form__field">
            <i className="fas fa-pencil-alt" />
            <textarea
              id="message"
              onChange={this.handleChange}
              name="message"
              className="form__input--message"
              placeholder="Tutaj wpisz swoją wiadomość"
            />
          </div>
        ) : null}

        {this.props.type === "element" ? null : (
          <div className="form__field">
            <label className="form__input__fileLoader--label">
              {" "}
              <i className="fas fa-file-upload" /> Wybierz pliki
              <input
                type="file"
                multiple
                className="form__input__fileLoader"
                name="file"
                id="file"
                ref={this.state.fileInput}
                onChange={(e) => {
                  this.handleInputFileChange(e);
                }}
              />
            </label>
            <div className="form__input__files">
              {this.state.fileNames.length > 0 ? (
                this.state.fileNames.map((e, i) => {
                  return (
                    <p className="form__input__file" key={i}>
                      {e}
                    </p>
                  );
                })
              ) : (
                <p className="form__input__file">
                  Aby załączyć więcej plików, zaznacz je równocześnie w okienku
                  wyboru.
                </p>
              )}
            </div>
          </div>
        )}
        {this.state.errors.length > 0 ? (
          <p className="form__errors">{this.state.errors.map((e) => e)}</p>
        ) : null}
        <button className="form__submit" onClick={this.handleFormSubmit}>
          <i className="fas fa-arrow-circle-up" />
          Wyślij
        </button>
      </form>
    );
  }
}

export { ContactForm };
