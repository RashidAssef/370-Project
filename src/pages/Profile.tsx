import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  FileText, 
  Heart, 
  MapPin, 
  CheckCircle,
  Bell,
  Lock,
  ChevronRight,
  Camera,
  Users,
  Calendar
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

export default function Profile() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top action */}
      <div className="flex justify-end mb-4">
        <Button variant="outline" className="bg-white dark:bg-[#1A2234] border-green-200 text-green-700 dark:border-green-800 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30">
          <Camera className="w-4 h-4 mr-2" /> Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Info */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Profile Information</h3>
            <div className="flex flex-col xl:flex-row gap-6 items-start">
               <div className="relative">
                 <Avatar className="w-24 h-24 border-4 border-green-50 dark:border-green-900/20">
                   <AvatarImage src="https://i.pravatar.cc/150?u=sarah" />
                   <AvatarFallback>SA</AvatarFallback>
                 </Avatar>
                 <button className="absolute bottom-0 right-0 w-8 h-8 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700">
                   <Camera className="w-4 h-4" />
                 </button>
               </div>
               
               <div className="flex-1 space-y-4 w-full">
                 <div>
                   <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Full Name</label>
                   <Input defaultValue="Sarah Ahmed" className="mt-1 h-9 bg-gray-50 dark:bg-[#151a25] border-gray-200 dark:border-gray-800 focus-visible:ring-0" readOnly />
                 </div>
                 <div>
                   <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Email</label>
                   <Input defaultValue="sarah.ahmed@email.com" className="mt-1 h-9 bg-gray-50 dark:bg-[#151a25] border-gray-200 dark:border-gray-800 focus-visible:ring-0" readOnly />
                 </div>
                 <div>
                   <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Phone</label>
                   <Input defaultValue="+880 1712-345678" className="mt-1 h-9 bg-gray-50 dark:bg-[#151a25] border-gray-200 dark:border-gray-800 focus-visible:ring-0" readOnly />
                 </div>
                 <div>
                   <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Address</label>
                   <Input defaultValue="Dhanmondi, Dhaka, Bangladesh" className="mt-1 h-9 bg-gray-50 dark:bg-[#151a25] border-gray-200 dark:border-gray-800 focus-visible:ring-0" readOnly />
                 </div>
               </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-6">
             <h3 className="font-bold text-gray-900 dark:text-white mb-6">Account Statistics</h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FileText className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Total Reports</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Recovered</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">5</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Users className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Matches Found</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400">
                    <Calendar className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Member Since</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">Jan 5, 2024</p>
                  </div>
                </div>
             </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-6">
             <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
             <div className="space-y-2">
                {[
                  { icon: FileText, title: 'My Cases', sub: 'View and manage your reports' },
                  { icon: Heart, title: 'View Matches', sub: 'See potential matches' },
                  { icon: Bell, title: 'Notification Settings', sub: 'Manage your preferences' },
                  { icon: Lock, title: 'Update Password', sub: 'Change your account password' },
                ].map((action, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors text-left group">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-green-600 group-hover:bg-green-50 dark:group-hover:text-green-400 dark:group-hover:bg-green-900/20 transition-colors">
                         <action.icon className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-gray-900 dark:text-white">{action.title}</p>
                         <p className="text-xs text-gray-500 dark:text-gray-400">{action.sub}</p>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
             </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3 border-0 shadow-sm bg-white dark:bg-[#1A2234]">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 dark:text-white">Recent Activity</h3>
            <button className="text-sm text-green-600 font-medium hover:text-green-700 dark:text-green-500 dark:hover:text-green-400">View All</button>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
             {[
               { icon: <MapPin className="w-5 h-5 text-red-500" />, title: 'Reported a lost pet: Golden Retriever', time: 'May 10, 2024 • 10:30 AM', badge: 'LOST', bColor: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50' },
               { icon: <Heart className="w-5 h-5 text-green-500" />, title: 'Reported a found pet: Tabby Cat', time: 'May 8, 2024 • 09:15 AM', badge: 'FOUND', bColor: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50' },
               { icon: <CheckCircle className="w-5 h-5 text-purple-500" />, title: 'Your case was marked as recovered: Shih Tzu', time: 'May 7, 2024 • 11:45 AM', badge: 'RECOVERED', bColor: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50' },
             ].map((act, i) => (
                <div key={i} className="p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                       {act.icon}
                     </div>
                     <div>
                       <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{act.title}</p>
                       <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{act.time}</p>
                     </div>
                  </div>
                  <Badge variant="outline" className={`hidden sm:inline-flex uppercase font-bold tracking-wider \${act.bColor}`}>
                    {act.badge}
                  </Badge>
                </div>
             ))}
          </div>
        </Card>

      </div>
    </div>
  );
}
