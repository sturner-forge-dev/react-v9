import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Padre Gino's</h1>
<<<<<<< HEAD:padre-ginos/src/routes/index.lazy.jsx
        <p>Pizza & Art at a location near you</p>
=======
        <p>Pizza at a location near you</p>
>>>>>>> 83c710d (finishing for the day):src/routes/index.lazy.jsx
      </div>
      <ul>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/history">Past Orders</Link>
        </li>
      </ul>
    </div>
  );
}
