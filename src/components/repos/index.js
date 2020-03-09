import React, { Component } from "react";
import api from "../../services/api";
import './styles.css'

export default class Repos extends Component {

    state = {
        repos: []
    }

    componentDidMount() {
        this.getRepos();
    }

    getRepos = async () => {
        try {
            const response = await api.get('/repos');
            this.setState({ repos: response.data });
        }
        catch (exe) {
            alert(exe);
        }
    }

    render() {
        return (
            <div className="repo-list">
                {this.state.repos.map(repo => (
                    <article key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="title">
                            {repo.name}
                        </a>

                        <br />
                        <br />
                        <br />

                        <p>Description: {repo.description}</p>
                        <p>Language: {repo.language}</p>
                    </article>
                ))}

            </div>
        );
    }
}