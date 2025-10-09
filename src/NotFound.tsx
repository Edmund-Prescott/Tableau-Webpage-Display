import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Landing from "./Landing";

export default function NotFound() {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4 fw-bold mb-3">404 — Not Found</h1>
      <p className="lead mb-4">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      
    </Container>
  );
}
