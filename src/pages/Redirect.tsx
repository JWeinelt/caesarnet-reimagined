import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const url = searchParams.get('url');
    
    if (!url) {
      // If no URL provided, redirect to home
      navigate('/');
      return;
    }

    // Add a small delay to show the redirecting message
    const timer = setTimeout(() => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        // External URL
        window.open(url, "_blank")
        window.history.back();
        //window.location.href = url;
      } else {
        // Internal route
        navigate(url);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Redirecting...</h1>
        <p className="text-muted-foreground">Please wait while we redirect you to your destination.</p>
      </div>
    </div>
  );
};

export default Redirect;