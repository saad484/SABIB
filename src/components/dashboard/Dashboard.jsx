import { useRoutes, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import FullLayout from '../UI/Dashboard/FullLayout';
import ThemeRoutes from '../routes/ThemeRoutes';

function Dashboard() {
  // Define routes using the ThemeRoutes configuration
  const routing = useRoutes(ThemeRoutes);

  return (
    <div>
      {/* Render the FullLayout which contains nested routes */}
      <FullLayout>
        {/* Use Suspense to handle lazy loading of nested components */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* Use Outlet to render nested routes within FullLayout */}
          <Outlet />
        </Suspense>
      </FullLayout>
    </div>
  );
}

export default Dashboard;
