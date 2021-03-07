import React from 'react';
import { Proyecto, Tecnologia, Nav } from '../../components/index';
import { proyectos, tecnologias } from '../../consts/index';
import '../styles/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <section className="content-section" id="proyectos">
                    <h2 className="header-section">Proyectos</h2>
                    { proyectos.map(proyecto => ( <Proyecto proyecto={ proyecto } key={ proyecto.id } /> )) }
                </section>
                <section className="content-section" id="tecnologias">
                    <h2 className="header-section">Tecnologías</h2>
                    <div className="content-tecnologias">
                        { tecnologias.map(tecnologia => ( <Tecnologia tecnologia={ tecnologia } key={ tecnologia.id } /> )) }
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;