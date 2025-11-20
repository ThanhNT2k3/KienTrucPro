import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import { PROJECTS as INITIAL_PROJECTS, USERS as INITIAL_USERS, CUSTOMERS as INITIAL_CUSTOMERS } from './constants';
import { ProjectItem, User, Customer, ServiceItem } from './types';

function App() {
  // --- State Management ---
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'admin' | 'project-detail' | 'service-detail'>('home');
  const [user, setUser] = useState<User | null>(null);
  
  // Data States
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  
  // Specific UI States
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Check for stored user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('kientrucpro_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // --- Auth Handlers ---
  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('kientrucpro_user', JSON.stringify(userData));
    setCurrentView('admin');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('kientrucpro_user');
    setCurrentView('home');
  };

  // --- Navigation Handlers ---
  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
  };

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  const handleBackToHome = (anchor?: string) => {
    setSelectedProject(null);
    setSelectedService(null);
    setCurrentView('home');
    if (anchor) {
        setTimeout(() => {
            const element = document.querySelector(anchor);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  // --- Admin Data Handlers ---
  
  // Projects
  const handleAddProject = (newProjectData: Omit<ProjectItem, 'id'>) => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const newProject = { ...newProjectData, id: newId };
    setProjects([newProject, ...projects]);
  };

  const handleUpdateProject = (updatedProject: ProjectItem) => {
    setProjects(projects.map(p => (p.id === updatedProject.id ? updatedProject : p)));
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Users
  const handleAddUser = (newUser: User) => {
      setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: number) => {
      setUsers(users.filter(u => u.id !== id));
  };

  // Customers/Leads
  const handleUpdateCustomerStatus = (id: number, status: 'contacted' | 'converted') => {
      setCustomers(customers.map(c => c.id === id ? { ...c, status } : c));
  };

  // Public Contact Form Submit (Simulated)
  const handleContactSubmit = (data: any) => {
      console.log("Contact submitted", data);
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen flex flex-col text-slate-800 scroll-smooth">
      {currentView !== 'project-detail' && currentView !== 'service-detail' && (
          <Header 
            currentView={currentView} 
            onNavigate={(view) => {
                if (view === 'home') handleBackToHome();
                else setCurrentView(view);
            }}
            user={user}
            onLogout={handleLogout}
          />
      )}
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Services onServiceClick={handleServiceClick} />
            <Stats />
            <Projects projects={projects} onProjectClick={handleProjectClick} />
            <Contact />
          </>
        )}

        {currentView === 'project-detail' && selectedProject && (
            <ProjectDetail project={selectedProject} onBack={() => handleBackToHome('#projects')} />
        )}

        {currentView === 'service-detail' && selectedService && (
            <ServiceDetail service={selectedService} onBack={() => handleBackToHome('#services')} />
        )}

        {currentView === 'login' && (
          <Login 
            onLogin={handleLogin} 
            onCancel={() => handleBackToHome()} 
          />
        )}

        {currentView === 'admin' && user && (
          <AdminDashboard 
            projects={projects}
            onAddProject={handleAddProject}
            onUpdateProject={handleUpdateProject}
            onDeleteProject={handleDeleteProject}
            users={users}
            onAddUser={handleAddUser}
            onDeleteUser={handleDeleteUser}
            customers={customers}
            onUpdateCustomerStatus={handleUpdateCustomerStatus}
            onLogout={handleLogout}
          />
        )}
        
        {/* Redirect if on admin but not logged in */}
        {currentView === 'admin' && !user && (
          <div className="pt-40 text-center">
             <p>Bạn chưa đăng nhập. Đang chuyển hướng...</p>
             {setTimeout(() => setCurrentView('login'), 1000) && null}
          </div>
        )}
      </main>

      {(currentView === 'home' || currentView === 'project-detail' || currentView === 'service-detail') && <Footer />}
      {currentView === 'home' && <AIConsultant />}
    </div>
  );
}

export default App;
