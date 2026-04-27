import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { 
  ArrowLeft, 
  MoreVertical, 
  Camera, 
  Calendar, 
  Scale, 
  Palette, 
  Clock, 
  Edit2, 
  Plus, 
  Trash2, 
  FileText, 
  ShieldCheck, 
  User, 
  Activity, 
  Stethoscope, 
  MapPin, 
  Eye,
  CheckCircle2,
  AlertCircle,
  Dog,
  Heart,
  PawPrint
} from "lucide-react";
import { motion } from "motion/react";

export default function PetProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the profile
  const pet = {
    name: "Bruno",
    gender: "Male",
    breed: "Golden Retriever",
    age: "2 Years",
    dob: "15 Jan 2023",
    weight: "28 kg",
    color: "Golden",
    colorHex: "#C19A6B",
    status: "Active",
    addedOn: "15 Jan 2025",
    lastUpdated: "2 May 2025",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600",
    idCode: "PC-2025-BR-0001",
    size: "Large",
    microchip: "985 141 000 123 456",
    spayed: "Yes",
    marks: "White spot on chest, Scar on left ear",
    personality: "Friendly, Playful, Energetic",
    notes: "Loves balls and outdoor walks.",
    medical: {
      vaccination: "Up to date",
      lastVacc: "10 Apr 2025",
      nextVacc: "10 Apr 2026",
      vet: "Pet Care Clinic",
      allergies: "None",
      conditions: "None",
      meds: "None"
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Back Button */}
      <button 
        onClick={() => navigate("/app/my-pets")}
        className="flex items-center gap-2 text-rose-500 font-bold hover:gap-3 transition-all mt-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to My Pets
      </button>

      {/* Header Profile Card */}
      <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl overflow-hidden p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image Section */}
          <div className="relative w-full lg:w-[280px] h-[280px] shrink-0 rounded-2xl overflow-hidden group">
            <img 
              src={pet.image} 
              alt={pet.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-4">
              <Button size="icon" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg text-gray-500 hover:scale-110 transition-transform">
                <Camera className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Identity Details */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">{pet.name}</h1>
                    <div className="w-8 h-8 rounded-full bg-[#eff6ff] dark:bg-blue-900/30 flex items-center justify-center text-[#3b82f6]">
                      <span className="text-xl font-bold">♂</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-bold">
                    <Dog className="w-4.5 h-4.5" />
                    {pet.breed}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[#f0fdf4] text-[#15803d] border-[#dcfce7] font-bold px-4 py-1.5 rounded-xl border shadow-none">
                    {pet.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Calendar, label: "Age", value: pet.age, color: "text-gray-500", bg: "bg-gray-50/80 dark:bg-slate-800/50" },
                  { icon: User, label: "Gender", value: pet.gender, color: "text-gray-500", bg: "bg-gray-50/80 dark:bg-slate-800/50" },
                  { icon: Scale, label: "Weight", value: pet.weight, color: "text-gray-500", bg: "bg-gray-50/80 dark:bg-slate-800/50" },
                  { icon: Palette, label: "Color", value: pet.color, color: "text-gray-500", bg: "bg-gray-50/80 dark:bg-slate-800/50", circle: pet.colorHex },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                      {item.circle ? (
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.circle }} />
                      ) : (
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-gray-900 dark:text-white text-[16px] truncate">{item.value}</p>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-8 text-gray-400 font-bold text-[13px]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Added on: {pet.addedOn}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Last updated: {pet.lastUpdated}
                </div>
              </div>
            </div>

            {/* Header Actions - Matched to Image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-0">
              <Button variant="outline" className="h-12 rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800/50 font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-none">
                <Edit2 className="w-4.5 h-4.5 text-gray-500 dark:text-gray-400" />
                Edit Profile
              </Button>
              <Button variant="outline" className="h-12 rounded-xl border-purple-100 dark:border-purple-900/30 text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/20 font-bold flex items-center gap-2 hover:bg-purple-100 dark:hover:bg-purple-800/30 transition-all shadow-none">
                <Camera className="w-4.5 h-4.5" />
                Add Photo
              </Button>
              <Button variant="outline" className="h-12 rounded-xl border-red-100 dark:border-red-900/20 text-[#ff4d4d] bg-red-50/30 dark:bg-red-950/20 font-bold flex items-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-200 dark:hover:border-red-800 transition-all shadow-none">
                <Trash2 className="w-4.5 h-4.5" />
                Delete Profile
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Middle Row: Gallery & ID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Photo Gallery */}
        <Card className="lg:col-span-2 border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl p-6 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">Photo Gallery (4)</h3>
            <Button variant="ghost" className="text-gray-500 font-bold bg-gray-50 dark:bg-slate-800 rounded-xl px-4 h-9">View All</Button>
          </div>
          <div className="grid grid-cols-4 gap-4 flex-1">
             {[1,2,3,4].map((i) => (
               <div key={i} className="aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-gray-50 dark:border-gray-800">
                  <img 
                    src={`https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80&idx=${i}`} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
                    alt="Pet Gallery"
                  />
               </div>
             ))}
          </div>
        </Card>

        {/* Pet Identification */}
        <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl p-6 overflow-hidden flex flex-col">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">Pet Identification</h3>
          <div className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4 flex-1 text-center relative overflow-hidden">
             <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20 relative z-10">
                <PawPrint className="w-9 h-9" />
             </div>
             <div className="space-y-1 relative z-10">
               <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[2px]">PawConnect Pet ID</p>
               <div className="bg-white dark:bg-[#1A2234] border-2 border-dashed border-rose-200 dark:border-rose-900/40 rounded-xl px-6 py-3">
                  <p className="text-2xl font-black text-rose-500 tracking-tighter">{pet.idCode}</p>
               </div>
             </div>
             <p className="text-[12px] text-gray-500 font-medium max-w-[200px] leading-relaxed relative z-10">
               Use this ID when reporting or updating your pet information.
             </p>
          </div>
        </Card>
      </div>

      {/* Main Info Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* About Card */}
        <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl p-6 overflow-hidden flex flex-col h-full">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">About {pet.name}</h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800/80 flex-1">
            {[
              { label: "Breed", value: pet.breed, icon: Dog, color: "text-purple-500", bg: "bg-purple-50/50" },
              { label: "Color", value: pet.color, icon: Palette, color: "text-amber-500", bg: "bg-amber-50/50" },
              { label: "Date of Birth / Age", value: `${pet.dob} (${pet.age})`, icon: Calendar, color: "text-blue-500", bg: "bg-blue-50/50" },
              { label: "Gender", value: pet.gender, icon: User, color: "text-blue-400", bg: "bg-blue-50/50" },
              { label: "Weight", value: pet.weight, icon: Scale, color: "text-rose-500", bg: "bg-rose-50/50" },
              { label: "Size", value: pet.size, icon: Edit2, color: "text-green-500", bg: "bg-green-50/50" },
              { label: "Microchip ID", value: pet.microchip, icon: FileText, color: "text-rose-400", bg: "bg-rose-50/50" },
              { label: "Spayed / Neutered", value: pet.spayed, icon: Heart, color: "text-red-500", bg: "bg-red-50/50" },
              { label: "Distinctive Marks", value: pet.marks, icon: CheckCircle2, color: "text-amber-500", bg: "bg-amber-50/50" },
              { label: "Personality", value: pet.personality, icon: ShieldCheck, color: "text-orange-500", bg: "bg-orange-50/50" },
              { label: "Other Notes", value: pet.notes, icon: FileText, color: "text-amber-600", bg: "bg-amber-50/50" },
            ].map((item, i) => (
              <div key={i} className="py-3 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} dark:bg-slate-800 flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-[14px] font-bold text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
                <span className="text-[14px] font-bold text-gray-900 dark:text-white text-right max-w-[240px]">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Medical Card */}
        <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl p-6 overflow-hidden flex flex-col h-full">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">Medical Information</h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800/80 mb-auto">
            {[
              { label: "Vaccination Status", value: pet.medical.vaccination, icon: ShieldCheck, color: "text-green-500", bg: "bg-green-50/50", valColor: "text-green-500" },
              { label: "Last Vaccination", value: pet.medical.lastVacc, icon: Edit2, color: "text-rose-400", bg: "bg-rose-50/50" },
              { label: "Next Vaccination Due", value: pet.medical.nextVacc, icon: Calendar, color: "text-rose-500", bg: "bg-rose-50/50" },
              { label: "Veterinarian", value: pet.medical.vet, icon: Stethoscope, color: "text-amber-500", bg: "bg-amber-50/50" },
              { label: "Allergies", value: pet.medical.allergies, icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-50/50" },
              { label: "Medical Conditions", value: pet.medical.conditions, icon: Activity, color: "text-green-600", bg: "bg-green-50/50" },
              { label: "Medications", value: pet.medical.meds, icon: FileText, color: "text-rose-500", bg: "bg-rose-50/50" },
            ].map((item, i) => (
              <div key={i} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} dark:bg-slate-800 flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-[14px] font-bold text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
                <span className={`text-[14px] font-black ${item.valColor || "text-gray-900 dark:text-white"}`}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button className="w-full h-14 rounded-xl bg-rose-50/80 dark:bg-rose-950/20 text-rose-500 font-black text-lg hover:bg-rose-500 hover:text-white transition-all border border-rose-100 dark:border-rose-900/30 shadow-none flex items-center justify-center gap-2">
              <Edit2 className="w-5 h-5" />
              Update Medical Info
            </Button>
          </div>
        </Card>
      </div>

      {/* Bottom Tabs Card */}
      <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#1A2234] rounded-2xl p-8">
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-8">Activity & History</h3>
        <Tabs defaultValue="cases" className="space-y-8">
          <TabsList className="bg-transparent p-0 rounded-none h-auto border-0 flex items-center justify-start gap-0 space-x-0">
            <TabsTrigger value="cases" className="rounded-none px-0 py-3 font-bold text-gray-400 bg-transparent data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:text-rose-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-rose-500 border-b-2 border-transparent transition-all shadow-none outline-none focus-visible:ring-0">
              Linked Cases (2)
            </TabsTrigger>
            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-8 shrink-0" />
            <TabsTrigger value="updates" className="rounded-none px-0 py-3 font-bold text-gray-400 bg-transparent data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:text-rose-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-rose-500 border-b-2 border-transparent transition-all shadow-none outline-none focus-visible:ring-0">
              Updates (5)
            </TabsTrigger>
            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-8 shrink-0" />
            <TabsTrigger value="notes" className="rounded-none px-0 py-3 font-bold text-gray-400 bg-transparent data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:text-rose-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-rose-500 border-b-2 border-transparent transition-all shadow-none outline-none focus-visible:ring-0">
              Notes (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cases" className="space-y-4">
             {[
               { id: "LC-2025-0412", type: "Lost", loc: "Dhanmondi, Dhaka", date: "12 Apr 2025", time: "10:30 AM", status: "Recovered", color: "red" },
               { id: "FC-2025-0221", type: "Found", loc: "Mirpur, Dhaka", date: "21 Feb 2025", time: "04:15 PM", status: "Closed", color: "green" },
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-6 bg-gray-50/30 dark:bg-slate-800/30 rounded-2xl border border-gray-50 dark:border-gray-800 hover:bg-white dark:hover:bg-slate-800 transition-all group">
                 <div className="flex items-center gap-8 flex-1">
                    <Badge className={`w-20 py-2 rounded-lg border-0 font-black text-[12px] uppercase tracking-wider justify-center transition-all hover:scale-105 ${item.type==='Lost' ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-green-50 text-green-500 hover:bg-green-100'}`}>
                      {item.type}
                    </Badge>
                    <div className="space-y-1">
                      <h4 className="text-[17px] font-black text-gray-900 dark:text-white">Case ID: {item.id}</h4>
                      <div className="flex items-center gap-6 text-[13px] text-gray-400 font-bold">
                        <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{item.loc}</div>
                        <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{item.date} • {item.time}</div>
                      </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-12">
                    <div className="text-center min-w-[100px]">
                       <p className="text-[12px] font-bold text-gray-500 mb-1">Status</p>
                       <Badge className={`rounded-xl px-4 py-1.5 font-bold border-0 shadow-none transition-all hover:scale-105 ${item.status==='Recovered' ? 'bg-[#fef3c7] text-[#92400e] hover:bg-[#fde68a]' : 'bg-[#f0fdf4] text-[#166534] hover:bg-[#dcfce7]'}`}>
                         {item.status}
                       </Badge>
                    </div>
                    <Button variant="outline" className="h-12 px-6 rounded-xl border-rose-100 text-rose-500 font-bold bg-white hover:bg-rose-50 transition-all flex items-center gap-2 shadow-none">
                       <Eye className="w-5 h-5" />
                       View Case
                    </Button>
                 </div>
               </div>
             ))}
          </TabsContent>
        </Tabs>

        {/* Activity Banner - Moved here */}
        <div className="mt-8 bg-rose-50/30 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 rounded-2xl p-6 relative group overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg shrink-0">
              <PawPrint className="w-8 h-8" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-[16px] font-black text-gray-900 dark:text-white leading-tight">Keeping your pet's profile updated increases the chances of a safe return.</h4>
              <p className="text-[13px] font-bold text-gray-500">
                Make sure to update photos and details regularly.
              </p>
            </div>
          </div>
          {/* Adorable illustration mock using PawPrint */}
          <div className="absolute right-4 bottom-[-10px] opacity-10 group-hover:opacity-40 transition-opacity duration-700">
             <PawPrint className="w-24 h-24 text-rose-500 rotate-12" />
          </div>
        </div>
      </Card>
    </div>
  );
}
