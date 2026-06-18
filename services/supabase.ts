// services/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_SUPABASE_PROJECT_ID.supabase.co'; // TODO: replace with actual URL
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // TODO: replace with actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
