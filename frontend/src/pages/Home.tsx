import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Full-Stack Application
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            React + TypeScript + FastAPI with Authentication
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button size="lg">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline">Sign Up</Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">React 18</h3>
            <p className="text-gray-600">
              Modern React with TypeScript, Vite, and latest features
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">FastAPI</h3>
            <p className="text-gray-600">
              High-performance Python backend with automatic API docs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">JWT Auth</h3>
            <p className="text-gray-600">
              Secure authentication with access and refresh tokens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
