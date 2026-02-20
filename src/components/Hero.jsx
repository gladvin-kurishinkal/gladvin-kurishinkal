const Hero = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px'
        }}>
            <div className="container">
                <h3 className="animate-slide-up" style={{
                    color: 'var(--accent-color)',
                    fontSize: '1.2rem',
                    marginBottom: '20px'
                }}>
                    Hi, my name is
                </h3>
                <h1 className="animate-slide-up delay-100" style={{
                    fontSize: '4rem',
                    lineHeight: 1.1,
                    marginBottom: '20px'
                }}>
                    Gladvin Kurishinkal.
                </h1>
                <h2 className="animate-slide-up delay-200" style={{
                    fontSize: '3rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '30px'
                }}>
                    I build things for the love of the craft.
                </h2>
                <p className="animate-slide-up delay-300" style={{
                    maxWidth: '540px',
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '50px'
                }}>
                    I enjoy turning "wish I had an app for that" moments into reality.
                </p>
                <a href="#projects" className="btn animate-slide-up delay-300">Check out my work!</a>
            </div>
        </section>
    );
};

export default Hero;
