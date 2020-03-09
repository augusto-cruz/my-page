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

            <p>
              <strong>Augusto Cruz</strong>
            </p>
            <p>{myData.bio}</p>
          </div>

          

          <div class="social-button">

            <a className="button github">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a className="button linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a className="button codepen">
            <FontAwesomeIcon icon={faCodepen} />
            </a>

          </div>

        </header>

        <Repos />

      </main>
    );
  }
}