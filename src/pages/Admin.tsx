import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Settings, 
  Plus, 
  Edit3, 
  Trash2,
  Eye,
  Mail,
  BarChart3,
  Shield
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  status: 'draft' | 'published';
  created: string;
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: 'new' | 'replied' | 'closed';
  created: string;
}

const Admin = () => {
  const [projects] = useState<Project[]>([
    { id: '1', title: 'E-commerce Platform Redesign', status: 'published', created: '2024-01-15' },
    { id: '2', title: 'Mobile Banking App', status: 'published', created: '2024-01-10' },
    { id: '3', title: 'Healthcare Management System', status: 'draft', created: '2024-01-08' }
  ]);

  const [inquiries] = useState<Inquiry[]>([
    { id: '1', name: 'Sarah Johnson', email: 'sarah@company.com', subject: 'Web Development Inquiry', status: 'new', created: '2024-01-20' },
    { id: '2', name: 'Mark Chen', email: 'mark@startup.io', subject: 'Mobile App Development', status: 'replied', created: '2024-01-19' },
    { id: '3', name: 'Lisa Rodriguez', email: 'lisa@corp.com', subject: 'Cloud Migration Project', status: 'new', created: '2024-01-18' }
  ]);

  const statsCards = [
    { title: 'Total Projects', value: '12', icon: FolderOpen, change: '+2 this month' },
    { title: 'Active Clients', value: '8', icon: Users, change: '+1 this week' },
    { title: 'New Inquiries', value: '5', icon: MessageSquare, change: '+3 today' },
    { title: 'Revenue', value: '$24,500', icon: BarChart3, change: '+15% this month' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Predevs.com Management Portal</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <a href="/" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                View Site
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((stat) => (
            <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Inquiries
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Edit3 className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Project Management</h2>
                <p className="text-muted-foreground">Manage your portfolio projects and case studies</p>
              </div>
              <Button className="bg-gradient-primary text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest portfolio projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between rounded-lg border border-border/40 p-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">Created on {project.created}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Client Inquiries</h2>
              <p className="text-muted-foreground">Manage contact form submissions and leads</p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
                <CardDescription>Latest contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between rounded-lg border border-border/40 p-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{inquiry.name}</h4>
                        <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                        <p className="text-sm font-medium text-foreground">{inquiry.subject}</p>
                        <p className="text-xs text-muted-foreground">Received on {inquiry.created}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={inquiry.status === 'new' ? 'destructive' : inquiry.status === 'replied' ? 'default' : 'secondary'}>
                          {inquiry.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Content Management</h2>
              <p className="text-muted-foreground">Update site content, team info, and services</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                  <CardDescription>Main homepage content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="hero-title">Main Title</Label>
                    <Input id="hero-title" defaultValue="Professional, Reliable, Exceptional" />
                  </div>
                  <div>
                    <Label htmlFor="hero-subtitle">Subtitle</Label>
                    <Textarea 
                      id="hero-subtitle" 
                      defaultValue="We create exceptional web experiences that drive results for your business."
                    />
                  </div>
                  <Button className="bg-gradient-primary text-white">Update Hero</Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage team information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded border border-border/40 p-3">
                      <span className="font-medium text-foreground">Alex Johnson - Lead Developer</span>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded border border-border/40 p-3">
                      <span className="font-medium text-foreground">Sarah Chen - UI/UX Designer</span>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded border border-border/40 p-3">
                      <span className="font-medium text-foreground">Mike Rodriguez - Project Manager</span>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Team Member
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Settings</h2>
              <p className="text-muted-foreground">Configure site settings and integrations</p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Site Configuration</CardTitle>
                <CardDescription>General website settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="site-name">Site Name</Label>
                    <Input id="site-name" defaultValue="P.R.E Development Team" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" defaultValue="hello@predevs.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="San Francisco, CA" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Integration Settings</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="supabase-url">Supabase URL</Label>
                      <Input id="supabase-url" type="password" defaultValue="••••••••••••••••" />
                    </div>
                    <div>
                      <Label htmlFor="resend-key">Resend API Key</Label>
                      <Input id="resend-key" type="password" defaultValue="••••••••••••••••" />
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-primary text-white">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;