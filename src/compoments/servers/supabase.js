import { createClient } from "@supabase/supabase-js";

export const supabaseUrl =
	"https://dvkoqbueyvehekvjnxjl.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a29xYnVleXZlaGVrdmpueGpsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTE4MTU5NCwiZXhwIjoyMDE2NzU3NTk0fQ.U05P2g04SnW9vaGXE8tDPsvcgbDi7D-yGdlS8Uex_78";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
