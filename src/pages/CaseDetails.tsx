import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  ArrowLeft, 
  MapPin, 
  MoreVertical, 
  Edit, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  SearchCode,
  FileText,
  Heart
} from "lucide-react";

export default function CaseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate('/app/cases')} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white -ml-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to My Cases
        </Button>
        <div className="flex gap-2">
           <Button variant="outline" className="bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 text-green-700 dark:text-green-500 font-semibold hover:bg-green-50 dark:hover:bg-green-900/20">
             <Edit className="w-4 h-4 mr-2" /> Edit Case
           </Button>
           <Button variant="outline" className="w-10 px-0 bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 text-gray-500">
             <MoreVertical className="w-4 h-4" />
           </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Pet Details & Map) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234] overflow-hidden">
            <div className="flex flex-col md:flex-row p-6 gap-8">
              {/* Images */}
              <div className="w-full md:w-1/2 space-y-3">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600" alt="Pet" className="w-full aspect-square object-cover rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800" />
                <div className="flex gap-3">
                  <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150" alt="Pet thumb" className="w-16 h-16 object-cover rounded-xl border-2 border-green-500 shadow-sm cursor-pointer" />
                  <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=150" alt="Pet thumb" className="w-16 h-16 object-cover rounded-xl border border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
                  <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150" alt="Pet thumb" className="w-16 h-16 object-cover rounded-xl border border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
                  <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl font-bold text-gray-500 font-mono cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">+2</div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Golden Retriever</h1>
                    <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-500 font-bold uppercase tracking-widest text-xs px-3 py-1">Lost</Badge>
                  </div>
                  <div className="flex justify-start mb-6">
                     <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-500 font-medium">Under Review</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Case ID</p>
                      <p className="font-mono text-sm text-gray-900 dark:text-white font-medium">{id || 'LST-2024-1024'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Reported on</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">May 10, 2024 • 10:30 AM</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Dhanmondi, Dhaka</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Last Seen</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">May 10, 2024 • 9:00 AM</p>
                    </div>
                    
                    <div className="col-span-2 h-px bg-gray-100 dark:bg-gray-800 my-2"></div>

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Breed</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Golden Retriever</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Gender</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Male</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Age</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">2 Years</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Color</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Golden</p>
                    </div>
                    
                    <div className="col-span-2">
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Distinctive Marks</p>
                       <p className="text-sm font-medium text-gray-900 dark:text-white">White patch on chest, scar on left ear</p>
                    </div>
                    <div className="col-span-2">
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Wearing</p>
                       <p className="text-sm font-medium text-gray-900 dark:text-white">Red collar with bell</p>
                    </div>
                    <div className="col-span-2">
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">Additional Details</p>
                       <p className="text-sm text-gray-700 dark:text-gray-300">Very friendly and responds to the name "Bruno".</p>
                       <p className="text-sm text-gray-700 dark:text-gray-300">If found, please contact immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Map Section */}
          <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234] overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Case Map</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3 h-[250px] bg-slate-200 dark:bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer">
                  {/* Mock Map Background */}
                  <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Dhanmondi,Dhaka&zoom=14&size=600x300&style=feature:all|element:labels|visibility:on&style=feature:road|element:geometry|color:0x38414e&style=feature:water|color:0x17263c')] bg-cover bg-center mix-blend-luminosity"></div>
                  
                  {/* Pin */}
                  <div className="absolute z-10 text-center animate-bounce">
                    <MapPin className="w-8 h-8 text-red-500 mx-auto drop-shadow-md" fill="white" />
                  </div>

                  {/* Mock Tooltip */}
                  <div className="absolute top-1/2 left-1/2 mt-4 ml-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl shadow-xl text-sm w-48 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                     <p className="font-bold mb-1">Last Seen Location</p>
                     <p className="text-gray-300 dark:text-gray-600 truncate">Dhanmondi, Dhaka</p>
                     <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">May 10, 2024 • 9:00 AM</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 space-y-6 flex flex-col justify-center">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-1"><MapPin className="w-4 h-4 text-gray-400"/> Area</p>
                    <p className="text-sm pl-6 text-gray-600 dark:text-gray-400">Dhanmondi 27, Dhaka</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-1"><MapPin className="w-4 h-4 text-gray-400"/> Landmark</p>
                    <p className="text-sm pl-6 text-gray-600 dark:text-gray-400">Near Dhanmondi Lake</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-1"><MapPin className="w-4 h-4 text-gray-400"/> Coordinates</p>
                    <p className="text-sm pl-6 font-mono text-gray-600 dark:text-gray-400">23.7465° N, 90.3809° E</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Timeline */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-10">Case Timeline</h3>
              
              <div className="relative space-y-0">
                {[
                  { status: 'Reported', date: 'May 10, 2024 • 10:30 AM', color: '#22c55e', active: true },
                  { status: 'Under Review', date: 'May 10, 2024 • 11:30 AM', color: '#f59e0b', active: true },
                  { status: 'Potential Match Found', date: 'May 11, 2024 • 12:00 PM', color: '#8b5cf6', active: true, important: true },
                  { status: 'Recovered', date: '-', color: '#cbd5e1', active: false },
                  { status: 'Closed', date: '-', color: '#cbd5e1', active: false },
                ].map((step, i, arr) => (
                  <div key={i} className="relative flex gap-6 pb-12 last:pb-0 group">
                    {/* Gradient Line Segment */}
                    {i < arr.length - 1 && (
                      <div 
                        className="absolute left-[10px] top-[26px] bottom-[-22px] w-[2px] z-0"
                        style={{
                          background: `linear-gradient(to bottom, \${step.color}, \${arr[i+1].color})`,
                          opacity: step.active && arr[i+1].active ? 1 : 0.3
                        }}
                      />
                    )}
                    
                    {/* Timeline Dot */}
                    <div 
                      className="relative z-10 w-[22px] h-[22px] rounded-full border-[4px] border-white dark:border-[#1A2234] shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-125"
                      style={{ 
                        backgroundColor: step.color,
                        opacity: step.active ? 1 : 0.8
                      }}
                    />
                    
                    {/* Content */}
                    <div className="-mt-1.5 flex-1">
                      <h4 className={`text-base font-bold tracking-tight \${
                        step.important 
                          ? 'text-[#8b5cf6] dark:text-[#a78bfa]' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {step.status}
                      </h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                        {step.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Potential Matches Box */}
          <Card className="border-0 shadow-sm bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 block">
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                   <Heart className="w-4 h-4" /> Potential Matches (1)
                 </h3>
              </div>
              <div className="flex items-center justify-between bg-white dark:bg-[#1A2234] rounded-xl p-3 shadow-sm border border-purple-50 dark:border-purple-900/20">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-lg">
                    <AvatarImage src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150" />
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white leading-tight">Tabby Cat <span className="font-normal text-gray-500">(Found)</span></p>
                    <p className="text-xs font-bold text-green-600 mt-0.5">87% Match</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-xs border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 dark:border-purple-900/50 dark:bg-purple-900/30 dark:text-purple-300">View Match</Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234]">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Reporter Name</p>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Sarah Ahmed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white font-mono">+880 1712-345678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">sarah.ahmed@email.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notes (Full Width) */}
      <Card className="border border-green-200 dark:border-green-900/30 shadow-sm bg-green-50/50 dark:bg-green-900/5 rounded-2xl overflow-hidden">
        <CardContent className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0">
            <FileText className="w-7 h-7 text-green-600 dark:text-green-500" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Notes</h4>
            <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-none">
              <p>The dog is very friendly and loves to play. He may follow people. Please check nearby parks and residential areas.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
