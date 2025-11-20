import React, { useState } from 'react';
import { 
  Plus, Edit, Trash2, Save, X, Image as ImageIcon, Search, 
  LayoutDashboard, Users as UsersIcon, MessageSquare, FolderOpen, 
  LogOut, CheckCircle, UserPlus, Mail, Phone, Calendar
} from 'lucide-react';
import { ProjectItem, User, Customer } from '../types';

interface AdminDashboardProps {
  projects: ProjectItem[];
  onAddProject: (project: Omit<ProjectItem, 'id'>) => void;
  onUpdateProject: (project: ProjectItem) => void;
  onDeleteProject: (id: number) => void;
  // User Management Props
  users: User[];
  onAddUser: (user: User) => void;
  onDeleteUser: (id: number) => void;
  // Customer/Lead Management Props
  customers: Customer[];
  onUpdateCustomerStatus: (id: number, status: 'contacted' | 'converted') => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  projects, 
  onAddProject, 
  onUpdateProject, 
  onDeleteProject,
  users,
  onAddUser,
  onDeleteUser,
  customers,
  onUpdateCustomerStatus,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'users' | 'customers'>('projects');
  
  // --- Project State ---
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [projectSearch, setProjectSearch] = useState('');
  const [currentProject, setCurrentProject] = useState<Partial<ProjectItem>>({
    title: '', category: 'residential', location: '', imageUrl: '', description: '', client: '', completionYear: '', area: ''
  });

  // --- User State ---
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState<Partial<User>>({ username: '', name: '', role: 'editor', email: '' });

  // --- Filtered Lists ---
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
    p.location.toLowerCase().includes(projectSearch.toLowerCase())
  );

  // --- Project Handlers ---
  const handleProjectEdit = (project?: ProjectItem) => {
    if (project) {
      setCurrentProject({ ...project });
    } else {
      setCurrentProject({
        title: '', category: 'residential', location: '', imageUrl: 'https://picsum.photos/800/600?random=' + Math.floor(Math.random() * 1000),
        description: '', client: '', completionYear: new Date().getFullYear().toString(), area: ''
      });
    }
    setIsEditingProject(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title) return;

    if (currentProject.id) {
      onUpdateProject(currentProject as ProjectItem);
    } else {
      onAddProject(currentProject as Omit<ProjectItem, 'id'>);
    }
    setIsEditingProject(false);
  };

  // --- User Handlers ---
  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.username || !newUser.name) return;
    onAddUser({ ...newUser, id: Date.now(), lastActive: 'Chưa đăng nhập' } as User);
    setIsAddingUser(false);
    setNewUser({ username: '', name: '', role: 'editor', email: '' });
  };

  // --- Render Helpers ---
  const SidebarItem = ({ id, icon: Icon, label }: { id: typeof activeTab, icon: any, label: string }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        activeTab === id ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex pt-[60px] md:pt-[72px]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-white fixed h-full hidden md:flex flex-col border-r border-slate-800 z-10">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white tracking-wide">Admin Portal</h2>
          <p className="text-xs text-gray-500 mt-1">Management System v1.0</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem id="projects" icon={FolderOpen} label="Quản Lý Dự Án" />
          <SidebarItem id="customers" icon={MessageSquare} label="Khách Hàng (Leads)" />
          <SidebarItem id="users" icon={UsersIcon} label="Người Dùng" />
        </nav>
        <div className="p-4 border-t border-slate-800">
            <button onClick={onLogout} className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors w-full px-4 py-2">
                <LogOut size={18} />
                <span>Đăng Xuất</span>
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto h-[calc(100vh-72px)]">
        
        {/* Mobile Header Placeholder (handled by main Header component, but useful for spacing) */}
        <div className="md:hidden mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-secondary">
                {activeTab === 'projects' ? 'Dự Án' : activeTab === 'customers' ? 'Khách Hàng' : 'Người Dùng'}
            </h1>
            <div className="flex gap-2">
                <button onClick={() => setActiveTab('projects')} className={`p-2 rounded ${activeTab === 'projects' ? 'bg-primary text-white' : 'bg-white'}`}><FolderOpen size={20}/></button>
                <button onClick={() => setActiveTab('customers')} className={`p-2 rounded ${activeTab === 'customers' ? 'bg-primary text-white' : 'bg-white'}`}><MessageSquare size={20}/></button>
                <button onClick={() => setActiveTab('users')} className={`p-2 rounded ${activeTab === 'users' ? 'bg-primary text-white' : 'bg-white'}`}><UsersIcon size={20}/></button>
            </div>
        </div>

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                 <h2 className="text-2xl font-bold text-secondary hidden md:block">Danh Sách Dự Án</h2>
                 <p className="text-gray-500 text-sm">Tổng số: {projects.length} dự án</p>
              </div>
              <button 
                onClick={() => handleProjectEdit()}
                className="bg-primary hover:bg-amber-600 text-white px-4 py-2 rounded shadow flex items-center"
              >
                <Plus size={18} className="mr-2" /> Thêm Mới
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center border border-gray-200">
                <Search size={20} className="text-gray-400 mr-3" />
                <input 
                    type="text" 
                    placeholder="Tìm kiếm dự án..." 
                    className="flex-1 outline-none text-gray-700"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                />
            </div>

            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-600 text-xs uppercase font-bold border-b border-gray-200">
                    <tr>
                      <th className="p-4">Hình Ảnh</th>
                      <th className="p-4">Tên Dự Án</th>
                      <th className="p-4">Danh Mục</th>
                      <th className="p-4">Khách Hàng</th>
                      <th className="p-4 text-right">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="p-4"><img src={project.imageUrl} className="w-16 h-12 object-cover rounded" alt="" /></td>
                        <td className="p-4 font-medium text-secondary">{project.title}</td>
                        <td className="p-4 text-sm text-gray-500">
                             <span className={`px-2 py-1 rounded text-xs ${
                                project.category === 'residential' ? 'bg-blue-100 text-blue-700' : 
                                project.category === 'commercial' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                             }`}>
                                {project.category}
                             </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">{project.client || '---'}</td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => handleProjectEdit(project)} className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Edit size={16} /></button>
                          <button onClick={() => { if(window.confirm('Xóa dự án này?')) onDeleteProject(project.id) }} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CUSTOMERS TAB */}
        {activeTab === 'customers' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
             <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary hidden md:block">Khách Hàng Liên Hệ</h2>
                <p className="text-gray-500 text-sm">Quản lý yêu cầu tư vấn từ website</p>
             </div>

             <div className="grid gap-4">
                {customers.map(customer => (
                    <div key={customer.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-lg text-secondary">{customer.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded font-bold uppercase ${
                                    customer.status === 'new' ? 'bg-green-100 text-green-700' :
                                    customer.status === 'contacted' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {customer.status === 'new' ? 'Mới' : customer.status === 'contacted' ? 'Đã Liên Hệ' : 'Hoàn Thành'}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                <div className="flex items-center"><Mail size={14} className="mr-2"/> {customer.email}</div>
                                <div className="flex items-center"><Phone size={14} className="mr-2"/> {customer.phone}</div>
                                <div className="flex items-center"><Calendar size={14} className="mr-2"/> {customer.date}</div>
                                <div className="flex items-center font-medium text-primary"><CheckCircle size={14} className="mr-2"/> {customer.serviceInterest}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 italic border-l-4 border-gray-300">
                                "{customer.message}"
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col justify-center gap-2 min-w-[140px]">
                            {customer.status === 'new' && (
                                <button 
                                    onClick={() => onUpdateCustomerStatus(customer.id, 'contacted')}
                                    className="flex-1 bg-primary hover:bg-amber-600 text-white text-xs font-bold py-2 px-3 rounded flex items-center justify-center transition-colors"
                                >
                                    Đánh dấu đã gọi
                                </button>
                            )}
                            {customer.status !== 'converted' && (
                                <button 
                                    onClick={() => onUpdateCustomerStatus(customer.id, 'converted')}
                                    className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-600 text-xs font-bold py-2 px-3 rounded transition-colors"
                                >
                                    Lưu trữ
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                {customers.length === 0 && (
                    <div className="text-center py-12 bg-white rounded border border-gray-200 text-gray-500">Chưa có liên hệ nào.</div>
                )}
             </div>
           </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                 <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-secondary hidden md:block">Quản Lý Người Dùng</h2>
                    <button 
                        onClick={() => setIsAddingUser(true)}
                        className="bg-secondary hover:bg-slate-700 text-white px-4 py-2 rounded shadow flex items-center"
                    >
                        <UserPlus size={18} className="mr-2" /> Thêm User
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow border border-gray-200">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-600 text-xs uppercase font-bold border-b border-gray-200">
                            <tr>
                                <th className="p-4">Tên</th>
                                <th className="p-4">Username</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Vai Trò</th>
                                <th className="p-4">Hoạt Động Cuối</th>
                                <th className="p-4 text-right">Xóa</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map(u => (
                                <tr key={u.id} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium">{u.name}</td>
                                    <td className="p-4 text-sm text-gray-500">{u.username}</td>
                                    <td className="p-4 text-sm text-gray-500">{u.email || '---'}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${u.role === 'admin' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {u.role.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-400">{u.lastActive}</td>
                                    <td className="p-4 text-right">
                                        {u.role !== 'admin' && (
                                            <button onClick={() => onDeleteUser(u.id!)} className="text-red-400 hover:text-red-600">
                                                <Trash2 size={18} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

      </main>

      {/* MODAL: Add/Edit Project */}
      {isEditingProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h3 className="text-xl font-bold text-secondary">{currentProject.id ? 'Cập Nhật Dự Án' : 'Thêm Dự Án Mới'}</h3>
                <button onClick={() => setIsEditingProject(false)}><X size={24} className="text-gray-400 hover:text-red-500"/></button>
              </div>
              <form onSubmit={handleSaveProject} className="p-6 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tên Dự Án <span className="text-red-500">*</span></label>
                        <input required className="w-full p-3 border rounded focus:border-primary outline-none" value={currentProject.title} onChange={e => setCurrentProject({...currentProject, title: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Danh Mục</label>
                        <select className="w-full p-3 border rounded outline-none" value={currentProject.category} onChange={e => setCurrentProject({...currentProject, category: e.target.value})}>
                            <option value="residential">Nhà Ở</option>
                            <option value="commercial">Thương Mại</option>
                            <option value="industrial">Công Nghiệp</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Địa Điểm</label>
                        <input className="w-full p-3 border rounded outline-none" value={currentProject.location} onChange={e => setCurrentProject({...currentProject, location: e.target.value})} />
                    </div>
                    
                    {/* New Fields */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Khách Hàng (Client)</label>
                        <input className="w-full p-3 border rounded outline-none" value={currentProject.client} onChange={e => setCurrentProject({...currentProject, client: e.target.value})} placeholder="Tên chủ đầu tư..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Năm Hoàn Thành</label>
                            <input className="w-full p-3 border rounded outline-none" value={currentProject.completionYear} onChange={e => setCurrentProject({...currentProject, completionYear: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Diện Tích (m²)</label>
                            <input className="w-full p-3 border rounded outline-none" value={currentProject.area} onChange={e => setCurrentProject({...currentProject, area: e.target.value})} />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mô Tả Chi Tiết</label>
                        <textarea className="w-full p-3 border rounded outline-none h-32" value={currentProject.description} onChange={e => setCurrentProject({...currentProject, description: e.target.value})} placeholder="Mô tả về kiến trúc, vật liệu, ý tưởng..." />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">URL Hình Ảnh Chính</label>
                        <div className="flex gap-2">
                            <input className="w-full p-3 border rounded outline-none" value={currentProject.imageUrl} onChange={e => setCurrentProject({...currentProject, imageUrl: e.target.value})} />
                            <div className="w-16 h-12 bg-gray-100 rounded overflow-hidden border">
                                {currentProject.imageUrl && <img src={currentProject.imageUrl} className="w-full h-full object-cover" alt="preview"/>}
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="pt-4 flex justify-end space-x-3">
                    <button type="button" onClick={() => setIsEditingProject(false)} className="px-6 py-3 bg-gray-200 rounded hover:bg-gray-300 font-bold text-gray-700">Hủy</button>
                    <button type="submit" className="px-6 py-3 bg-primary text-white rounded hover:bg-amber-600 font-bold">Lưu Dự Án</button>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* MODAL: Add User */}
      {isAddingUser && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-secondary">Thêm Người Dùng Mới</h3>
                </div>
                <form onSubmit={handleSaveUser} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Họ Tên</label>
                        <input required className="w-full p-2 border rounded" value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full p-2 border rounded" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Tên đăng nhập</label>
                        <input required className="w-full p-2 border rounded" value={newUser.username} onChange={e => setNewUser({...newUser, username: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Vai Trò</label>
                        <select className="w-full p-2 border rounded" value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value as any})}>
                            <option value="editor">Editor (Biên tập viên)</option>
                            <option value="admin">Admin (Quản trị viên)</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end space-x-2">
                        <button type="button" onClick={() => setIsAddingUser(false)} className="px-4 py-2 bg-gray-200 rounded text-sm font-bold">Hủy</button>
                        <button type="submit" className="px-4 py-2 bg-secondary text-white rounded text-sm font-bold">Thêm</button>
                    </div>
                </form>
            </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;