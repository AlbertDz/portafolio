import '../styles/Tecnologia.css';

const Tecnologia = (props) => {
    return (
        <div className="card">
            <div className="box">
                <div className="porcentaje">
                    <div className="numero">
                        <img src={ props.tecnologia.img } alt={ props.tecnologia.titulo } />
                    </div>
                </div>
                <h3 className="titulo">{ props.tecnologia.titulo }</h3>
            </div>
        </div>
    )
}

export default Tecnologia;