import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button";
import { RefreshCcw, FileText, Clock, CheckCircle2, Heart, MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const lineData = [
  { name: 'Dec', lost: 20, found: 10, recovered: 5 },
  { name: 'Jan', lost: 45, found: 25, recovered: 15 },
  { name: 'Feb', lost: 50, found: 30, recovered: 20 },
  { name: 'Mar', lost: 52, found: 35, recovered: 25 },
  { name: 'Apr', lost: 60, found: 45, recovered: 30 },
  { name: 'May', lost: 80, found: 60, recovered: 40 },
];

const pieBreeds = [
  { name: 'Golden Retriever', value: 28, color: '#22c55e' },
  { name: 'Labrador Retriever', value: 18, color: '#3b82f6' },
  { name: 'Shih Tzu', value: 12, color: '#eab308' },
  { name: 'Persian Cat', value: 10, color: '#a855f7' },
  { name: 'Other Breeds', value: 32, color: '#64748b' },
];

const pieSpecies = [
  { name: 'Dogs', value: 65, color: '#10b981' },
  { name: 'Cats', value: 25, color: '#3b82f6' },
  { name: 'Others', value: 10, color: '#f59e0b' },
];

const barData = [
  { name: 'Dec', rate: 45 },
  { name: 'Jan', rate: 52 },
  { name: 'Feb', rate: 48 },
  { name: 'Mar', rate: 65 },
  { name: 'Apr', rate: 72 },
  { name: 'May', rate: 85 },
];

export default function Analytics() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div></div>
        <div className="flex items-center gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[200px] bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 rounded-lg">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">May 1, 2024 - May 31, 2024</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 gap-2">
            <RefreshCcw className="w-4 h-4" /> Refresh
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { icon: FileText, label: 'Total Cases', value: '128', sub: 'All reported cases', trend: '↑ 12%', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
          { icon: Clock, label: 'Active Cases', value: '47', sub: 'Currently open cases', trend: '↑ 8%', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          { icon: CheckCircle2, label: 'Recovered', value: '36', sub: 'Successfully reunited', trend: '↑ 15%', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          { icon: Heart, label: 'Recovery Rate', value: '72%', sub: 'Success percentage', trend: '↑ 9%', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { icon: Heart, label: 'Matches Found', value: '15', sub: 'Potential matches', trend: '↑ 20%', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
        ].map((stat, i) => (
          <Card key={i} className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
            <CardContent className="p-5 flex flex-col justify-between h-full">
              <div className="flex items-center gap-3">
                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center \${stat.bg} \${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
                 </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                 <span className="text-gray-400 dark:text-gray-500">{stat.sub}</span>
                 <span className="text-green-500 font-bold">{stat.trend} from Apr</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cases Over Time */}
        <Card className="lg:col-span-2 border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 dark:text-white">Cases Over Time</h3>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-[120px] h-8 text-xs bg-gray-50 dark:bg-[#151a25] border-gray-200 dark:border-gray-800">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-5 h-[300px]">
             <div className="flex gap-4 mb-4 text-xs font-medium dark:text-gray-300">
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div> Lost Cases</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div> Found Cases</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#10b981]"></div> Recovered</span>
             </div>
             <ResponsiveContainer width="100%" height="85%">
               <LineChart data={lineData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                 <RechartsTooltip />
                 <Line type="monotone" dataKey="lost" stroke="#f43f5e" strokeWidth={2} dot={{r: 4}} />
                 <Line type="monotone" dataKey="found" stroke="#3b82f6" strokeWidth={2} dot={{r: 4}} />
                 <Line type="monotone" dataKey="recovered" stroke="#10b981" strokeWidth={2} dot={{r: 4}} />
               </LineChart>
             </ResponsiveContainer>
          </div>
        </Card>

        {/* Most Common Breeds */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white">Most Common Breeds</h3>
          </div>
          <div className="p-5 flex flex-col justify-center items-center h-[300px]">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={pieBreeds} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value">
                  {pieBreeds.map((entry, index) => (
                    <Cell key={`cell-\${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-full mt-4 space-y-2">
               {pieBreeds.map((entry, i) => (
                 <div key={i} className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-300">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full" style={{backgroundColor: entry.color}}></div>
                     {entry.name}
                   </div>
                   <span className="font-medium">{entry.value}%</span>
                 </div>
               ))}
            </div>
          </div>
        </Card>

        {/* Average Recovery Time */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white">Average Recovery Time</h3>
          </div>
          <div className="p-5 h-[200px] flex items-center justify-center gap-6">
             <div className="w-24 h-24 rounded-full border-8 border-green-100 dark:border-green-900/30 border-t-green-500 flex items-center justify-center relative">
               <Clock className="w-8 h-8 text-green-500 absolute" />
             </div>
             <div>
               <p className="text-4xl font-extrabold text-gray-900 dark:text-white">8.6</p>
               <p className="text-gray-500 font-medium">Days</p>
               <p className="text-xs text-green-500 font-bold mt-2">↓ 1.4 days from Apr</p>
             </div>
          </div>
        </Card>

        {/* Cases by Species */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
           <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white">Cases by Species</h3>
          </div>
          <div className="p-5 h-[200px] flex items-center">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie data={pieSpecies} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value">
                  {pieSpecies.map((entry, index) => (
                    <Cell key={`cell-\${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
             <div className="w-[50%] pl-4 space-y-3">
               {pieSpecies.map((entry, i) => (
                 <div key={i} className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                   <div className="flex items-center gap-2 font-semibold">
                     <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color}}></div>
                     {entry.name}
                   </div>
                   <span className="font-bold">{entry.value}%</span>
                 </div>
               ))}
            </div>
          </div>
        </Card>

        {/* Monthly Trend (Recovery Rate) */}
        <Card className="lg:col-span-2 border-0 shadow-sm bg-white dark:bg-[#1A2234]">
           <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white">Monthly Trend (Recovery Rate)</h3>
          </div>
          <div className="p-5 h-[200px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={barData} barSize={30}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} tickFormatter={(val)=> `\${val}%`}/>
                 <RechartsTooltip cursor={{fill: 'rgba(0,0,0,0.05)'}}/>
                 <Bar dataKey="rate" fill="#10b981" radius={[4,4,0,0]} />
               </BarChart>
             </ResponsiveContainer>
          </div>
        </Card>
        
        {/* Cases by Location */}
        <Card className="lg:col-span-3 border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 dark:text-white">Cases by Location</h3>
            <Button variant="outline" size="sm" className="bg-white dark:bg-[#151a25] border-gray-200 dark:border-gray-700">View Map</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-8">
             <div className="space-y-4">
                {[
                  { loc: 'Dhanmondi', val: 28 },
                  { loc: 'Gulshan', val: 22 },
                  { loc: 'Mirpur', val: 18 },
                  { loc: 'Uttara', val: 15 },
                  { loc: 'Banani', val: 12 },
                  { loc: 'Others', val: 33 },
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium text-gray-600 dark:text-gray-300">{item.loc}</div>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: `\${(item.val / 33) * 100}%`}}></div>
                      </div>
                      <div className="w-8 text-right text-sm font-bold text-gray-900 dark:text-white">{item.val}</div>
                   </div>
                ))}
             </div>
             
             {/* Map Placeholder */}
             <div className="rounded-2xl bg-green-50 dark:bg-green-900/10 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Dhaka&zoom=11&size=600x300&style=feature:all|element:labels|visibility:off&style=feature:water|color:0xbbf7d0&style=feature:landscape|color:0xf0fdf4')] dark:bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Dhaka&zoom=11&size=600x300&style=feature:all|element:labels|visibility:off&style=feature:water|color:0x14532d&style=feature:landscape|color:0x0f1520')] bg-cover bg-center"></div>
                <div className="z-10 bg-white/90 dark:bg-black/90 p-4 rounded-xl shadow-lg border border-green-100 dark:border-green-900 w-full max-w-xs backdrop-blur-sm">
                   <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3">High Risk Locations</h4>
                   <ul className="space-y-2 text-xs font-medium">
                     <li className="flex justify-between"><span className="flex gap-2 items-center"><MapPin className="w-3 h-3 text-red-500"/> Mirpur</span> <span>60%</span></li>
                     <li className="flex justify-between"><span className="flex gap-2 items-center"><MapPin className="w-3 h-3 text-red-500"/> Uttara</span> <span>45%</span></li>
                     <li className="flex justify-between"><span className="flex gap-2 items-center"><MapPin className="w-3 h-3 text-red-500"/> Dhanmondi</span> <span>40%</span></li>
                     <li className="flex justify-between"><span className="flex gap-2 items-center"><MapPin className="w-3 h-3 text-red-500"/> Gulshan</span> <span>35%</span></li>
                     <li className="flex justify-between"><span className="flex gap-2 items-center"><MapPin className="w-3 h-3 text-red-500"/> Others</span> <span>20%</span></li>
                   </ul>
                </div>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
