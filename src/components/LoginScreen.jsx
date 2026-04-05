
import { DollarSign, User, Lock } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  // Login Handler 
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      {/* White Card wala Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-zinc-900 p-3 rounded-xl mb-3">
            <DollarSign className="text-white" size={32} />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-zinc-900">
            FinDash Tracker
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-600 mt-1">
            Sign in to manage your budgets.
          </p>
        </div>

        {/* Form area */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email/ Username  */}
          <div>
        
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email Address
            </label>
            {/* Input Wrapper */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-zinc-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                required
                defaultValue="demo@gmail.com"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700"
            >
              Password
            </label>

            <div className="mt-1 relative rounded-md shadow-sm">
              {/* Icon Container */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-zinc-400" />
              </div>

              {/* Input  */}
              <input
                type="password"
                name='password'
                id="password"
                required
                defaultValue="password123"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Login Button  */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer transition-colors duration-100 ease-in"
            >
              Sign in to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;