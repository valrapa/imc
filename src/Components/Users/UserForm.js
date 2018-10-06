import React, {Component} from 'react';
import './UserForm.css';

class UserForm extends Component {
    state = {
        fistName: '',
        lastName: '',
        birsthDate: '',

    }
    handlerChange = (evt) => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    handlerSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
    }

    render(){
        return (
            <div className="vid-container">
                <div className="inner-container">
                    <h3>Registro de paciente</h3>
                    <div className="box">
                        <form onSubmit={this.handlerSubmit}>
                            <label>Nombre</label>
                            <input type="text" id="firstName" name="fistName" placeholder="Nombre" onChange={this.handlerChange}/>
                            <label>Apellido</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Apellido" onChange={this.handlerChange}/>
                            <label>Fecha de Nacimiento</label>
                            <input type="date" id="birsthDate" name="birsthDate" placeholder="Fecha de nacimiento" onChange={this.handlerChange}/>
                            <button id="btnSave">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserForm;