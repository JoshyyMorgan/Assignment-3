import React from 'react'
import './project.css'
const url = 'https://fathomless-escarpment-67497.herokuapp.com/project'
export default class Project extends React.Component{
    constructor(){
        super()
        this.state = {
            project: []
        }
    }

    fetchProject(){
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({project: json}))
    }

    componentDidMount(){
        this.fetchProject()
    }

    handlePress(){
        console.log(this.state.project)
    }
    render(){
        return(
            <div class= 'container'>
                <h2 class="d-flex justify-content-center">Project List</h2>
                <button onClick={this.handlePress.bind(this)}>Press me</button>
                <table class="table table-hover container">
                    <thead>
                        <tr>
                            <th>Project id</th>
                            <th>Project name</th>
                            <th>Project owner</th>
                            <th>Type of project</th>
                            <th>Total area</th>
                            <th>Start year</th>
                            <th>End year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.project.map(p =>
                            <tr>
                                <td>{p._id}</td>
                                <td>{p.name}</td>
                                <td>{p.owner}</td>
                                <td>{p['type of project']}</td>
                                <td>{p['total area']}</td>
                                <td>{p['start year']}</td>
                                <td>{p['end year']}</td>
                                <td>
                                    {/* <button onClick={this.handleDelete.bind(this, p._id)}>
                                    Delete</button> */}
                                    delete
                                </td>
                                <td>
                                {/* <button onClick={this.handleEdit.bind(this, p._id, p.name)}>
                                    Edit</button> */}
                                    edit
                                </td>
                            </tr>
                        )}
                    
                    </tbody>
                </table>
            </div>
        )
    }
}