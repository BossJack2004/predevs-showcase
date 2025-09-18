-- Set a secure password for the existing admin user
UPDATE auth.users 
SET encrypted_password = crypt('admin123', gen_salt('bf'))
WHERE email = 'preadmin@gmail.com';

-- Make sure they have an admin profile
INSERT INTO public.profiles (user_id, email, full_name, role)
VALUES (
  '70ec9262-ec6b-4f23-b430-bde7da0f176b',
  'preadmin@gmail.com', 
  'Admin User',
  'admin'
) ON CONFLICT (user_id) DO UPDATE SET 
  role = 'admin',
  email = 'preadmin@gmail.com';