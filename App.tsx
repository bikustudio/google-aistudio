import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PortraitLibrary } from './pages/PortraitLibrary';
import { ProductLibrary } from './pages/ProductLibrary';
import { NetSizeLibrary } from './pages/NetSizeLibrary';
import { GarmentSizeLibrary } from './pages/GarmentSizeLibrary';
import { ComponentLibrary } from './pages/ComponentLibrary';
import { MannequinLibrary } from './pages/MannequinLibrary';
import { BodyShapeLibrary } from './pages/BodyShapeLibrary';
import { PostureLibrary } from './pages/PostureLibrary';

const DashboardPlaceholder = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-gray-800">仪表盘</h1>
    <p className="mt-4 text-gray-600">欢迎回来，管理员。</p>
  </div>
);

const SystemPlaceholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    <p className="mt-4 text-gray-600">该功能模块正在开发中...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/portraits" replace />} />
          <Route path="/dashboard" element={<DashboardPlaceholder />} />
          
          <Route path="/portraits" element={<PortraitLibrary />} />
          <Route path="/net-sizes" element={<NetSizeLibrary />} />
          <Route path="/garment-sizes" element={<GarmentSizeLibrary />} />
          
          <Route path="/products" element={<ProductLibrary />} />
          <Route path="/components" element={<ComponentLibrary />} />
          <Route path="/mannequins" element={<MannequinLibrary />} />
          
          <Route path="/body-shapes" element={<BodyShapeLibrary />} />
          <Route path="/postures" element={<PostureLibrary />} />
          
          <Route path="/users" element={<SystemPlaceholder title="用户管理" />} />
          <Route path="/audit-logs" element={<SystemPlaceholder title="数据审计日志" />} />
          <Route path="/api-auth" element={<SystemPlaceholder title="接口授权管理" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;