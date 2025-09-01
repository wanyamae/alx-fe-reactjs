import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ borderBottom: '1px solid #ccc', padding: '16px', fontFamily: 'Arial, sans-serif', marginBottom: '24px' }}>
            <Link to="/" style={{ marginRight: '20px', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '20px', textDecoration: 'none' }}>About</Link>
            <Link to="/services" style={{ marginRight: '20px', textDecoration: 'none' }}>Services</Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;