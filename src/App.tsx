import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Recruitment from './pages/Recruitment';
import Payroll from './pages/Payroll';
import Attendance from './pages/Attendance';
import Performance from './pages/Performance';
import Onboarding from './pages/Onboarding';
import Leave from './pages/Leave';
import Training from './pages/Training';
import Offboarding from './pages/Offboarding';
import LoginPage from './pages/Login';
import Settings from './pages/Settings';
import MyPayroll from './pages/MyPayroll';
import { useAuthStore } from './store/authStore';

const App: React.FC = () => {
  const { isAuthenticated, canAccess } = useAuthStore();
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const renderContent = () => {
    switch (selectedKey) {
      case 'dashboard': return <Dashboard />;
      case 'employees': return <EmployeeDirectory />;
      case 'recruitment': return <Recruitment />;
      case 'onboarding': return <Onboarding />;
      case 'leave': return <Leave />;
      case 'attendance': return <Attendance />;
      case 'payroll': return <Payroll />;
      case 'performance': return <Performance />;
      case 'training': return <Training />;
      case 'offboarding': return <Offboarding />;
      case 'settings': return <Settings />;
      case 'my_payroll': return <MyPayroll />;
      default: return <Dashboard />;
    }
  };

  // Redirect if current selected module is not accessible
  useEffect(() => {
    if (isAuthenticated && !canAccess(selectedKey)) {
      setSelectedKey('dashboard');
    }
  }, [selectedKey, isAuthenticated, canAccess]);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <MainLayout selectedKey={selectedKey} onMenuClick={setSelectedKey}>
      {renderContent()}
    </MainLayout>
  );
};

export default App;
