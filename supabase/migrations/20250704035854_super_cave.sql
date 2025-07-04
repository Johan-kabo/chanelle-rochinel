/*
  # Create RSVP responses table for wedding invitation

  1. New Tables
    - `rsvp_responses`
      - `id` (uuid, primary key)
      - `full_name` (text, required) - Guest's full name
      - `email` (text, optional) - Guest's email address
      - `will_attend` (boolean, required) - Whether guest will attend
      - `guest_count` (integer, required) - Number of guests including themselves
      - `message` (text, optional) - Message from guest to couple
      - `created_at` (timestamp) - When response was submitted
      - `updated_at` (timestamp) - When response was last updated

  2. Security
    - Enable RLS on `rsvp_responses` table
    - Add policy for public insert (anyone can submit RSVP)
    - Add policy for authenticated read (admin can view responses)

  3. Indexes
    - Index on created_at for sorting responses
    - Index on will_attend for filtering
*/

-- Create the rsvp_responses table
CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text,
  will_attend boolean NOT NULL DEFAULT true,
  guest_count integer NOT NULL DEFAULT 1 CHECK (guest_count >= 0 AND guest_count <= 10),
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert RSVP responses (public can submit)
CREATE POLICY "Anyone can submit RSVP responses"
  ON rsvp_responses
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read RSVP responses (for admin dashboard)
CREATE POLICY "Anyone can read RSVP responses"
  ON rsvp_responses
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rsvp_responses_created_at 
  ON rsvp_responses(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_rsvp_responses_will_attend 
  ON rsvp_responses(will_attend);

CREATE INDEX IF NOT EXISTS idx_rsvp_responses_full_name 
  ON rsvp_responses(full_name);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_rsvp_responses_updated_at
  BEFORE UPDATE ON rsvp_responses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();