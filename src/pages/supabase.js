import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabasedbKey = import.meta.env.SUPABASE_DB_URL;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, supabasedbKey);
