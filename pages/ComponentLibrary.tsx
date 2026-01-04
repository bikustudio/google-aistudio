import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const data = [
  { id: 'P001', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzuoU-nNo9SCgBbg-a6jIqZnPzSvsm6_bSh-Oq9Lkmb5ZYMJkHmwXeGHhNqKtsxSDpaWKt_Wa5qxympLhEuQMKDKKi5f7_m3BW1SUVCWVb6CmTYV8L0S9uJnqR5Z7X-4fzy0QizvMn-xR852vhVlY5lnD262b4BjfMz7SiznhZsg_rAiw2vmkchSv0NupeJJ4J3UInS9CltZZbgauQd1RtCsNmz70LeAceY8tPmHbDQjbkUR6ZUaYd_5xWCb_9Sevn_QRnnXD5BkY', status: '已同步', statusColor: 'bg-blue-50 text-blue-600' },
  { id: 'P002', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ANfz_AWrFvsoWg8vhSb3dOs3v7hI7oRsTEzxvSRRTPJ8JloI_oGVOoF1W7xdWu-l-H95wvHXbfGYpizZmRMn5kmuSCxDR9x5L2UCp26Wgm2FhwsQDq0VG6tiEvo01ZvfBKp5_6QPKAUPSWFsuzmsMMJQypj-x28xRISiOxsPCMmH9KVGUVs9BrwDhuBWKHzx2vT_nzPOv887rwcsR8vTRL-o8vqRCDUKXhXdq6QPe5xQ-BzAo38fyyyBkOvVJ06zDkktmpy2CyA', status: '处理中', statusColor: 'bg-blue-50 text-blue-600' },
  { id: 'P003', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAElRtISDwn1Aq0y54hPgqsA128g04ZzS8EtfKLKPCfC3AlYerDZbfYkTBjSrjP1XLhNn3K50ILn45IP6WQwkGIS9UMCOjKzM6J10fuHguVIo63vIxzFXSXQTnYO44YyfAu8YIqY4lwRH53bsu2QyeiedXpkYlgR2s-wPdn7VrALzDWvb5kkrjOZU54-AGpp0c5e93k6YhimHZfQNHzj5n0ch7zk_0Ni1moHgpEmyEX-jB3olAWtdLMZPIJ4VDN3cDuO36y2fLW04A', status: '已同步', statusColor: 'bg-green-50 text-green-600' },
  { id: 'P004', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtSFP1l4vuh33Ir716ebMBJefCeIN9jpUJoX-56Nzg4G_voi6zgf-szoGbSoHdqKXNAn2SvNf5OsvImqcfyPLM6B5CGm2Ay7BfK7JhOO1ujBwQrSq3YoZq9RL47FHVt3pMV0ZJmOyFlrNQlm9N6ktTFxGZfxgZ9i_gPl4etzDsjL6wyjm_HFQ6VYbm58xfB4J7_i8qRaQj_mjv_WTf0XFrHgy5WQ_6AWHJWj8L9Sq3S3aGwXJRimHoR0nY38GAo_sszq3_C_psZ1Q', status: '失败', statusColor: 'bg-red-50 text-red-600' },
  { id: 'P005', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnrgp0S9D_3gRDHqZEcID-sep84fBi5v4OvzW1BZk2vzumBSviKta71C7Fq6vWPceZeU52gzKxea73Ue1QP5Nk8111OZ620V_6apTZUcl0RVHDa3A2mMUILinUOKGEwR9s7B1WCtd2-VXFq_BpJeuxUfjCvZ_jzWsNz6uVUF6yQfVtfmFqI1YmZlRKdl2IhO_y57gVJb1k-SynA08CXV3A7djD-5Qr03-IaQ8KvQ2_AuyBrQfARUUlI4hYwoUXHnSDd5ye70d0P60', status: '已同步', statusColor: 'bg-green-50 text-green-600' },
];

export const ComponentLibrary: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">部件库</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 whitespace-nowrap">部件编号</label>
            <input type="text" placeholder="请输入部件编号" className="form-input rounded border-gray-200 text-sm h-9 w-48" />
        </div>
        <div className="flex items-center gap-2">
             <label className="text-sm text-gray-600 whitespace-nowrap">同步时间</label>
             <div className="relative">
                <span className="material-symbols-outlined absolute left-2 top-2 text-gray-400 text-lg">calendar_today</span>
                <input type="text" placeholder="请选择时间范围" className="form-input rounded border-gray-200 text-sm pl-8 h-9 w-56" />
             </div>
        </div>
        <button className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded shadow-sm hover:bg-primary-hover">查询</button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
         <table className="w-full text-left text-sm">
             <thead className="bg-gray-50 border-b border-gray-100">
                 <tr>
                     <th className="px-4 py-3 font-medium text-gray-600">部件编号</th>
                     <th className="px-4 py-3 font-medium text-gray-600">缩略图</th>
                     <th className="px-4 py-3 font-medium text-gray-600">3D模型状态</th>
                     <th className="px-4 py-3 font-medium text-gray-600">操作</th>
                 </tr>
             </thead>
             <tbody>
                 {data.map(item => (
                     <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                         <td className="px-4 py-3">{item.id}</td>
                         <td className="px-4 py-3">
                             <div className="w-10 h-10 bg-cover bg-center rounded" style={{ backgroundImage: `url(${item.img})` }}></div>
                         </td>
                         <td className="px-4 py-3">
                             <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${item.status === '失败' ? 'bg-red-50 text-red-600' : (item.status === '处理中' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600')}`}>
                                 <span className={`w-1.5 h-1.5 rounded-full ${item.status === '失败' ? 'bg-red-500' : (item.status === '处理中' ? 'bg-blue-500' : 'bg-green-500')}`}></span>
                                 {item.status}
                             </span>
                         </td>
                         <td className="px-4 py-3">
                             <button onClick={() => setSelectedItem(item)} className="text-primary font-medium hover:underline">查看详情</button>
                         </td>
                     </tr>
                 ))}
             </tbody>
         </table>
         {/* Pagination */}
         <div className="flex justify-end p-4 gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400" disabled><span className="material-symbols-outlined text-base">chevron_left</span></button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm font-medium">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">3</button>
             <span className="text-gray-400 px-1">...</span>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 text-sm">10</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600"><span className="material-symbols-outlined text-base">chevron_right</span></button>
         </div>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="部件详情" maxWidth="max-w-4xl">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col">
                 <div className="grid grid-cols-2">
                     <div className="py-4 border-t border-gray-200 pr-2">
                         <p className="text-sm text-gray-400">部件名称</p>
                         <p className="text-sm text-gray-900 mt-1">标准领</p>
                     </div>
                     <div className="py-4 border-t border-gray-200 pl-2">
                         <p className="text-sm text-gray-400">部件ID</p>
                         <p className="text-sm text-gray-900 mt-1">CL-001</p>
                     </div>
                     <div className="py-4 border-t border-gray-200 pr-2">
                         <p className="text-sm text-gray-400">部件类型</p>
                         <p className="text-sm text-gray-900 mt-1">领型</p>
                     </div>
                     <div className="py-4 border-t border-gray-200 pl-2">
                         <p className="text-sm text-gray-400">创建日期</p>
                         <p className="text-sm text-gray-900 mt-1">2023-10-26</p>
                     </div>
                     <div className="py-4 border-t border-gray-200 pr-2">
                         <p className="text-sm text-gray-400">最后修改日期</p>
                         <p className="text-sm text-gray-900 mt-1">2023-10-27</p>
                     </div>
                     <div className="py-4 border-t border-gray-200 pl-2">
                         <p className="text-sm text-gray-400">状态</p>
                         <p className="text-sm text-gray-900 mt-1">激活</p>
                     </div>
                 </div>
             </div>
             <div className="flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded min-h-[280px]">
                 <div className="w-full h-64 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD0N6WRClXTqCvt0jwk0FL_lcL5GckmtN06e2ZxlxfumvDucgOsBdUIffN0ixdMOzTB7c8TNmYkGu97vy-oR6BoQAd6ICahgIy5C9RQ3T-K0tx_02hEt3sfONAfndxLpbtzhG-NyyUkuwGbaXttzBdZLH1LzOWBAYFQCeQ8uj97NPtNn1DMf02q9kiegUVBqaZo1yDymykoLSGil8gbpskfVVakBSAH4Gnld9q4UyPEUUAUu1PhX5qDiUagvMlL-3jXOnYdUWebnI")'}}></div>
             </div>
         </div>
      </Modal>
    </div>
  );
};