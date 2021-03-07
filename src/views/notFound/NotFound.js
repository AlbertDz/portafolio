import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-box">
            <div className="box">
                <Link to="/" className="volver-home">Home<i className="fas fa-home"></i></Link>
                <h2>4<span className="zero"></span>4</h2>
            </div>
        </div>
    );
}

export default NotFound;