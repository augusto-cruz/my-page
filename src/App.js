import React, { Component } from 'react';
import api from './services/api';
import Repos from './components/repos';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default class App extends Component {

  state = {
    myData: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await api.get();
      this.setState({ myData: response.data });
    }
    catch (exe) {
      alert(exe);
    }
  }

  render() {

    const { myData } = this.state;

    return (
      <main>

        <header>
          <div className="header-content">
            <img src={myData.avatar_url} alt="Augusto Cruz"></img>

            <h3>
              <strong>Augusto Cruz</strong>
            </h3>
            <p>{myData.bio}</p>
          </div>

          

          <div class="social-button">

            <a href="https://github.com/augusto-cruz" target="_blank" className="button github">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/augustoccruz/" target="_blank" className="button linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://codepen.io/augusto-cruz" target="_blank" className="button codepen">
            <FontAwesomeIcon icon={faCodepen} />
            </a>

          </div>

        </header>

        <Repos />

      </main>
    );
  }
}