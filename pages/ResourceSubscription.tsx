import React from 'react';

const mockData = [
  { id: '8374202512031710126712', name: '-', buyer: 'lt_prod_test_11', time: '2025-12-03 17:10:12', amount: '0.00', status: '已发货' },
  { id: '1820202511251458053934', name: '等2件商品', buyer: '吴胜', time: '2025-11-25 14:58:05', amount: '0.00', status: '已发货' },
  { id: '3788202511251454576081', name: '-', buyer: '吴胜', time: '2025-11-25 14:54:57', amount: '0.00', status: '已发货' },
  { id: '7899202511041957195122', name: 'Listen to Nature-SKC-01', buyer: 'lt_prod_test_11', time: '2025-11-04 19:57:19', amount: '0.00', status: '已发货' },
  { id: '9558202510142014002992', name: 'Fishes Seamless Pattern', buyer: 'lt_prod_test_11', time: '2025-10-14 20:14:00', amount: '0.00', status: '已发货' },
  { id: '8937202510111141221490', name: '等2件商品', buyer: 'lt_prod_test_11', time: '2025-10-11 11:41:22', amount: '0.00', status: '已发货' },
  { id: '1506202510101150062536', name: '等3件商品', buyer: 'lt_prod_test_11', time: '2025-10-10 11:50:06', amount: '0.00', status: '已发货' },
  { id: '7918202510101148459983', name: '等2件商品', buyer: 'lt_prod_test_11', time: '2025-10-10 11:48:45', amount: '0.00', status: '已发货' },
  { id: '3608202509241037007113', name: 'Street Wanderer-skc-15等3件...', buyer: 'fitting', time: '2025-09-24 10:37:00', amount: '0.00', status: '已发货' },
  { id: '3666202509112137584834', name: '等2件商品', buyer: '是浩瀚的海洋', time: '2025-09-11 21:37:58', amount: '0.00', status: '已发货' },
];

export const ResourceSubscription: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col p-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>设置中心</span>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span>订购记录</span>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-gray-700">资源订购记录</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">资源订购记录</h1>
      </div>

      {/* Filter Section (Portrait Library Style) */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-wrap gap-4 items-end">
        {/* Date Range */}
        <label className="flex flex-col gap-1 min-w-[300px]">
          <span className="text-sm font-medium text-slate-600">时间范围</span>
          <div className="flex items-center border border-gray-200 rounded-lg px-3 bg-white h-9 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <input type="text" placeholder="开始日期" className="w-full text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400" />
            <span className="mx-2 text-gray-400 text-xs">-</span>
            <input type="text" placeholder="结束日期" className="w-full text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400 text-right" />
            <span className="material-symbols-outlined text-gray-400 text-lg ml-2">calendar_today</span>
          </div>
        </label>

        {/* Status Select */}
        <label className="flex flex-col gap-1 w-48">
          <span className="text-sm font-medium text-slate-600">订单状态</span>
          <select className="form-select w-full h-9 rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20 text-gray-700">
            <option value="" disabled selected>请选择状态</option>
            <option value="shipped">已发货</option>
            <option value="pending">未发货</option>
          </select>
        </label>

        {/* Type Select */}
        <label className="flex flex-col gap-1 w-48">
          <span className="text-sm font-medium text-slate-600">产品类型</span>
          <select className="form-select w-full h-9 rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20 text-gray-700">
            <option value="" disabled selected>请选择类型</option>
            <option value="fabric">面料</option>
            <option value="accessory">辅料</option>
          </select>
        </label>

        {/* Search Input */}
        <label className="flex flex-col gap-1 w-64">
          <span className="text-sm font-medium text-slate-600">关键词</span>
          <div className="relative">
             <input type="text" placeholder="订单编号 / 产品名称" className="form-input w-full h-9 pl-9 rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary/20 placeholder-gray-400" />
             <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
          </div>
        </label>

        <button className="px-6 h-9 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm mb-[1px]">
          搜索
        </button>
      </div>

      {/* Main Content Card (Table Only) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col overflow-hidden">
        
        {/* Table Area */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 sticky top-0 backdrop-blur z-10">
              <tr>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">订单编号</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">产品名称</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">购买人</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">下单时间</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">金额</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">订单状态</th>
                <th className="py-3 px-6 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockData.map((item, index) => (
                <tr key={index} className="hover:bg-primary/5 transition-colors group">
                  <td className="py-4 px-6 text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{item.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.name || <span className="text-gray-300">-</span>}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                          {item.buyer.charAt(0).toUpperCase()}
                       </div>
                       {item.buyer}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 font-mono">{item.time}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium text-right">¥{item.amount}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      item.status === '已发货' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-gray-100 text-gray-700 border-gray-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-primary hover:text-primary-hover text-sm font-medium hover:underline transition-all">
                      查看订单
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white flex items-center justify-between">
          <div className="text-sm text-gray-500">
            共 <span className="font-medium text-gray-900">777</span> 条数据
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1">
                <button disabled className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium shadow-sm ring-2 ring-primary/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 text-sm transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 text-sm transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 text-sm transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 text-sm transition-colors">5</button>
                <span className="px-2 text-gray-400 text-sm">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 text-sm transition-colors">78</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
             </div>

             <div className="h-4 w-px bg-gray-200"></div>

             <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="relative">
                   <select className="appearance-none border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm bg-white hover:border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer transition-colors">
                     <option>10 条/页</option>
                     <option>20 条/页</option>
                     <option>50 条/页</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </div>
                </div>
                <span>跳至</span>
                <input type="text" className="w-12 h-8 border border-gray-200 rounded-lg text-center text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors" />
                <span>页</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};