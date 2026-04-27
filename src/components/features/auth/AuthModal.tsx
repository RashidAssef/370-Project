import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

import stayUpdated from "@/assets/design/stay-updated.svg";
import { getApiUrl } from "@/lib/api";

export function AuthModal({ isOpen, onClose, initialView = "signin" }: { isOpen: boolean; onClose: () => void; initialView?: "signin" | "signup" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("auth") as "signin" | "signup") || initialView;
  
  const setView = (newView: "signin" | "signup") => {
    setSearchParams({ auth: newView });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation for signup
    if (view === "signup" && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const endpoint = view === "signin" ? "/api/auth/login" : "/api/auth/signup";
      const payload = view === "signin" 
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const response = await fetch(getApiUrl(endpoint), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Success! Store data and redirect
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      onClose();
      navigate("/app/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[800px] p-0 overflow-hidden bg-white dark:bg-[#151a25] border-0 rounded-2xl shadow-2xl">
        <DialogTitle className="sr-only">{view === "signin" ? "Sign In" : "Sign Up"}</DialogTitle>
        <DialogDescription className="sr-only">Authenticate to PawConnect</DialogDescription>
        <div className="flex w-full min-h-[500px]">
          
          {/* Left Side (Illustration) */}
          <div className="hidden md:flex w-1/2 bg-slate-50 dark:bg-[#0f1520] border-r border-slate-100 dark:border-slate-800 flex-col items-center justify-center p-0 relative">
            <img src={stayUpdated} className="w-full h-auto opacity-90 mb-4 transform scale-110" alt="Stay Updated" />
            <div className="text-center w-full relative z-10">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Every pet deserves<br/>to be home <span className="text-red-400">♥</span></p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12">
            <div className="mb-8 font-bold text-xl flex items-center justify-center lg:justify-start dark:text-white">
              <Heart className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-200" fill="currentColor"/>
              Paw<span className="text-green-500">Connect</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {view === "signin" ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {view === "signin" ? "Sign in to continue your journey." : "Join us in reuniting pets with their families."}
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
               {view === "signup" && (
                 <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs text-gray-600 dark:text-gray-300">Full Name</Label>
                    <div className="relative">
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="pl-8 bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 focus-visible:ring-green-500 h-10" 
                        required
                      />
                      <UserIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                 </div>
               )}

               <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs text-gray-600 dark:text-gray-300">Email</Label>
                  <div className="relative">
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-8 bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 focus-visible:ring-green-500 h-10" 
                      required
                    />
                    <MailIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
               </div>

               <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-xs text-gray-600 dark:text-gray-300">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder={view === "signin" ? "Enter your password" : "Create a password"} 
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-8 bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 focus-visible:ring-green-500 h-10" 
                      required
                    />
                    <KeyIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
               </div>

               {view === "signup" && (
                 <div className="space-y-1.5">
                    <Label htmlFor="confirm_password" className="text-xs text-gray-600 dark:text-gray-300">Confirm Password</Label>
                    <div className="relative">
                      <Input 
                        id="confirm_password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Confirm your password" 
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-8 bg-white dark:bg-[#1A2234] border-gray-200 dark:border-gray-800 focus-visible:ring-green-500 h-10" 
                        required
                      />
                      <KeyIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                 </div>
               )}

               {view === "signin" && (
                 <div className="flex justify-end">
                   <button type="button" className="text-xs font-semibold text-green-600 hover:text-green-700 dark:text-green-500 transition-colors">Forgot Password?</button>
                 </div>
               )}

               {view === "signup" && (
                 <div className="flex items-center space-x-2 pt-2">
                   <input type="checkbox" id="terms" className="rounded border-gray-300 text-green-600 focus:ring-green-500" required/>
                   <label htmlFor="terms" className="text-xs text-gray-600 dark:text-gray-400">
                     I agree to the <a href="#" className="font-semibold text-green-600 dark:text-green-500 hover:underline">Terms & Conditions</a>
                   </label>
                 </div>
               )}

               <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg h-11 mt-2 font-bold"
                disabled={isLoading}
               >
                 {isLoading ? (
                   <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Working...</>
                 ) : (
                   view === "signin" ? "Sign In" : "Sign Up"
                 )}
               </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
               {view === "signin" ? (
                 <p>Don't have an account? <button onClick={() => setView("signup")} className="font-bold text-green-600 hover:text-green-700 dark:text-green-500 hover:underline transition-all">Sign Up</button></p>
               ) : (
                 <p>Already have an account? <button onClick={() => setView("signin")} className="font-bold text-green-600 hover:text-green-700 dark:text-green-500 hover:underline transition-all">Sign In</button></p>
               )}
            </div>

            <div className="mt-6 flex items-center justify-between before:h-px before:flex-1 before:bg-slate-200 dark:before:bg-slate-800 after:h-px after:flex-1 after:bg-slate-200 dark:after:bg-slate-800">
              <span className="px-4 text-xs tracking-wider text-gray-400 uppercase">or continue with</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-10 text-xs font-medium dark:bg-[#151a25] dark:border-gray-800 dark:text-gray-300 dark:hover:bg-[#1A2234]">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-10 text-xs font-medium dark:bg-[#151a25] dark:border-gray-800 dark:text-gray-300 dark:hover:bg-[#1A2234]">
                <svg className="w-4 h-4 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Helpers
function UserIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> }
function MailIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function KeyIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg> }
