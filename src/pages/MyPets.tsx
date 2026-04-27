import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  MoreVertical, 
  Camera, 
  Calendar, 
  Scale, 
  Palette,
  Clock,
  User,
  Edit2,
  Trash2,
  Eye,
  PawPrint,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  FileText,
  MapPin
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { label: 'Total Pets', value: '4', sub: 'All your registered pets', icon: PawPrint, color: 'text-green-600', bg: 'bg-green-50/50 dark:bg-green-900/10', iconBg: 'bg-green-100 dark:bg-green-900/20', lineColor: 'bg-green-600' },
  { label: 'Active Pets', value: '3', sub: 'Up to date profiles', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50/50 dark:bg-blue-900/10', iconBg: 'bg-blue-100 dark:bg-blue-900/20', lineColor: 'bg-blue-600' },
  { label: 'Used in Cases', value: '2', sub: 'In lost or found reports', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50/50 dark:bg-amber-900/10', iconBg: 'bg-amber-100 dark:bg-amber-900/20', lineColor: 'bg-amber-600' },
  { label: 'Need Update', value: '1', sub: 'Information outdated', icon: AlertCircle, color: 'text-purple-600', bg: 'bg-purple-50/50 dark:bg-purple-900/10', iconBg: 'bg-purple-100 dark:bg-purple-900/20', lineColor: 'bg-purple-600' },
];

const myPets = [
  {
    id: 1,
    name: "Bruno",
    gender: "male",
    breed: "Golden Retriever",
    age: "2 Years",
    color: "Golden",
    colorHex: "#C19A6B",
    weight: "28 kg",
    status: "Active",
    lastUpdated: "2 May 2025",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400"
  },
  {
    id: 2,
    name: "Luna",
    gender: "female",
    breed: "Domestic Shorthair",
    age: "1 Year",
    color: "Gray & White",
    colorHex: "#808080",
    weight: "4.2 kg",
    status: "Active",
    lastUpdated: "25 Apr 2025",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400"
  },
  {
    id: 3,
    name: "Max",
    gender: "male",
    breed: "German Shepherd",
    age: "3 Years",
    color: "Black & Tan",
    colorHex: "#3D2B1F",
    weight: "32 kg",
    status: "Active",
    lastUpdated: "10 Apr 2025",
    image: "https://images.unsplash.com/photo-1589944172325-1329f6356073?auto=format&fit=crop&w=400"
  },
  {
    id: 4,
    name: "Milo",
    gender: "male",
    breed: "Orange Tabby",
    age: "1.5 Years",
    color: "Orange",
    colorHex: "#FFA500",
    weight: "4.8 kg",
    status: "Update Needed",
    lastUpdated: "15 Feb 2025",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400"
  }
];

export default function MyPets() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-500">
                <PawPrint className="w-6 h-6" />
             </div>
             <h1 className="text-3xl font-black text-gray-900 dark:text-white">My Pets</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium ml-13">
            Manage your pet profiles and keep their information up to date.
          </p>
        </div>
        <Button 
          className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all active:scale-95 shrink-0"
          onClick={() => navigate('/app/my-pets/add')}
        >
          <Plus className="w-5 h-5 stroke-[3]" />
          Add New Pet
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i}
          >
            <Card className={`border-0 shadow-sm ${stat.bg} rounded-2xl overflow-hidden relative group`}>
              <CardContent className="p-5 flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</span>
                  </div>
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{stat.label}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                     <div className={`w-1 h-3 rounded-full ${stat.lineColor}`} />
                     <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{stat.sub}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters & View Toggle */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white dark:bg-[#1A2234] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full">
          <div className="relative flex-1 w-full max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search pets by name..." 
              className="pl-10 h-11 border-gray-100 dark:border-gray-800 rounded-xl focus-visible:ring-rose-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto justify-between sm:justify-end">
          <Button variant="outline" className="h-11 rounded-xl px-4 border-gray-100 dark:border-gray-800 flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold w-full sm:w-auto">
            All Status
            <Filter className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800/50 p-1 rounded-xl border border-gray-100 dark:border-gray-800">
             <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-[#ff6b6b]">
                <LayoutGrid className="w-4.5 h-4.5" />
             </Button>
             <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg text-gray-400">
                <List className="w-4.5 h-4.5" />
             </Button>
          </div>
        </div>
      </div>

      {/* Pets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {myPets.map((pet, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            key={pet.id}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-[#1A2234] rounded-[32px] overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/40 dark:hover:shadow-none transition-all duration-500 h-full flex flex-col">
              <div className="relative h-[380px] overflow-hidden m-3 rounded-[28px] shrink-0">
                <img 
                  src={pet.image} 
                  alt={pet.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <Badge className={`absolute top-4 left-4 border font-bold px-4 py-1.5 rounded-xl shadow-sm ${
                  pet.status === 'Active' 
                    ? 'bg-[#f0fdf4] text-[#15803d] border-[#dcfce7] dark:bg-green-950/30 dark:border-green-800' 
                    : 'bg-[#fffbeb] text-[#b45309] border-[#fef3c7] dark:bg-amber-950/30 dark:border-amber-800'
                }`}>
                  {pet.status}
                </Badge>

                <Button variant="secondary" size="icon" className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-sm">
                  <MoreVertical className="w-5 h-5" />
                </Button>

                <div className="absolute -bottom-2 -right-2 p-4">
                   <div className="w-14 h-14 rounded-full bg-[#ff6b6b] text-white flex items-center justify-center shadow-xl border-4 border-white dark:border-[#1A2234] transform group-hover:rotate-12 transition-transform duration-300">
                      <Camera className="w-6 h-6" />
                   </div>
                </div>
              </div>

              <CardContent className="p-7 pt-4 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{pet.name}</h3>
                    {pet.gender === 'male' ? (
                      <div className="w-7 h-7 rounded-full bg-[#eff6ff] dark:bg-blue-900/30 flex items-center justify-center text-[#3b82f6]">
                        <span className="text-lg font-bold">♂</span>
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#fff1f2] dark:bg-rose-900/30 flex items-center justify-center text-[#f43f5e]">
                        <span className="text-lg font-bold">♀</span>
                      </div>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800">
                     <FileText className="w-4 h-4 text-gray-400" />
                     <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{pet.breed}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-gray-900 dark:text-white text-[16px] truncate">{pet.age}</p>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Age</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0">
                      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: pet.colorHex || '#ccc' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-gray-900 dark:text-white text-[16px] truncate">{pet.color}</p>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Color</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-gray-900 dark:text-white text-[16px] truncate">{pet.weight}</p>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Weight</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Last updated: {pet.lastUpdated}</span>
                </div>

                <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 border-t border-gray-50 dark:border-gray-800 -mx-7 -mb-7">
                  <Button 
                    variant="ghost" 
                    className="h-16 rounded-none text-gray-600 dark:text-gray-300 font-bold text-[14px] hover:bg-gray-50/50 dark:hover:bg-slate-800/50 flex items-center justify-center gap-2 transition-all"
                    onClick={() => navigate(`/app/my-pets/${pet.id}`)}
                  >
                    <Eye className="w-4.5 h-4.5" />
                    View Profile
                  </Button>
                  <Button variant="ghost" className="h-16 rounded-none text-gray-600 dark:text-gray-300 font-bold text-[14px] hover:bg-gray-50/50 dark:hover:bg-slate-800/50 flex items-center justify-center gap-2 transition-all">
                    <Edit2 className="w-4.5 h-4.5" />
                    Edit
                  </Button>
                  <Button variant="ghost" className="h-16 rounded-none text-rose-500 font-bold text-[14px] hover:bg-rose-50/50 dark:hover:bg-rose-950/20 flex items-center justify-center gap-2 transition-all">
                    <Trash2 className="w-4.5 h-4.5" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="border-2 border-dashed border-rose-100 dark:border-rose-900/30 bg-rose-50/30 dark:bg-rose-950/10 rounded-[40px] p-10 mt-8 overflow-hidden relative group">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-8 text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-500 shadow-inner">
                <PawPrint className="w-12 h-12" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Add a new pet profile</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm text-lg leading-relaxed">
                  Keeping pet profiles updated helps us find your pet faster if they ever get lost.
                </p>
              </div>
            </div>
            <Button 
              className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-black px-12 py-8 rounded-[24px] shadow-2xl shadow-red-500/40 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 text-xl"
              onClick={() => navigate('/app/my-pets/add')}
            >
              <Plus className="w-7 h-7 stroke-[4]" />
              Add New Pet
            </Button>
          </div>
          
          {/* Decorative Background Elements */}
          <PawPrint className="absolute -bottom-8 -right-8 w-48 h-48 text-rose-500/5 rotate-12" />
          <PawPrint className="absolute top-8 right-24 w-16 h-16 text-rose-500/10 -rotate-12" />
        </Card>
      </motion.div>
    </div>
  );
}
