
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const data = [
  { id: '01JFAA2000BODYSCAN00003', memberId: 'SAINTANGELO_MEMBER_003', time: '2025-12-15 18:26:47', source: 'STORE_BEIJING_002', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq9KRwMQWSHCs3TJhipzrUM31cbJVcgaqNAY7YkAjWEP3j7MkU83l1r_Naivvr-h3rng15N9hvZriVILVfUfDFTV45Ro5jcIS4c3icE0P3RFNXfZgv9lmFVV9A675-TQN0MbnTwuKrAGlCcuUWwFjYLsJ3bZ0Hs6bYnX9k1vv_JbYwuc8g9Di5q-fhCEPSPg8_61M2bn2gcRu6UOXCFPPw3EfBc7oReowgTICv70TgO_5jKXuQMuvfgd8301CXbEWDk932oo_gvBA' },
  { id: '01JFAA2000BODYSCAN00001', memberId: 'SAINTANGELO_MEMBER_001', time: '2025-12-14 18:26:47', source: 'STORE_SHANGHAI_001', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcW9DE6roMESgdCa6OKOIQ1HwBQmm3yOhKSd1_D7rQBbSIgGTuvi4mmPan64ULPAe_1lZlig8hmzSQ5ZaVy6H7v8E1xNviOL-Fh9kWsNkDqZ5F53-8Je5yb-VHCLOSiTo4Xju-DIDLI-NVPRUcoJViRakElcq1NiSLmYqQ6P4ZVy-vQ8qmnbbZKJ9d0Uh3lUjwZ0WnEfQ9mCY7bVG0i7OK-NdqZ4k8g0G2spAwW0wvkfqwGGxo_O5bWPw2vgVjZriB0Np9GMlzCg4' },
  { id: '01JFAA2000BODYSCAN00002', memberId: 'SAINTANGELO_MEMBER_002', time: '2025-12-13 18:26:47', source: 'WECHAT_MINI', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB63dd0PGdXSepdJV1OqoCUvjHTsJ0KNDxlq6qTNQejEl1o6l759H0817PfIdCQ7DrTirKc-q3AZ27Px1FutZaxM764ChXMCxE2mweKrIEP9b0eq0peolSCsWzhXN97crdZwVizd1pPHxIZ3JBTwq9zip6Ua3a8aFPHTFqaKsLQW1-Bh0RZL_C92Oph6RWvLcoXyAAsH4ly-h137k4M7vCp2qNJ0JygDviGnlPWWVrkqbjTIaFWRE7-8YraFebA1Ep5vQByA3J95pg' },
  { id: '01JFAA2000BODYSCAN00004', memberId: 'SAINTANGELO_MEMBER_004', time: '2025-12-11 18:26:47', source: 'STORE_SHANGHAI_001', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFU55fmBFT2hdMDaNknEODx3swRR-P-8uKkswoDgU4vC4WyoWpzMYSooWcRHu4S6i3DF_iTko9qd6CMfBWIDG7s65twK5T38hlMFDp-MyMXPm0Us7DX74We15O9ix2VZ4tmaZ-sHSbW55doznbB662heRZGx4hwI3ZMAjcttJSlus2OrZ5lrAVWcSQhY2d-gb0orf-2yv1aSVwb8tJABzDl9EFw9uDh8dGvINGUODKAkP1B5fqYs_I57lr6zWTbIIJMlCrvvHq9g0' },
  { id: '01JFAA2000BODYSCAN00005', memberId: 'SAINTANGELO_MEMBER_005', time: '2025-12-09 18:26:47', source: 'WECHAT_MINI', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsgN-ISu3oUYdgbZWSulJp4qosi8geEZwFe2GkhmY9vZPhDqKzrTkMCaogXZS13E64eIflEYWnXU9XfQtz_PkBrGNbPV7K09W8mbp0bRSe9w5hb_MEp-slVINIUFijxMDpvU9_wyqe1A9mL7atLWrTEMBXDL5UhfVNPQ086dQS4Q7jkP48E6Ayj5aBj8k3vRcxeoIg6T1iyRFIb9GV6a_2A5giEpKg5fhEy4fyuZMYd9GolypAn-N_GsntNmcB84om9dkBQKKdX5I' },
  { id: '01JFAA2000BODYSCAN00006', memberId: 'SAINTANGELO_MEMBER_001', time: '2025-12-06 18:26:47', source: 'STORE_GUANGZHOU_003', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-FnFY_B0I1krubbaFPdxvnv_fEcZIEK9rBjbM68Za97UsJJP0Ga4yoS_0gVMA2C0IaBAhT9snzlujH1CqXHlCqbtEO0-rnz62LFUfGYfX8fSpnlVIYdUJItz1sDL7wZ_DZQbgPx7iEY8VO5zr3t5wMvurVkC-Ij6AAGZkwCQhRtuRCQFxJO_bpj3Bg2rtqqlpgkk4YHcK1r_i4UM0JE0gxW1bVFdNeB9XLYWo55U2w1oPP7a-pFxCxk33kNrwh2kvOuXZAe5YhEw' },
];

export const PortraitLibrary: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Sub Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-slate-800">人像库</h2>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span>用户资产管理</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-slate-600">人像库</span>
          </div>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="搜索" 
            className="w-64 h-9 border border-gray-200 rounded-lg pl-4 pr-10 text-sm focus:outline-none focus:border-primary"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary">
          <span>创建时间</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 px-6 overflow-hidden flex flex-col">
        <div className="overflow-auto border border-gray-100 rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f8f9fb]">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">流水号</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">会员ID</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">时间</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">渠道</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700">缩略图</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-700 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-sm text-slate-600 font-mono">{item.id}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.memberId}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.time}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.source}</td>
                  <td className="px-4 py-4">
                    <img src={item.img} alt="" className="w-12 h-12 object-cover rounded-sm border border-gray-100" />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button 
                      onClick={() => setSelectedItem(item)} 
                      className="text-primary hover:text-primary-hover text-sm font-medium"
                    >
                      查看详情
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="py-6 flex items-center justify-end gap-4">
          <span className="text-xs text-slate-400">共有 {data.length} 条数据</span>
          <div className="flex items-center gap-1">
             <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-slate-400 hover:bg-slate-50">
               <span className="material-symbols-outlined text-sm">chevron_left</span>
             </button>
             <button className="w-7 h-7 flex items-center justify-center rounded bg-primary text-white text-xs font-medium">1</button>
             <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-slate-400 hover:bg-slate-50">
               <span className="material-symbols-outlined text-sm">chevron_right</span>
             </button>
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-200 rounded px-3 py-1 text-xs pr-6 focus:outline-none">
              <option>10 条/页</option>
            </select>
            <span className="material-symbols-outlined absolute right-1 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="人像详情" maxWidth="max-w-4xl">
         {/* ... Detail Content remains same as previous but with minor aesthetic tweaks ... */}
         <div className="p-2">
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                   <p className="text-xs text-slate-400">会员ID</p>
                   <p className="text-sm font-medium mt-1">{selectedItem?.memberId}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                   <p className="text-xs text-slate-400">拍摄时间</p>
                   <p className="text-sm font-medium mt-1">{selectedItem?.time}</p>
                </div>
                <div className="col-span-2">
                   <p className="text-xs text-slate-400 mb-2">人像图片</p>
                   <img src={selectedItem?.img} className="w-full max-h-[400px] object-contain bg-slate-900 rounded" />
                </div>
            </div>
         </div>
      </Modal>
    </div>
  );
};
