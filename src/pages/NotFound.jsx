import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <p className="font-display text-8xl font-bold text-gradient">404</p>
      <h1 className="font-display text-2xl font-semibold text-text">
        Page not found
      </h1>
      <p className="max-w-sm text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <HomeIcon size={17} />
        Back to Home
      </Link>
    </div>
  );
}
