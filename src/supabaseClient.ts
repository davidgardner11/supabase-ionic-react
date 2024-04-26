import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string
//const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string
const supabaseUrl = 'https://kxhrjhwntqxyfyfqjsnn.supabase.co' as string
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aHJqaHdudHF4eWZ5ZnFqc25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMTk4ODIsImV4cCI6MjAyOTU5NTg4Mn0.9KggIEZ0FaaqI9MgmMi5J9C6QvLP3mX50FYk7_Mgl1Y' as string


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
//export const supabase = createClient('https://kxhrjhwntqxyfyfqjsnn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aHJqaHdudHF4eWZ5ZnFqc25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMTk4ODIsImV4cCI6MjAyOTU5NTg4Mn0.9KggIEZ0FaaqI9MgmMi5J9C6QvLP3mX50FYk7_Mgl1Y')

