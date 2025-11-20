import React, { useState } from 'react';
import { Lock, User as UserIcon, AlertCircle } from 'lucide-react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock authentication - In a real app, this would call an API
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        onLogin({
          username: 'admin',
          name: 'Quản Trị Viên',
          role: 'admin'
        });
      } else {
        setError('Tên đăng nhập hoặc mật khẩu không đúng');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-secondary py-6 px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Đăng Nhập Hệ Thống</h2>
          <p className="text-gray-400 text-sm mt-1">KienTrucPro Management</p>
        </div>
        
        <form onSubmit={handleSubmit} className="py-8 px-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-center text-red-700">
              <AlertCircle size={20} className="mr-2" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Tên đăng nhập</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="admin"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="admin123"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-amber-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors flex justify-center items-center"
            >
              {isLoading ? <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span> : null}
              Đăng Nhập
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
            >
              Quay Lại Trang Chủ
            </button>
          </div>
        </form>
        
        <div className="bg-gray-50 py-4 px-8 text-center text-xs text-gray-500 border-t border-gray-100">
          Tài khoản demo: admin / admin123
        </div>
      </div>
    </div>
  );
};

export default Login;