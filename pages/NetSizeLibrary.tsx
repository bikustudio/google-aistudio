
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const data = [
  { id: 'SN20240726001', memberId: 'SAINTANGELO_MEMBER_001', time: '2024-07-26 14:30', channel: 'STORE_BEIJING' },
  { id: 'SN20240726002', memberId: 'SAINTANGELO_MEMBER_002', time: '2024-07-26 11:05', channel: 'WECHAT_MINI' },
  { id: 'SN20240725001', memberId: 'SAINTANGELO_MEMBER_003', time: '2024-07-25 16:45', channel: 'STORE_SHANGHAI' },
];

export const NetSizeLibrary: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-slate-800">净尺寸库</h2>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span>用户资产管理</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-slate-600">净尺寸库</span>
          </div>
        </div>
        <div className="relative">
          <input type="text" placeholder="搜索" className="w-64 h-9 border border-gray-200 rounded-lg pl-4 pr-10 text-sm focus:outline-none" />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>创建时间</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
      </div>

      <div className="flex-1 px-6 overflow-hidden flex flex-col">
        <div className="overflow-auto border border-gray-100 rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f8f9fb]">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">流水号</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">会员ID</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">时间</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">渠道</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm text-slate-600 font-mono">{item.id}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.memberId}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.time}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.channel}</td>
                  <td className="px-4 py-4 text-right">
                    <button onClick={() => setSelectedItem(item)} className="text-primary hover:text-primary-hover text-sm font-medium">查看详情</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
