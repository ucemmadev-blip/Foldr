import { BellDot, CircleUserRound, FileCheck, Settings } from "lucide-react";

export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full bg-white border-b px-6 py-4">
        <input
          type="text"
          placeholder="Search anything..."
          className="border rounded-2xl px-3 py-2 w-250 bg-gray-100 ring-gray-400 text-gray-600"
        />

        <div className="flex items-center gap-5">
          <Settings size={20} />
          <FileCheck size={20} />
          <BellDot size={20} />
          <CircleUserRound size={20} />
        </div>
      </nav>
    </>
  );
};

// EasyNoteENTE69AP.
// Project URLL: https://siprwhfdbdisoctxilmd.supabase.co
// Publishable key: sb_publishable_m2GmYA2fkV_kwcVicEzdrw_RKh52cV4