import { useNavigate } from 'react-router-dom';
import './Indexpage.css';  // We'll create this CSS file next

const IndexPage = () => {
  const navigate = useNavigate();

  const routes = [
    { path: '/ex2', name: 'Card Example 2' },
    { path: '/ex3', name: 'Parent Component' },
    { path: '/ex4', name: 'Parent Example 4' },
    { path: '/ex5', name: 'Example 5' },
    { path: '/ex6', name: 'User Component' },
    { path: '/weather6', name: 'Weather Component' }
  ];

  return (
    <div className="container1">
      <div className="card">
        <h1 className="header">Navigation Index</h1>
        <div className="button-grid">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => navigate(route.path)}
              className="nav-button"
            >
              {route.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;