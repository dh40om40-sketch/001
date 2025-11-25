/*
  # Create leads table for Modern Ideas website

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the lead
      - `phone` (text) - Phone number
      - `email` (text) - Email address
      - `service` (text) - Service interest (decorations/solar/both)
      - `created_at` (timestamptz) - Timestamp of lead submission

  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads (public form submission)
    - Add policy for authenticated users to read all leads (admin access)

  3. Notes
    - Public can submit leads but cannot read them
    - Only authenticated users (admins) can view leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
