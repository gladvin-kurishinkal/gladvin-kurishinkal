const Projects = () => {
    const projects = [
        {
            title: 'CMS: College Management System',
            description: 'An End to End System to Manage all aspects of Academic and Non-Academic activities of a College.',
            tech: ['React Native', 'Expo', 'Express', 'Node.js', 'MongoDB',],
            link: 'https://github.com/gladvin-kurishinkal/cmsw.git'
        },
        {
            title: 'Medmap: A Disease Mapping System',
            description: 'A System to Map and Analyze the spread of diseases.',
            tech: ['Python', 'Django', 'postgres', 'numpy', 'scikit-learn',],
            link: 'https://github.com/gladvin-kurishinkal/medmap.git'
        },

    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="title">Some Things I've Built</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '30px',
                                borderRadius: 'var(--border-radius)',
                                transition: 'var(--transition)',
                                cursor: 'pointer',
                                position: 'relative',
                                top: 0,
                                display: 'block',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.top = '-10px'}
                            onMouseLeave={(e) => e.currentTarget.style.top = '0'}
                        >
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>{project.title}</h3>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>{project.description}</p>
                            <ul style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {project.tech.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
