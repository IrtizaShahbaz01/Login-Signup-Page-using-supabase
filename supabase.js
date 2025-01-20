import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
export const supabase = createClient(
  'https://zcpwfpvnuegmcmiofmag.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjcHdmcHZudWVnbWNtaW9mbWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTQyMTAsImV4cCI6MjA1MjYzMDIxMH0.w8456wpfYZCG2LAfWR5GNmu3O78RXMXeYeak3-k96fk'
)