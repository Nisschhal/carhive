import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <h1>
      No page with pathname:<em>{pathname.slice(1)}</em>
    </h1>
  );
};

export default NotFound;
