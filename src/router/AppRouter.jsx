import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateEmployee from '../pages/CreateEmployee';
import ListEmployee from '../pages/ListEmployee';
import Error404 from '../pages/Error404';

/**
 * AppRouter component manage routing in app, that renders different routes and corresponding components.
 * @component
 * @returns {JSX.Element}
 */
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-employee" element={<CreateEmployee />} />
      <Route path="/list-employee" element={<ListEmployee />} />
      {/* path="*" if the path does not correspond to any route declared above */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
