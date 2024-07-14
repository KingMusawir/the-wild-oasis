import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://bocsxgxkmrjtuclxlqbx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvY3N4Z3hrbXJqdHVjbHhscWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTQ4NDcsImV4cCI6MjAzNDAzMDg0N30.giy86PwOvgv9ZareW3sHYGqJeMFuifs0SmPCG59kiVM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
