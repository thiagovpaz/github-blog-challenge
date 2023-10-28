import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

const MainLayout = () => {
  return (
    <div className="bg-base-background h-screen">
      <Header />

      <Outlet />
    </div>
  );
};

export { MainLayout };
