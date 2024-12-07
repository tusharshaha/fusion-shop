import React from "react";

const Skelton: React.FC = () => {
  return (
    <div className="border shadow-md rounded-md p-4">
      <div className="animate-pulse">
        <div className="rounded-md bg-slate-200 h-52 w-full mb-3"></div>
        <div className="space-y-6">
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skelton;
