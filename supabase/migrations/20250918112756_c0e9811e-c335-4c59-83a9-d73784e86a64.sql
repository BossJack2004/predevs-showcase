-- Create security definer function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE profiles.user_id = is_admin.user_id 
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Update policies for projects (admin can manage, public can read)
DROP POLICY IF EXISTS "Admins can insert projects" ON public.projects;
DROP POLICY IF EXISTS "Admins can update projects" ON public.projects;
DROP POLICY IF EXISTS "Admins can delete projects" ON public.projects;

CREATE POLICY "Admins can insert projects" 
ON public.projects 
FOR INSERT 
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update projects" 
ON public.projects 
FOR UPDATE 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete projects" 
ON public.projects 
FOR DELETE 
USING (public.is_admin(auth.uid()));

-- Update policies for contact inquiries (admin can read/update, public can insert)
DROP POLICY IF EXISTS "Admins can view contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Admins can update contact inquiries" ON public.contact_inquiries;

CREATE POLICY "Admins can view contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update contact inquiries" 
ON public.contact_inquiries 
FOR UPDATE 
USING (public.is_admin(auth.uid()));

-- Insert a default admin user (you can change this email)
-- This will help you get started - make sure to change the email to your actual email
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_app_meta_data, raw_user_meta_data)
VALUES (
  gen_random_uuid(),
  'admin@example.com', 
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Admin User"}'
) ON CONFLICT (email) DO NOTHING;

-- Update the profile for the admin user to have admin role
UPDATE public.profiles 
SET role = 'admin' 
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'admin@example.com');

-- If profile doesn't exist, create it
INSERT INTO public.profiles (user_id, full_name, email, role)
SELECT id, 'Admin User', 'admin@example.com', 'admin'
FROM auth.users 
WHERE email = 'admin@example.com'
AND NOT EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.users.id);