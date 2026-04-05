import React, { useState } from 'react';
import { Wifi } from "lucide-react";

const InteractiveCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
     className="w-full max-w-[360px] perspective-1000 cursor-pointer group mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full aspect-[1.586/1] transition-all duration-700 preserve-3d shadow-2xl rounded-[1.5rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 rounded-[1.5rem] p-6 text-white overflow-hidden flex flex-col justify-between">
          
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Main Balance</p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">$12,450.00</h2>
            </div>
            <Wifi size={24} className="opacity-70 rotate-90" />
          </div>

          <div className="relative z-10 my-4">
            <p className="text-lg md:text-xl tracking-[0.25em] font-mono font-medium drop-shadow-md">
              **** **** **** 8824
            </p>
          </div>

          <div className="flex justify-between items-end relative z-10">
            <div className="space-y-1">
              <p className="text-[9px] uppercase opacity-70 font-medium">Card Holder</p>
              <p className="text-xs md:text-sm font-bold tracking-wider uppercase truncate max-w-[150px]">Shivanshu Prakash</p>
            </div>
            <div className="flex -space-x-3 opacity-90">
              <div className="w-8 h-8 bg-orange-500 rounded-full border border-white/10"></div>
              <div className="w-8 h-8 bg-yellow-400/80 rounded-full border border-white/10"></div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-800 rounded-[1.5rem] py-6 text-white shadow-2xl flex flex-col border border-zinc-700">
          <div className="w-full h-10 bg-zinc-950 mt-2"></div>
          <div className="px-6 mt-6">
            <div className="bg-zinc-700 h-9 rounded flex items-center justify-end px-3 relative">
              <div className="absolute left-3 right-12 h-6 bg-zinc-600/50 rounded-sm italic text-[10px] flex items-center px-2 opacity-50">Authorized Signature</div>
              <span className="text-zinc-900 font-mono font-bold bg-white px-2 py-0.5 rounded italic text-sm shadow-inner">123</span>
            </div>
            <p className="text-[8px] mt-2 opacity-50 text-right uppercase tracking-tighter">CVV Security Code</p>
          </div>
          <div className="mt-auto px-6 pb-6">
             <p className="text-[7px] opacity-40 leading-tight text-center">
               This card is property of DashUI Bank. Use is subject to terms. If found, please return to any branch.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveCard;