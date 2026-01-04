import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const products = [
  { id: 'SN-20230501A', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgO5i1dU5p2RfUP8GOR34lziBbpicFhT6tiawzwTf47lkALoV1m0QZRCkxU29qIpXcNpMT2sT4nB0Xe4KjeCHhDdnUCiP9Anqy_1b2ynnvP2NrbkS77inY7SEKz2ygQBRJkLOg0TioWgEphmGL2kXgFCVaVGdfxzmIUh-t--qHDwx5UdEe1NeM_MI1Aos9JGURn7IxTCLO4UVd485T9lLlJrYqeHsHsOghEPs2Sbb1JU6SMRc_phq2hYhoXUtXABgGb8_ctRDyNkU', has3D: true },
  { id: 'SN-20230501B', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZb88D-vGfMBxaBU4zX5cvpNHzE9Fg9AD9AlLnCK2LMjs_dFPeUwgSw_cRInOrdFUSXLtcgsbuwHf7qCvcAHTLll50C8J03j0uDLEFbIBSLisfKIwmb4OywK9nT6mAHJMZnEAjj-0_tv3vwpdQxaajhPY_jyyXp-U0pbwQb7r9rXaKfAJB6fCQ_4U4t74Le6Y7f4MgXCnin10ap93LBxKl3xCX-OYFkXbZmwxix6q8tWYhfjifz-qoBTfpwhAyWn5jckADIL-GMts', has3D: false },
  { id: 'SN-20230502C', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx1sHYf9ozJkU2oJIy-tzU7ufSD8m8DcYeSL7vfubcJFiSFwosRzuHTcwPsvdHVc_mG4i5FoB4J8lsjZQNFI9uP9WMjN59ooRSEoaCTuHsQqJYvg7i2GDDAaURwD-rHIjXjXPNjOL2pzJjvaD0bj47gILDDcPrJVLrGzf7xVQqfAOVFWAGeO8sU7B_xl5NFqCmuwdKzmQFDVfRl2_5PHONGiXZJIXmX9S0vSDWliG7YlP5gMXKDWAdPWRPZ4mHgXLuMFeEGY7OF5M', has3D: true },
  { id: 'SN-20230502D', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRM50DpXXo7BKGXQjBrWc4nmP6yMegt7cSsUhLV3yGqAw5n5M119aNetpnT2zBveqeS9HdTpwNJ1BVIY25M-J4LBsW3A8iwNFBlFBinaDCtRQmCfK7gUpV16C9IDavNU0z-hJJ06p4wmnZK9R8CAGf6RJ7YIlPbWF2ue3cEC3zT0vVfhR4Yj5CfJOXSoXpsOXCYX8ciQ8ZNnv30LuUeVDemfmhOy5tH3SfhhiSRA7jGC1MBrbH-me12MIqMvy4pGDadzl2x_YU6fo', has3D: true },
  { id: 'SN-20230503E', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaL_clRJw2UxyiTtqIs2Pt5UpnFPiPRdJiJdKYfcOXzU2ug0b6P5Q-MSC2Vl-CZMohewLCNG0VBqJPNOXuGZ7eQQkanfVt-yXhjYHPjsfJoV38tjZk_8ZSTmU-59NKYNuv8a5E03WltYPd2raM16v14NVTwBBMbF5Hgblee5OWVMnXwlA-vJjRB6_0D72IoP8SbAHSGMQTGDAJZATAsnI8K2iUDjmwtFeo38sx55hCCPVW8I4ZAbCwsv6lr0dCFJRwcIcxOnsd5FE', has3D: false },
];

export const ProductLibrary: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">商品库</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
            <input type="text" placeholder="款式编号" className="form-input w-full pl-10 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20" />
        </div>
        <div className="relative flex-1">
             <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">calendar_today</span>
            <input type="text" placeholder="时间范围" className="form-input w-full pl-10 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20" />
        </div>
        <button className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700">搜索</button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 flex justify-end border-b border-gray-100">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-hover">
                <span className="material-symbols-outlined">add</span>
                新增商品
            </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">款式编号</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">缩略图</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">是否有3D</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.id}</td>
                <td className="px-6 py-4">
                  <div className="w-12 h-12 bg-cover bg-center rounded-lg shadow-sm" style={{ backgroundImage: `url(${item.img})` }}></div>
                </td>
                <td className="px-6 py-4">
                  {item.has3D ? (
                    <span className="material-symbols-outlined text-primary fill">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-gray-300">cancel</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => setSelectedProduct(item)} className="text-primary font-medium hover:underline text-sm">查看详情</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination placeholder */}
         <div className="flex justify-end p-4">
             <div className="flex gap-2">
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-lg"><span className="material-symbols-outlined">chevron_left</span></button>
                 <button className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-lg text-sm">1</button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg text-sm">2</button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg text-sm">3</button>
                 <span className="flex items-center text-gray-400">...</span>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg text-sm">10</button>
                 <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-lg"><span className="material-symbols-outlined">chevron_right</span></button>
             </div>
         </div>
      </div>

       <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} title="商品数据详情" maxWidth="max-w-4xl">
         <div className="space-y-8">
             <div>
                 <h3 className="text-base font-bold text-gray-800 mb-4">订单上下文</h3>
                 <div className="border border-gray-200 rounded-lg p-4 grid grid-cols-2 gap-y-4 gap-x-12">
                     <div className="flex"><span className="w-24 text-gray-400 text-sm">订单号</span><span className="text-sm font-medium">PO20240726001</span></div>
                     <div className="flex"><span className="w-24 text-gray-400 text-sm">款式编号</span><span className="text-sm font-medium">SKU-SHRT-012</span></div>
                     <div className="flex"><span className="w-24 text-gray-400 text-sm">版型</span><span className="text-sm font-medium">修身款</span></div>
                     <div className="flex"><span className="w-24 text-gray-400 text-sm">面料</span><span className="text-sm font-medium">100%纯棉牛津纺</span></div>
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
                         <tbody className="divide-y divide-gray-200">
                             <tr><td className="px-6 py-3 text-sm text-gray-700">领围</td><td className="px-6 py-3 text-sm text-gray-700">40.5</td><td className="px-6 py-3 text-sm text-green-600 font-medium">+0.5</td></tr>
                             <tr><td className="px-6 py-3 text-sm text-gray-700">胸围</td><td className="px-6 py-3 text-sm text-gray-700">102.0</td><td className="px-6 py-3 text-sm text-gray-700 font-medium">+0.0</td></tr>
                             <tr><td className="px-6 py-3 text-sm text-gray-700">腰围</td><td className="px-6 py-3 text-sm text-gray-700">95.0</td><td className="px-6 py-3 text-sm text-red-600 font-medium">-1.0</td></tr>
                             <tr><td className="px-6 py-3 text-sm text-gray-700">袖长</td><td className="px-6 py-3 text-sm text-gray-700">63.5</td><td className="px-6 py-3 text-sm text-gray-700 font-medium">+0.0</td></tr>
                             <tr><td className="px-6 py-3 text-sm text-gray-700">后中长</td><td className="px-6 py-3 text-sm text-gray-700">76.0</td><td className="px-6 py-3 text-sm text-gray-700 font-medium">+0.0</td></tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
       </Modal>
    </div>
  );
};