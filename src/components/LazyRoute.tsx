
import { Suspense, lazy, ComponentType } from 'react';

interface LazyRouteProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const LazyRoute = ({ component, fallback }: LazyRouteProps) => {
  const LazyComponent = lazy(component);
  
  return (
    <Suspense 
      fallback={
        fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mdm-gold"></div>
          </div>
        )
      }
    >
      <LazyComponent />
    </Suspense>
  );
};

export default LazyRoute;
