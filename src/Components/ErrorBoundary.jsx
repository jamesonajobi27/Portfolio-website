import {Component} from "react";
import { useLocation,Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ErrorBoundary({children}) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (hasError) {
        setHasError(false);
      }
    }, [location.key]);
    return (
 
      <ErrorBoundaryInner 
        hasError={hasError} 
        setHasError={setHasError}
      >
        {children}
      </ErrorBoundaryInner>
    );
  }
  

  class ErrorBoundaryInner extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_error) {
      return { hasError: true };
    }
  
    componentDidUpdate(prevProps, _previousState) {
      if(!this.props.hasError && prevProps.hasError) {
        this.setState({ hasError: false });
      }
    }
  
    componentDidCatch(_error, _errorInfo) {
      this.props.setHasError(true);
    }
  
    render() {
      return this.state.hasError
        ? <div className="Testingerror"><h1 className="loading">There was an error</h1> <Link to="/"className="link">Return Home</Link></div>
        : this.props.children; 
    }
}