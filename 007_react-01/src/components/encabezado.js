import React, { Component } from 'react';

class Encabezado extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Usuarios</a></li>
                        <li><a href="#">Edificios</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Encabezado;

// ReactDOM.render(
//     <Encabezado />,
//     document.getElementById('header')
// );
