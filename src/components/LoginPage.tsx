
import React from 'react';
import LoginForm from './LoginForm';
import LoginBackground from './LoginBackground';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Left side with image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=2465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 relative p-4 flex items-center justify-center">
        <LoginBackground />

        <div className="z-10 flex flex-col items-center space-y-6 w-full max-w-md animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">Login</h1>
            <p className="text-slate-500">Secure access to your account</p>
          </div>

          <LoginForm />

          {/* <div className="text-center text-xs text-slate-400 mt-8">
            © 2025 Company. All rights reserved.
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Help</a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
