import React from "react";

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.error({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops, Something went wrong </h1>;
        }
        return this.props.children;
    }  
}