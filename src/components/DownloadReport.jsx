import React, { useState } from 'react';
import { Download, FileText, Table, ChevronDown, Check } from "lucide-react";

const DownloadReport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (type) => {
    setIsDownloading(true);
    setIsOpen(false);
    
    // Fake loading delay
    setTimeout(() => {
      setIsDownloading(false);
      alert(`${type} Report downloaded successfully!`);
    }, 1500);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDownloading}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none"
      >
        {isDownloading ? (
          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <Download size={16} />
        )}
        {isDownloading ? 'EXPORTING...' : 'DOWNLOAD REPORT'}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          <button 
            onClick={() => handleDownload('PDF')}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <FileText size={18} className="text-red-500" />
            <span>Export as PDF</span>
          </button>
          <button 
            onClick={() => handleDownload('CSV')}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Table size={18} className="text-emerald-500" />
            <span>Export as Excel/CSV</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadReport;