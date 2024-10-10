import React from 'react';
import '../componentStyles/loadingSpinner.css';

// Defining the loadingSpinner component
const LoadingSpinner = () => (
    <div className="loading-spinner">
        <div className="spinner"></div>
    </div>
);

// Export LoadingSpinner to be used in another file
export default LoadingSpinner;
