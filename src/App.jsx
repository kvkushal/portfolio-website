import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

/**
 * Home Page Component
 */
const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Capabilities />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

/**
 * App with Routing
 * 
 * Routes:
 * - / : Homepage with all sections
 * - /projects : All projects page
 * - /project/:slug : Individual project detail
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/project/:slug" element={<ProjectDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
