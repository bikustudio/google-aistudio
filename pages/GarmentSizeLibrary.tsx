
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const data = [
  { id: 'SN20231026001', memberId: '138****5678', time: '2023-10-26 10:30' },
  { id: 'SN20231026002', memberId: '159****1234', time: '2023-10-26 11:15' },
  { id: 'SN20231026003', memberId: '186****9876', time: '2023-10-26 12:00' },
  { id: 'SN20231026004', memberId: '131****4321', time: '2023-10-26 13:45' },
  { id: 'SN20231026005', memberId: '177****8899', time: '2023-10-26 14:20' },
  { id: 'SN20231026006', memberId: '135****3344', time: '2023-10-26 15:05' },
];

export const GarmentSizeLibrary: React.FC = () => {
   const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">成衣尺寸库</h1>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-4 items-end">
         <label className="flex flex-col gap-1 w-64">
            <span className="text-sm font-medium text-slate-600">会员ID</span>
            <input type="text" placeholder="请输入会员ID" className="form-input rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20" />
         </label>
         <label className="flex flex-col gap-1 w-64">
            <span className="text-sm font-medium text-slate-600">录入时间</span>
             <div className="relative">
                <input type="text" placeholder="请选择时间范围" className="form-input w-full pl-10 rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20" />
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-lg">calendar_month</span>
             </div>
         </label>
         <label className="flex flex-col gap-1 w-64">
            <span className="text-sm font-medium text-slate-600">订单ID</span>
            <input type="text" placeholder="请输入订单ID" className="form-input rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20" />
         </label>
         <div className="flex gap-2 ml-auto">
            <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors">搜索</button>
            <button className="px-6 py-2 bg-white border border-gray-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">重置</button>
         </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
         <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
               <tr>
                  <th className="px-6 py-4 font-semibold text-slate-500">流水号</th>
                  <th className="px-6 py-4 font-semibold text-slate-500">会员ID (脱敏展示)</th>
                  <th className="px-6 py-4 font-semibold text-slate-500">录入时间</th>
                  <th className="px-6 py-4 font-semibold text-slate-500">操作</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
               {data.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4 text-slate-600">{item.id}</td>
                     <td className="px-6 py-4 text-slate-600">{item.memberId}</td>
                     <td className="px-6 py-4 text-slate-600">{item.time}</td>
                     <td className="px-6 py-4">
                        <button onClick={() => setSelectedItem(item)} className="text-primary hover:text-primary-hover font-bold hover:underline">查看详情</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="flex justify-end p-4 border-t border-gray-100">
             <div className="flex gap-2 text-sm">
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                 <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg font-medium">1</button>
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">2</button>
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">3</button>
                 <span className="flex items-center px-1 text-gray-400">...</span>
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">10</button>
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
             </div>
         </div>
      </div>

      {/* Same Modal as Product Detail */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="成衣数据详情" maxWidth="max-w-4xl">
         <div className="space-y-6">
             <div>
                 <h3 className="text-base font-bold text-gray-800 mb-4">订单上下文</h3>
                 <div className="border border-gray-200 rounded-lg p-6 grid grid-cols-2 gap-y-4 gap-x-12 bg-gray-50/30">
                     <div className="flex"><span className="w-24 text-gray-500 text-sm">订单号</span><span className="text-sm font-medium text-gray-900">PO20240726001</span></div>
                     <div className="flex"><span className="w-24 text-gray-500 text-sm">款式编号</span><span className="text-sm font-medium text-gray-900">SKU-SHRT-012</span></div>
                     <div className="flex"><span className="w-24 text-gray-500 text-sm">版型</span><span className="text-sm font-medium text-gray-900">修身款</span></div>
                     <div className="flex"><span className="w-24 text-gray-500 text-sm">面料</span><span className="text-sm font-medium text-gray-900">100%纯棉牛津纺</span></div>
                 </div>
             </div>

             <div>
                 <h3 className="text-base font-bold text-gray-800 mb-4">成衣实测数据</h3>
                 <div className="border border-gray-200 rounded-lg overflow-hidden">
                     <table className="w-full text-left">
                         <thead className="bg-gray-50 border-b border-gray-200">
                             <tr>
                                 <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">部位</th>
                                 <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">完成尺寸 (CM)</th>
                                 <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">调整量</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-200 bg-white">
                             <tr><td className="px-6 py-4 text-sm text-gray-700">领围</td><td className="px-6 py-4 text-sm text-gray-700">40.5</td><td className="px-6 py-4 text-sm text-green-600 font-medium">+0.5</td></tr>
                             <tr><td className="px-6 py-4 text-sm text-gray-700">胸围</td><td className="px-6 py-4 text-sm text-gray-700">102.0</td><td className="px-6 py-4 text-sm text-gray-700 font-medium">+0.0</td></tr>
                             <tr><td className="px-6 py-4 text-sm text-gray-700">腰围</td><td className="px-6 py-4 text-sm text-gray-700">95.0</td><td className="px-6 py-4 text-sm text-red-600 font-medium">-1.0</td></tr>
                             <tr><td className="px-6 py-4 text-sm text-gray-700">袖长</td><td className="px-6 py-4 text-sm text-gray-700">63.5</td><td className="px-6 py-4 text-sm text-gray-700 font-medium">+0.0</td></tr>
                             <tr><td className="px-6 py-4 text-sm text-gray-700">后中长</td><td className="px-6 py-4 text-sm text-gray-700">76.0</td><td className="px-6 py-4 text-sm text-gray-700 font-medium">+0.0</td></tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
       </Modal>
    </div>
  );
};
