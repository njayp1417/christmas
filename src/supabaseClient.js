import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nisipcirznuolgajcbvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pc2lwY2lyem51b2xnYWpjYnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3NDQ3NjMsImV4cCI6MjA4MTMyMDc2M30.Nu9yaApC9E_su9Wwin0AWwf9boiHkPNN2IVo20qatQ0'

export const supabase = createClient(supabaseUrl, supabaseKey)