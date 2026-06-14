import { supabase } from "@/lib/supabase";

export async function getFiles() {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}