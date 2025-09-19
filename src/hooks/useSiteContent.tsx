import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SiteContent {
  id: string;
  hero_title?: string;
  hero_subtitle?: string;
  created_at: string;
  updated_at: string;
}

export interface SiteSettings {
  id: string;
  site_name?: string;
  meta_title?: string;
  meta_description?: string;
  contact_email?: string;
  phone?: string;
  address?: string;
  created_at: string;
  updated_at: string;
}

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchContent = async () => {
    try {
      const [contentResult, settingsResult] = await Promise.all([
        (supabase as any).from('site_content').select('*').limit(1).maybeSingle(),
        (supabase as any).from('site_settings').select('*').limit(1).maybeSingle()
      ]);

      if (contentResult.error) throw contentResult.error;
      if (settingsResult.error) throw settingsResult.error;

      setContent(contentResult.data);
      setSettings(settingsResult.data);
    } catch (error) {
      console.error('Error fetching site content:', error);
      toast({
        title: "Error",
        description: "Failed to fetch site content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (updates: Partial<SiteContent>) => {
    try {
      if (content?.id) {
        // Update existing content
        const { data, error } = await (supabase as any)
          .from('site_content')
          .update(updates)
          .eq('id', content.id)
          .select()
          .single();

        if (error) throw error;
        setContent(data);
      } else {
        // Create new content
        const { data, error } = await (supabase as any)
          .from('site_content')
          .insert([updates])
          .select()
          .single();

        if (error) throw error;
        setContent(data);
      }

      toast({
        title: "Success",
        description: "Site content updated successfully",
      });
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Error",
        description: "Failed to update site content",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateSettings = async (updates: Partial<SiteSettings>) => {
    try {
      if (settings?.id) {
        // Update existing settings
        const { data, error } = await (supabase as any)
          .from('site_settings')
          .update(updates)
          .eq('id', settings.id)
          .select()
          .single();

        if (error) throw error;
        setSettings(data);
      } else {
        // Create new settings
        const { data, error } = await (supabase as any)
          .from('site_settings')
          .insert([updates])
          .select()
          .single();

        if (error) throw error;
        setSettings(data);
      }

      toast({
        title: "Success",
        description: "Site settings updated successfully",
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      toast({
        title: "Error",
        description: "Failed to update site settings",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    content,
    settings,
    loading,
    updateContent,
    updateSettings,
    refetch: fetchContent,
  };
};