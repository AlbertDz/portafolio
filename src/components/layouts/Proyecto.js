import React from 'react';
import '../styles/Proyecto.css';

class Proyecto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    mostrarAlt(proyecto, pantalla) {
        return `${proyecto.titulo} - Img ${pantalla}`;
    }

    render() {
        let className = 'content-proyecto '
        if (this.props.proyecto.class) className += this.props.proyecto.class;

        return (
            <div className={ className } id={ this.props.proyecto.id }>
                <div className="content-imagenes">
                    <img className="desktop" src={ this.props.proyecto.imgDesktop } alt={ this.mostrarAlt(this.props.proyecto.titulo, 'Desktop') } />
                    <img className="tablet" src={ this.props.proyecto.imgTablet } alt={ this.mostrarAlt(this.props.proyecto.titulo, 'Tablet') } />
                    <img className="movil" src={ this.props.proyecto.imgMovil } alt={ this.mostrarAlt(this.props.proyecto.titulo, 'Movil') } />
                </div>
                <div className="content-descripcion">
                    <h3 className="titulo">{ this.props.proyecto.titulo }</h3>
                    <p className="descripcion">{ this.props.proyecto.descripcion }</p>
                    <a href={ this.props.proyecto.url } target="__blank">VISITAR SITIO WEB</a>
                </div>
            </div>
        );
    }
}

export default Proyecto;