import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface RsvpData {
  id?: string
  full_name: string
  email?: string
  will_attend: boolean
  guest_count: number
  message?: string
  mood_emoji?: string
  created_at?: string
}

export const submitRsvp = async (data: Omit<RsvpData, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('rsvp_responses')
    .insert([data])
    .select()
    .single()

  if (error) {
    throw error
  }

  return result
}

export const getRsvpResponses = async () => {
  const { data, error } = await supabase
    .from('rsvp_responses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}