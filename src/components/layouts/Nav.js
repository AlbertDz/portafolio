import React from 'react';
import '../styles/Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    clickToggle(e) {
        document.querySelector('.toggle').classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('active');
    }

    render() {
        const valores = [0, 1, 2, 3];
        const navegacion = [
            { name: 'Home', url: '#' },
            { name: 'Proyectos', url: '#proyectos' },
            { name: 'Tecnologías', url: '#tecnologias' },
        ]

        return (
            <React.Fragment>
                <div onClick={ this.clickToggle } className="toggle"></div>
                <nav className="navigation">
                    { valores.map((valor, i) => ( <span key={ i } style={ {'--i': valor} }></span> )) }
                    <ul>
                        { navegacion.map((nav, i) => ( <li key={ i } onClick={ this.clickToggle }><a href={ nav.url }>{ nav.name }</a></li> )) }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav;