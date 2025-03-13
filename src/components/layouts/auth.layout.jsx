import React from 'react';

const AuthLayout = ({ children, title, description }) => {
  return (
    <div className="w-full my-20  flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md sm:mx-auto rounded-lg shadow-lg p-6 bg-white">
        <div className="flex flex-col gap-1 justify-center items-center">
          {/* Logo */}
          <div className="p-3 rounded-lg shadow">
            <img width={40} height={40} src="/android-chrome-192x192.png" alt="logo" />
          </div>

          {/* Title & Description */}
          <h1 className="text-xl font-semibold text-center">{title}</h1>
          <p className="text-sm text-center text-gray-600">{description}</p>

          {/* Children (SignUp form) */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
