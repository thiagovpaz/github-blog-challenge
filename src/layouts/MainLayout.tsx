import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-background">
      <Header />

      <Outlet />
    </div>
  );
};

export { MainLayout };
