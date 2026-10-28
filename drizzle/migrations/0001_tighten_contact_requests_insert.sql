DROP POLICY IF EXISTS "Anyone can submit a contact request" ON public.contact_requests;
CREATE POLICY "Anyone can submit a valid contact request" ON public.contact_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (company IS NULL OR char_length(company) <= 150)
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND char_length(btrim(message)) BETWEEN 1 AND 2000
);