import React from 'react';

const data = [
  { cat: '肩部', catColor: 'blue', level: '轻微', desc: '肩部略微前倾，形成轻微驼背外观。', model: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrQoitkuCqJDvsBgQIQc0lz0aleav99ZL43jMcr4OrRrKkUFqEr14JNWq9Rbb2JIrfkEglsalMh6ZnL6F1NxWxNYGh6-7ZmBfm07sEBN9586jDQdEvA_mhApRtzDDVGZxng9_G_Aph2oWWVztKydFqWGBgYV6SZPytAnhpdJzJ_n8G5tgZQ4J8q5jXETa4yT530ixBA6hhoN9WwHwJeN1bUkmvjzb0bFqWy_jpn3biFTJPZk3h1vVoqfUVzYYRVh5ryxrnTgHAyYA', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXdFzCK9XJ3tXTsSL4S_hZCYrnZJyqzrl7l1FJarpG8qSU_D2PjXXarQTubtIzYl4JXSiXZEaIXvAcAhRVpVhO9TF6BQSkfV6BSdgTxtfD2shT_ne-HvG6cn3SqurDq7mh0TH_nK8CJ5vIlSiblarrVkGVZuP7amN5tUJtZbSEG-YrqaMeo-3YqsxBiaOU_pwFk6w_3NcEH8ZF_XjC1yGCHyDuFo-X9uka8Kv9z4hkMBtOVs3UiImwSH1Uqi_K_DYXWlTAUXGoQbs' },
  { cat: '背部', catColor: 'green', level: '中度', desc: '脊柱侧向弯曲，背部呈现明显不对称。', model: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJjqk87_lL149yGha_5h91dXROXoV_dUckE0g76W_G5LaWxCKvxwmd-QGcdE_htvjv_XFbVQx0qFIF6fioCanUXDitnK0FDs1KGUJ-3WfMvwBUo3mvxMsUqd6MQx8osC0SqkoAgqXlKZ6OUrefIRtFt5e0lm5BuFy82wol-X1XxDChVF7HX2hazdyLwqRmtmSizwEL_XejvuW1g5Ch3WyQrtDgmmTRyQqeuCnPW009dqOqz0K9KYa8usyviH1qJR26yWOlg8Kkkaw', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcRPs7jg6olzsgfJrIbAFNhkA5Aeh10Z6xcv5NErLKd8iQ0Z6qjNhj1zFC4i-xmh2F2T-RltQpc6v6Arllbf6yZCSvCBx3vSgqOdCBpkZv01BGQumpuS9us1Sjh0LYDpZINJU8agzAUbSThTrs1dwpj5or8NijqHSWGgzAFLEEZMZKzaMrsjQfpiEDNiJuZJY6AruZYAPxzq-v7QBM9-OHjhnMmRQdRm-DjnjvzSQXpA3eDa8tQeE9mEIiN0yiGml14wnFbTGipNU' },
  { cat: '腹部', catColor: 'purple', level: '轻微', desc: '腹部肌肉松弛，略有前凸。', model: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwz-iJJArAqTsGF4kB17uKi5aK4gtqiY_kBt-BFv5NoeA040RnMYIZCa40mrQfwRxoCe3Juz4bsCgbQrePqSV9F_LGjbW1x8Ck6yc0vPNoIVjp7imnMPunZHGJixa7QKcIbxl7rltv72gLj6sxUZcxrPo1-2alw_vtzVVSC2I13ekKM-KzfD-ZTrJX5S09ZHncwKiFLoA78fB2Er28eiNl2kwrGXf1br-gZ-kGQ6SUq4kngZjTG8Q3fvb4uAALLdYCL7bEv9hsQLg', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr4Py24we05sX2mDMFFISPiPh4j06lh3f_-0kUZeRwQTtU6W2U3QAqgiba3-NbGVyXI7yGu22irHbREVYI3hSfyeDV_MdiSMJwwTtnbcOo3ZmBpZ3f32HgsrxQIMMCBd9jQmYstGLVMhop_OiLt71Ebrn-5Ija1UjJdWeFq41DL7lg-DYZjneUtPcNjA3xaadDg6EdzbCIWi_A43ALZHy_FjAIq0ZKu_LmipgO8VaySPuVifzjvwfal3SFlsU16zjm9P1gCkhybrg' },
  { cat: '颈部', catColor: 'orange', level: '严重', desc: '头部过度前倾，颈椎曲度变直。', model: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIuU5jBcuXoFg8dIUMQZJ09ru1wDH3OtFaf__DPPq0H6AhNTnqKgIyeqQcmAyC8sx8X7MfLYHWcAt6L_XSima1waVwbpTs_j-FhCk5_MljT4ROJUMjraMw0FRqWGMQkOzF6_pxVCOvnDFFEC_mksGq-kzEj_nsjr272i-KoP-5uiJE37-3fy8-NKrYsEP3GRynqePTRTE_AL_51mflSzaHvuXnQ_qRxk2MTLmAof6pk47vI_GZG6vwpnl7ZUm2F9_JqqFBqm5qXyU', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCakM6S-Bq0-2-TZqbQ8j6iV5CnM0eXNJ3l8u6IzuSNvL282JwFnFYMd8We5yfH4CjzZtg50zVDJ1vz4NadUwwlFgpQQH2RfgPceUj7m-grNtDJiFh4c9Mq_Gpn6eTt2iAjdXSj4cDRRqLmoUEXreIRu5vCV8VE0zO_TT-q0LaWL66dwAn4qqyC3M8fwjxuxg-IafoEa-M_RuBY0v4trqmKphdApOZJ20u0By1cCrJa70FTX_f6aTOzERRvCh69HYTlncl292P6DT4' },
  { cat: '臀部', catColor: 'red', level: '轻微', desc: '骨盆前倾，导致臀部后翘。', model: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqnbpTFtIDP7UFSUFgr6KqRXyTGgcTOTHEFyS2F3f_8MuXUrTY1pwiMQA02aNJ2pOIvuCg5Hnr_8qu01pR_y1XUhNe_O34VsbGAtZWTxV6hN_UsRoBi4hLf-F6fl55LCHydKb3sw7D7oBuduq8O3z9W1nK9JMP25BRirQNeiGaA9qPDhxvZV9lk62AkSvsdGYpzLTn4LX-ND5d3QcGFpJNClOFJh2UQCXJzFzskGNP0MR7CL9ImQoCUS59Lund52QxLk5MCW_u1nU', ref: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_zMfL2DZNF2nmpMG1rkDjo8mjdpaadMYD9PtkZ5gRspK2uNmEXDFvK0odktERGtkGV7CiWwSN5m3V2rlepAwIlia50G5_yuAdB5Jwt73QdESA8nQro3KaK7t8dUBPHurC0STGEBbxdb_WqajCd8zK7jroUJl-MvGdxl3zCNnap50yaxwNzXFFxdT6gMkaJ2P77a-6AabKyOnR8s4SfNToTwwawgAS1vF3YpntiHokEGJwDEOZtO5cj69agCz4_o3dr2anZfvLxHg' },
];

const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-red-100 text-red-800',
};

export const PostureLibrary: React.FC = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">体态库</h1>

       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-4 items-center justify-between">
         <div className="flex gap-4 items-center flex-wrap">
            <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                <input type="text" placeholder="搜索体态名称" className="form-input rounded border-gray-300 text-sm pl-10 h-10 w-60" />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">创建时间:</span>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">calendar_month</span>
                    <input type="text" placeholder="选择日期范围" className="form-input rounded border-gray-300 text-sm pl-10 h-10 w-60" />
                </div>
            </div>
            <button className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-50">查询</button>
         </div>
         <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded hover:bg-primary-hover flex items-center gap-1">
             <span className="material-symbols-outlined text-base">add</span>
             新建体态
         </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
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
                        <td className="px-4 py-3 text-sm text-gray-700">{item.level}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 truncate max-w-xs">{item.desc}</td>
                        <td className="px-4 py-3">
                             <div className="w-9 h-9 bg-cover bg-center rounded-md border border-gray-200" style={{ backgroundImage: `url(${item.model})` }}></div>
                        </td>
                        <td className="px-4 py-3">
                             <div className="w-9 h-9 bg-cover bg-center rounded-md border border-gray-200" style={{ backgroundImage: `url(${item.ref})` }}></div>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                            <button className="text-primary hover:underline">编辑</button>
                            <span className="text-gray-300 mx-2">|</span>
                            <button className="text-primary hover:underline">删除</button>
                        </td>
                    </tr>
                ))}
            </tbody>
         </table>
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
             <span className="text-sm text-gray-500">显示 1 到 5 of 97 结果</span>
             <div className="flex gap-2">
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                 <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded font-medium">1</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">2</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">3</button>
                 <span className="text-gray-400">...</span>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">10</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-base">chevron_right</span></button>
             </div>
         </div>
      </div>
    </div>
  );
};