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

-- Create helper function to make a user admin (can be called manually)
CREATE OR REPLACE FUNCTION public.make_user_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Find the user by email
  SELECT id INTO target_user_id FROM auth.users WHERE email = user_email;
  
  IF target_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Update their profile to admin
  UPDATE public.profiles 
  SET role = 'admin' 
  WHERE user_id = target_user_id;
  
  -- If no profile exists, create one
  IF NOT FOUND THEN
    INSERT INTO public.profiles (user_id, email, role)
    VALUES (target_user_id, user_email, 'admin');
  END IF;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;