import React, { Component } from 'react';

import './Request.scss';

class Request extends Component {
  render() {
    return (
      <div>
        <h3>Request</h3>

        <form>
          <h1>Fill the form below to request for a loan.</h1>
          <div class="contentform">
            <div id="sendmessage">
              {' '}
              Your message has been sent successfully. Thank you.{' '}
            </div>

            <div class="leftcontact">
              <div class="form-group">
                <p>
                  Company<span>*</span>
                </p>
                <input type="text" name="nom" id="nom" data-rule="required" />
                <div class="validation" />
              </div>

              <div class="form-group">
                <p>
                  Address <span>*</span>
                </p>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  data-rule="required"
                />
                <div class="validation" />
              </div>
            </div>

            <div class="rightcontact">
              <div class="form-group">
                <p>
                  Amount Required <span>*</span>
                </p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  data-rule="maxlen:10"
                />
                <div class="validation" />
              </div>
              <div class="form-group">
                <p>
                  Loan term <span>*</span>
                </p>
                <input type="email" name="email" id="email" data-rule="email" />
                <div class="validation" />
              </div>
            </div>
          </div>
          <button type="submit" class="bouton-contact">
            Request
          </button>
        </form>
      </div>
    );
  }
}

export default Request;
