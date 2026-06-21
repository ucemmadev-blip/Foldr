import { supabase } from "@/lib/supabase";

export async function getFiles() {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}


export const getPhotos = async () => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .like("type", "image/%");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const getVideos = async () => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .like("type", "video/%");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const getAudio = async () => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .like("type", "audio/%");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const getDocuments = async () => {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .not("type", "like", "image/%")
    .not("type", "like", "video/%")
    .not("type", "like", "audio/%");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};