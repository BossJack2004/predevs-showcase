import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Shield } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin = false }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-secondary flex items-center justify-center">
        <Card className="glass-card p-8">
          <CardContent className="flex flex-col items-center space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Checking authentication...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
        <Card className="glass-card max-w-md mx-auto">
          <CardContent className="flex flex-col items-center space-y-6 p-8">
            <div className="p-4 rounded-full bg-destructive/10">
              <Shield className="w-8 h-8 text-destructive" />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Access Denied</h2>
              <p className="text-muted-foreground">
                You don't have permission to access this area. Admin privileges are required.
              </p>
            </div>
            
            <button 
              onClick={() => window.history.back()}
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Go Back
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;