import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://pggepqcytcttzxlncwqd.supabase.co',

    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZ2VwcWN5dGN0dHp4bG5jd3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzEwMTMsImV4cCI6MjA1NzY0NzAxM30._XB8EDwNIPzEUW7A8mQt1K-cGUi5yHQWJyyE1BCQtDs'
)