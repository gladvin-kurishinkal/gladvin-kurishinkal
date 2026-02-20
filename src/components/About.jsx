import profileImage from '../assets/image.jpg';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="title">About Me</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'center' }}>
                    <div>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            Hello! My name is Gladvin I’ve always been fascinated by technology,
                            but everything clicked for me when I realized I could actually make
                            a computer do exactly what I wanted through code. That spark of
                            control and creativity hooked me immediately, and I haven't stopped
                            building since.
                        </p>

                        <p style={{ color: 'var(--text-secondary)' }}>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '10px',
                            marginTop: '20px',
                            listStyle: 'none'
                        }}>
                            {['JavaScript (ES6+)', 'React', 'Node.js', 'Typescript', 'Python', 'Django', 'MongoDB', 'Cobol'].map(tech => (
                                <li key={tech} style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span> {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ position: 'relative' }}>
                        {/* Placeholder for image */}
                        <img
                            src={profileImage}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--border-radius)',
                                position: 'relative',
                                zIndex: 1,
                                display: 'block',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            width: '100%',
                            height: '300px',
                            border: '2px solid var(--accent-color)',
                            borderRadius: 'var(--border-radius)',
                            zIndex: 0
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
