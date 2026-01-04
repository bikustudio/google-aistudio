import React from 'react';

const data = [
  { cat: '男性成人', catColor: 'blue', grade: 'A型', gradeColor: 'green', desc: '适用于标准体型男性服装设计', file: 'model_a.fbx', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXZFKcErbV1n8UR4He4i4QZFcUvb1YCuh3QxPm6FD-VuKEp2RMkMp_iz8ri17v-oA2BCht9D2ZlYjuY0SiOoFVSW-bk_7O9uGkeH6krmvarKZ16lins2uKTCvZu3C23XBxgVDIsINOifKLrOd_AzuCXY8EVHH8je2dxi3Bli2lEdBCWX9HvZJOtcfDaD1_IE27M872LXuebzdl7mzK_opoORgH7qSrcTpCm_oEpo54qBJu7hu5PNCW-kJCIZ5_JeiAnIXlR5-gRM' },
  { cat: '女性成人', catColor: 'pink', grade: 'Y型', gradeColor: 'yellow', desc: '适用于肩宽背阔的女性运动服装', file: 'model_y.obj', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_lLRkAEU8UCeGNEyKrdxgAa1P8KBWsg7J3aa0_4_4ufN2g-rMNz9l1PbD6kjZLHJmNsSSctRJHGFzBC0PpkqaEMr1jB8GZkJ_1m19tIGheBxp1ZpUDEjkuZwohSZcG2nH41bc_DkilDnxHePPYTDvndHI55jTs28ZkaI4XXz0mgdwfISU40SSomKaN0JiW9-8UBNLlvS34_Mmh9orIOtkK8xFugJ736kyCGr86j4UznaIJmzLm1iKeE7KUC6MmgE9XUH6xCLxdQ' },
  { cat: '男性儿童', catColor: 'blue', grade: '标准', gradeColor: 'gray', desc: '通用儿童体型，适合快速打版', file: 'child_std.glb', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWiVPeFZr2egBAKnyFbZzGsR5LZ-dNC7job77RZXxs21OlP5r9D_h826KyYFdg8yParAXp6bHde9ZneyGUDCckJnM01wokox5lp2htxnvVuoZXcMjpC_GJuUl0gSfhbkkrD1ko2GyipZosah9aJVzXaX5nDHf0ZJXKCZT7EqpobbbfJY_efYivBhQcP_iewX7hVbwbSNicnTFmBRYC1UsQBQL8DFlWI1a2BbSPyf5HnoY8tKkAgzo29DHVeingH5gOnO_dzBpZGXE' },
  { cat: '女性成人', catColor: 'pink', grade: 'X型', gradeColor: 'purple', desc: '典型的沙漏身材模型', file: 'model_x.fbx', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCViZj9EfKMwfv_76PHLVj25R_DYVE3RAi0xh2k8kFvuwk6i4Ybmo8S_JNNvdokg-rak7U9qSzBhZI1fc2jlkMA9YGW4rYqRD9srH2nJ2uKclu1JUwDxkVtPvMnuwzaVqrbhKfPKAsUg3YrEHEBu7UAHS2oUVLMG5PAF8T4Z3KBgcau9iWotefGo2aE5t0wvtcidfZQOKXVF_WFXHaRAJua4WJDcuPR16HKetKm_e79UH-9_vASoddXudtGdNX6HfizYX-UNflulog' },
  { cat: '男性成人', catColor: 'blue', grade: 'O型', gradeColor: 'red', desc: '针对腹部较大的体型进行优化', file: 'model_o.obj', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBByFS4_Coh8T_RcgOU2CzC7s3-SWYyFBFOk_0zmUYwutq54bxGRX5adcmpaXKVemQFHbyGvPTsfwPBamzMNhj9-35fu07b1q7362dYrUDgVcGO76BEUl5VIFpBIrIKrwRD477BUO9S0yD1oysn5ByQgJQf_Xl4ac08luYVbEEJRmmuK5OirOhuxL1f5140eZ4r6ozKa3xc3CvWJkrUIqINHyjEMYK92YjQiSyl-vja_i1J2WGzuvnaJv_5_1fbA2j9Nws_4GqNX6Q' },
];

const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    pink: 'bg-pink-100 text-pink-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800'
};

export const BodyShapeLibrary: React.FC = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">体型库</h1>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-4 items-end">
         <label className="flex flex-col gap-1 w-64">
             <span className="text-sm text-gray-600">关键词</span>
             <input type="text" placeholder="搜索体型名称" className="form-input rounded border-gray-300 text-sm" />
         </label>
         <label className="flex flex-col gap-1 w-64">
             <span className="text-sm text-gray-600">创建时间</span>
             <input type="date" className="form-input rounded border-gray-300 text-sm" />
         </label>
         <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded hover:bg-primary-hover">查询</button>
         <button className="px-6 py-2 bg-gray-200 text-gray-800 text-sm font-bold rounded hover:bg-gray-300">重置</button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-end p-4 border-b border-gray-100">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-hover">
                <span className="material-symbols-outlined text-lg">add</span>
                新建体型
            </button>
        </div>
        <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">分类</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">分级</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">标准描述</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">3D人体模型</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">参考图</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">操作</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {data.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[item.catColor]}`}>{item.cat}</span></td>
                        <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[item.gradeColor]}`}>{item.grade}</span></td>
                        <td className="px-4 py-3 text-sm text-gray-600 truncate max-w-xs">{item.desc}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                             <div className="flex items-center gap-1">
                                 <span className="material-symbols-outlined text-lg text-gray-500">description</span>
                                 {item.file}
                             </div>
                        </td>
                        <td className="px-4 py-3">
                            <div className="w-10 h-10 bg-cover bg-center rounded" style={{ backgroundImage: `url(${item.ref})` }}></div>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                            <button className="text-primary hover:underline">编辑</button>
                            <span className="text-gray-300 mx-2">|</span>
                            <button className="text-red-500 hover:underline">删除</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
         <div className="flex justify-end p-4 border-t border-gray-100">
            {/* Simple Pagination */}
             <div className="flex gap-2 text-sm">
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                 <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded font-bold">1</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">2</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">3</button>
                 <span className="text-gray-400">...</span>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">10</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
             </div>
         </div>
      </div>
    </div>
  );
};