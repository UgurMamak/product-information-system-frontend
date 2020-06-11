import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          placeholder="Adınız ve Soyadınız*"
          required
          className="common-input mt-20"
        />
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder="Email adresiniz*"
          required
          className="common-input mt-20"
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          placeholder="Mesaj Konusu*"
          required
          className="common-input mt-20"
        />

        <input
          type="file"
          required
          className="common-input mt-20"
        />

        <textarea
          placeholder="Message"
          className="common-input mt-20"
          required
        ></textarea>
<br/>
        <button
          onClick={this.handleSave}
          className="view-btn color-2 mt-20 w-100"
        >
          <span>Gönder</span>
        </button>
      </form>
    );
  }
}
