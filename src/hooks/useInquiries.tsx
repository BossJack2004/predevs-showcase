import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast({
        title: "Error",
        description: "Failed to fetch inquiries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setInquiries(prev => prev.map(i => i.id === id ? data : i));
      toast({
        title: "Success",
        description: "Inquiry status updated",
      });
      return data;
    } catch (error) {
      console.error('Error updating inquiry:', error);
      toast({
        title: "Error",
        description: "Failed to update inquiry status",
        variant: "destructive",
      });
      throw error;
    }
  };

  const submitInquiry = async (inquiry: Omit<Inquiry, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([{ ...inquiry, status: 'new' }])
        .select()
        .single();

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      return data;
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return {
    inquiries,
    loading,
    updateInquiryStatus,
    submitInquiry,
    refetch: fetchInquiries,
  };
};