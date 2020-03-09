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
                        <a href={repo.html_url} target="_blank" className="title">
                            <strong>{repo.name}</strong>
                        </a>

                        <br />
                        <br />

                        <p>Descrição: {repo.description}</p>
                        <p>Linguagem: {repo.language}</p>
                    </article>
                ))}

            </div>
        );
    }
}