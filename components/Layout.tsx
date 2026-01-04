
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const NavItem: React.FC<{ to: string; label: string; isActiveItem?: boolean }> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-6 py-2.5 text-sm transition-all ${
          isActive
            ? 'bg-[#8ea1e1] text-primary font-medium'
            : 'text-slate-600 hover:bg-slate-50'
        }`
      }
    >
      <span>{label}</span>
    </NavLink>
  );
};

const MenuSection: React.FC<{ label: string; icon?: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ label, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">{label}</span>
        <span className={`material-symbols-outlined text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {isOpen && <div className="bg-white">{children}</div>}
    </div>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      {/* Top Header */}
      <header className="h-[60px] bg-[#001529] flex items-center justify-between px-0 shrink-0 z-20 shadow-sm">
        <div className="w-60 h-full bg-[#001529] flex items-center px-6 border-r border-white/10">
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tighter text-lg">SAINT ANGELO</span>
            <span className="text-white/80 text-[10px] tracking-[0.2em] mt-0.5 font-light">报 喜 鸟</span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-6">
           <div className="w-8 h-8 rounded-full bg-[#8ea1e1] flex items-center justify-center text-white text-xs font-bold">t</div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r border-gray-100 flex flex-col overflow-y-auto shrink-0">
          <nav className="flex-1 py-2">
            <MenuSection label="用户资产管理" defaultOpen={true}>
              <NavItem to="/portraits" label="人像库" />
              <NavItem to="/net-sizes" label="净尺寸库" />
              <NavItem to="/garment-sizes" label="成衣尺寸库" />
            </MenuSection>

            <MenuSection label="商品管理">
              <NavItem to="/products" label="商品库" />
            </MenuSection>

            <MenuSection label="知识库管理">
              <NavItem to="/components" label="部件库" />
              <NavItem to="/mannequins" label="人台库" />
              <NavItem to="/body-shapes" label="体型库" />
              <NavItem to="/postures" label="体态库" />
            </MenuSection>

            <MenuSection label="基础信息">
              <NavItem to="/users" label="用户管理" />
              <NavItem to="/audit-logs" label="数据审计日志" />
              <NavItem to="/api-auth" label="接口授权管理" />
            </MenuSection>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto bg-white">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
