import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            padding: '20px 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: scrolled ? 'var(--bg-secondary)' : 'transparent',
            transition: 'var(--transition)',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                    Gladvin Kurishinkal.......
                </div>
                <nav>
                    <ul style={{ display: 'flex', gap: '30px' }}>
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} style={{ fontSize: '1rem', fontWeight: 500 }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
