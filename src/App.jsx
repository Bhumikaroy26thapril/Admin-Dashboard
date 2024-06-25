import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Reports from './pages/Reports';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Navbar toggleSidebar={toggleSidebar} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/kanban" component={Kanban} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
