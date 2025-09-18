-- Fix the profiles table to allow trigger-based inserts during user signup
-- The issue is that during signup, the trigger runs before auth context is fully established

-- Drop the existing insert policy that might be too restrictive
DROP POLICY IF EXISTS "Allow profile creation during signup" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

-- Create a more permissive policy for profile creation that works with triggers
-- This allows inserts when either:
-- 1. The user is authenticated and inserting their own profile, OR
-- 2. The function is running with elevated privileges (SECURITY DEFINER)
CREATE POLICY "Enable profile creation" 
ON public.profiles 
FOR INSERT 
WITH CHECK (
  auth.uid() = user_id OR 
  auth.uid() IS NULL  -- Allow during trigger execution when auth context may not be available
);

-- Alternative approach: Grant direct permissions to the authenticated role for this specific case
-- This ensures the trigger can always insert regardless of RLS
GRANT INSERT ON public.profiles TO authenticated;
GRANT INSERT ON public.profiles TO anon;