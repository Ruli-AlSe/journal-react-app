import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* login and register */}
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* Journal App */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
