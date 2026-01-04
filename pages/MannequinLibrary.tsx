import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const data = [
  { id: 'SN20230501001', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXdrEfddJL-Qy1PyNXajLnsQCbw2-j0cTWuLrOsdBANtTlVM6QY6exvfxwXrKE_FNrlgHgBhX2oug8VzwjLzeJUvS6kA7MmdNRNdIoPhafdnTJP81mtHI3TM032bG_S5P2EaYMfRpvmlh179_xQq-poXeqvEp9GnRH-mBbq2bozSZmXnmODCiOkD5Tf8mTKyR0TSwDp8SwgjMqboK2f5xuzeoHLRhvuXZT1VEufrCS3ducJOv-5g6y45riY_Vvt_Q7wfQF_Zmetzo', status: '已生成', color: 'green' },
  { id: 'SN20230501002', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOAIetFCrj33gfVUGcnbTHKZX1pga9tmR-v0EkbeYaNEnwIL7Itutb82tjejT7gZa5QUoKiAqLmtMUZqiqRWSVPF2YFQ7wtyTbpB3NdWxl5RVbJntmh3eDz8PxFuHTYxiy032f-4_H0kQ8Pl_dpakJ78ZrkB1Rmlh5P0iY0F1YWp1-4lhvI_CnY7kNmd8CjDZU2ZHTzZHop9PVThX-R-AFVrycPDfQG_e_F6GIQLbWd7hA_D7NkI6jidHXELZE5FeNc2jxZv5pYHI', status: '已生成', color: 'green' },
  { id: 'SN20230501003', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9BJUbELApg96bgq9R6168nNZXgfuSceS4WdwJPSxT44ZU63RNQwNQRjL5ZhukryVjauTjO8R7iRcxHjxITcigApj-r5KRoyyH5Yi_FtwdS2ejEBKG7ItJnnCqPa_USaOG1qWGw2x8UxTIzT8IuSckpTrIaGMA3123wJndQD86B7oJr_IJFFjO5IiS2PnJKo53vXykdJ8oF137q4eHNLiFHJB6aonNlk4h8_VG0Hjxi7d_Nwk0vUe9tliv0Dn8Q9WmMcjTklvE-64', status: '生成中', color: 'yellow' },
  { id: 'SN20230501004', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6u0dLix7zmLyaDJudH7dvAVjZmBLSgaGyefGK9jj5UwblqomvAWKBwh3Udm7DNU-uhgHrz0JeVvX3tPngERAqbKCXR6T8kHWOcHABvSTB4pxlB_qxTX1rupJWmWaZUJMvV5Ys1iNK2fKkt7AoDqjDihzPEXRxRd5PuojNP1O-mPAdWvDuZY13qar80GmFTTBy3VRNA5AKjug0hDNkkuJYtRsSLz7M-l35mMDYg-chh9ZSEdn6LWBBgecAteqy0uGhQZnzDf9bWSU', status: '失败', color: 'red' },
  { id: 'SN20230501005', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUvo88It8pWDVchz67ZaC3y7WalmnplC9KheLFXnHjLC6Bc9Bpjmt53akJdeSm6EwnaAuWehLFipafdMtOkGxkwviNOqgqXhqyEvLwb8pP8L9MX5zLzoMQB3v5KM5Hc54vPCArkS9Zv-jtpm7O-UvY1yhIKkWmi31qKmpjD6x7poex25ZGGkScth5aQUjEtNSIwA6lbLAufhJAlx-PkEMEjrthuGUJ4KTB2JmWeUqv6NLNQYJA5TQvS2BpGKZS9w7IZqHmB0VDYcg', status: '已生成', color: 'green' },
];

export const MannequinLibrary: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">人台库</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-wrap items-end gap-4">
        <label className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-sm font-medium text-gray-700">人台编号</span>
            <input type="text" placeholder="请输入人台编号" className="form-input rounded border-gray-300 text-sm" />
        </label>
        <label className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-sm font-medium text-gray-700">时间</span>
            <input type="text" placeholder="请选择时间范围" className="form-input rounded border-gray-300 text-sm" />
        </label>
        <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-hover">查询</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300">重置</button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">人台编号</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">缩略图</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">3D模型状态</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-700">操作</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {data.map(item => (
                    <tr key={item.id} className="hover:bg-primary/5">
                        <td className="px-4 py-3 text-sm text-gray-700">{item.id}</td>
                        <td className="px-4 py-3">
                            <div className="w-10 h-10 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${item.img})` }}></div>
                        </td>
                        <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-${item.color}-500`}></span>
                                <span className="text-sm text-gray-700">{item.status}</span>
                            </div>
                        </td>
                        <td className="px-4 py-3">
                            <button onClick={() => setSelectedItem(item)} className="text-primary hover:underline text-sm font-medium">查看详情</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-end p-4 gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-600"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm font-bold">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-600 text-sm">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-600 text-sm">3</button>
             <span className="text-gray-400 text-sm">...</span>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-600 text-sm">10</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-600"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
         </div>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="人台详情" maxWidth="max-w-2xl">
         <div className="space-y-6">
             <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                 {[
                     ['身高', '175cm'], ['胸围', '88cm'], ['腰围', '68cm'], ['臀围', '92cm'],
                     ['肩宽', '40cm'], ['臂长', '58cm'], ['腿长', '102cm'], ['颈围', '34cm']
                 ].map(([label, val]) => (
                     <div key={label} className="flex flex-col gap-1">
                         <span className="text-sm text-gray-500">{label}</span>
                         <span className="text-sm font-medium text-gray-900">{val}</span>
                     </div>
                 ))}
             </div>
             <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                 <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                         <span className="material-symbols-outlined">folder_zip</span>
                     </div>
                     <div>
                         <p className="font-medium text-gray-900">3D模型文件</p>
                         <p className="text-sm text-gray-500">OBJ / GLTF</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     <span className="text-sm text-gray-600">已上传</span>
                 </div>
             </div>
         </div>
      </Modal>
    </div>
  );
};