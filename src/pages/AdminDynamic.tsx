import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
import { useProjects } from '@/hooks/useProjects';
import { useInquiries } from '@/hooks/useInquiries';
import { useSiteContent } from '@/hooks/useSiteContent';
import { ProjectForm } from '@/components/admin/ProjectForm';
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
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity,
  Calendar,
  Globe,
  Zap,
  LogOut,
  Save
} from 'lucide-react';

const AdminDynamic = () => {
  const { user, signOut } = useAuth();
  const { projects: dbProjects, loading: projectsLoading, addProject, updateProject, deleteProject } = useProjects();
  const { inquiries, loading: inquiriesLoading, updateInquiryStatus } = useInquiries();
  const { content, settings, updateContent, updateSettings } = useSiteContent();
  
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  
  // Default projects with PREDEVS.dev branding
  const defaultProjects = [
    {
      id: 'default-1',
      title: 'EcoShop - E-Commerce Platform',
      category: 'web',
      description: 'Next-generation e-commerce platform with AI-powered recommendations and sustainable shopping features.',
      long_description: 'A comprehensive e-commerce solution featuring real-time inventory management, advanced analytics, AI-powered product recommendations, and seamless payment processing. Built with modern React architecture and microservices backend for maximum scalability.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      image_url: '/assets/portfolio-ecommerce.jpg',
      project_url: 'https://ecoshop-demo.predevs.dev',
      github_url: 'https://github.com/predevs/ecoshop',
      client_name: 'EcoShop Inc.',
      start_date: '2024-01-01',
      end_date: '2024-04-30',
      status: 'completed',
      featured: true,
      created_at: '2024-01-15T00:00:00Z',
      updated_at: '2024-04-30T00:00:00Z'
    },
    {
      id: 'default-2',
      title: 'SecureBank Mobile - Banking App',
      category: 'mobile',
      description: 'Secure mobile banking app with biometric authentication and real-time transaction features.',
      long_description: 'A cutting-edge mobile banking application featuring biometric authentication, real-time transaction processing, budget tracking, and investment portfolio management. Built with React Native and robust security protocols.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API', 'AWS', 'Node.js'],
      image_url: '/assets/portfolio-banking.jpg',
      project_url: 'https://apps.apple.com/securebank-mobile',
      github_url: 'https://github.com/predevs/securebank-mobile',
      client_name: 'SecureBank Corp',
      start_date: '2024-02-01',
      end_date: '2024-07-30',
      status: 'completed',
      featured: true,
      created_at: '2024-02-01T00:00:00Z',
      updated_at: '2024-07-30T00:00:00Z'
    },
    {
      id: 'default-3',
      title: 'DataViz Pro - Analytics Dashboard',
      category: 'web',
      description: 'Advanced analytics dashboard with real-time data visualization and reporting capabilities.',
      long_description: 'A powerful SaaS analytics platform offering real-time data visualization, custom reporting, predictive analytics, and team collaboration features. Built with modern web technologies and optimized for performance.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      image_url: '/assets/portfolio-saas.jpg',
      project_url: 'https://dataviz-pro.predevs.dev',
      github_url: 'https://github.com/predevs/dataviz-pro',
      client_name: 'TechCorp Analytics',
      start_date: '2024-03-01',
      end_date: '2024-08-15',
      status: 'completed',
      featured: true,
      created_at: '2024-03-01T00:00:00Z',
      updated_at: '2024-08-15T00:00:00Z'
    },
    {
      id: 'default-4',
      title: 'SmartCRM - AI-Powered CRM System',
      category: 'enterprise',
      description: 'Enterprise CRM with AI-powered lead scoring and automation workflows for sales teams.',
      long_description: 'An intelligent customer relationship management system featuring AI-powered lead scoring, automated workflows, advanced reporting, and seamless integrations. Designed for enterprise-scale operations with high-performance architecture.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB', 'Docker', 'Kubernetes'],
      image_url: '/assets/portfolio-crm.jpg',
      project_url: 'https://smartcrm-demo.predevs.dev',
      github_url: 'https://github.com/predevs/smartcrm',
      client_name: 'Enterprise Solutions Ltd',
      start_date: '2024-04-01',
      end_date: '2024-11-30',
      status: 'completed',
      featured: true,
      created_at: '2024-04-01T00:00:00Z',
      updated_at: '2024-11-30T00:00:00Z'
    }
  ];

  // Merge database projects with default projects
  React.useEffect(() => {
    // Filter out default projects that have been converted to database projects
    const dbProjectTitles = dbProjects.map(p => p.title);
    const remainingDefaultProjects = defaultProjects.filter(dp => 
      !dbProjectTitles.includes(dp.title)
    );
    setAllProjects([...dbProjects, ...remainingDefaultProjects]);
  }, [dbProjects]);

  const [contentForm, setContentForm] = useState({
    hero_title: content?.hero_title || '',
    hero_subtitle: content?.hero_subtitle || '',
  });
  const [settingsForm, setSettingsForm] = useState({
    site_name: settings?.site_name || '',
    meta_title: settings?.meta_title || '',
    meta_description: settings?.meta_description || '',
    contact_email: settings?.contact_email || '',
    phone: settings?.phone || '',
    address: settings?.address || '',
  });

  React.useEffect(() => {
    if (content) {
      setContentForm({
        hero_title: content.hero_title || '',
        hero_subtitle: content.hero_subtitle || '',
      });
    }
  }, [content]);

  React.useEffect(() => {
    if (settings) {
      setSettingsForm({
        site_name: settings.site_name || '',
        meta_title: settings.meta_title || '',
        meta_description: settings.meta_description || '',
        contact_email: settings.contact_email || '',
        phone: settings.phone || '',
        address: settings.address || '',
      });
    }
  }, [settings]);

  const statsCards = [
    { 
      title: 'Total Projects', 
      value: allProjects.length.toString(), 
      icon: FolderOpen, 
      change: '+2 this month',
      changeType: 'positive' as const,
      progress: 75
    },
    { 
      title: 'New Inquiries', 
      value: inquiries.filter(i => i.status === 'new').length.toString(), 
      icon: MessageSquare, 
      change: `${inquiries.filter(i => i.status === 'new').length} pending`,
      changeType: 'positive' as const,
      progress: 90
    },
    { 
      title: 'Replied Inquiries', 
      value: inquiries.filter(i => i.status === 'replied').length.toString(), 
      icon: CheckCircle, 
      change: 'Recent activity',
      changeType: 'positive' as const,
      progress: 60
    },
    { 
      title: 'Active Content', 
      value: content ? '1' : '0', 
      icon: BarChart3, 
      change: 'Content configured',
      changeType: 'positive' as const,
      progress: content ? 100 : 0
    }
  ];

  const handleProjectSubmit = async (projectData: any) => {
    if (selectedProject) {
      // Check if it's a default project (string ID starting with 'default-')
      if (selectedProject.id.toString().startsWith('default-')) {
        // Convert default project to database project when edited
        const newProject = await addProject(projectData);
        // Remove the default project and add the new database project
        setAllProjects(prev => {
          const filtered = prev.filter(p => p.id !== selectedProject.id);
          return [newProject, ...filtered];
        });
      } else {
        // Update existing database project
        await updateProject(selectedProject.id, projectData);
      }
    } else {
      await addProject(projectData);
    }
    setSelectedProject(null);
  };

  const handleDeleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
    }
  };

  const handleContentSave = async () => {
    await updateContent(contentForm);
  };

  const handleSettingsSave = async () => {
    await updateSettings(settingsForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-lg shadow-primary/25 animate-pulse-glow">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-primary opacity-20 blur animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Globe className="h-3 w-3" />
                  PREDEVS.dev Management Portal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 rounded-full bg-success/10 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium text-success">Online</span>
              </div>
              <div className="hidden md:block text-sm text-muted-foreground">
                Welcome, {user?.email}
              </div>
              <Button variant="outline" asChild className="hover-scale">
                <a href="/" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Site
                </a>
              </Button>
              <Button variant="ghost" onClick={signOut} className="hover-scale text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="relative">
                  <stat.icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                  <div className="absolute -inset-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-success font-medium flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                </div>
                <Progress value={stat.progress} className="h-1.5" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto bg-card/50 backdrop-blur-sm border border-border/40 p-1">
              <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300">
                <FolderOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="inquiries" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Inquiries</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300">
                <Edit3 className="h-4 w-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>Last updated: 2 mins ago</span>
            </div>
          </div>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Project Management</h2>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Zap className="h-4 w-4" />
                  Manage your portfolio projects and case studies
                </p>
              </div>
              <Button 
                className="bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 hover-scale"
                onClick={() => {
                  setSelectedProject(null);
                  setShowProjectForm(true);
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">All Projects</CardTitle>
                    <CardDescription>Manage your portfolio projects</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{allProjects.length} total</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {projectsLoading ? (
                  <div className="text-center py-8">Loading projects...</div>
                ) : (
                  <div className="space-y-4">
                    {allProjects.map((project, index) => (
                      <div
                        key={project.id} 
                        className="group flex items-center justify-between rounded-xl border border-border/40 p-4 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-md animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={project.image_url || `https://api.dicebear.com/7.x/shapes/svg?seed=${project.id}`} />
                            <AvatarFallback className="bg-gradient-primary text-white">
                              {project.title.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              Created {new Date(project.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant={project.status === 'completed' ? 'default' : 'secondary'}
                            className={project.status === 'completed' ? 'bg-success text-success-foreground' : ''}
                          >
                            {project.status === 'completed' ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <AlertCircle className="h-3 w-3 mr-1" />
                            )}
                            {project.status}
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover-scale"
                            onClick={() => {
                              setSelectedProject(project);
                              setShowProjectForm(true);
                            }}
                          >
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          {!project.id.toString().startsWith('default-') && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="hover-scale text-destructive"
                              onClick={() => handleDeleteProject(project.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                          {project.id.toString().startsWith('default-') && (
                            <Badge variant="outline" className="text-xs">
                              Sample Project
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Client Inquiries</h2>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Mail className="h-4 w-4" />
                  Manage contact form submissions and leads
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Recent Inquiries</CardTitle>
                <CardDescription>Latest contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                {inquiriesLoading ? (
                  <div className="text-center py-8">Loading inquiries...</div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inquiry, index) => (
                      <div 
                        key={inquiry.id} 
                        className="group flex items-center justify-between rounded-xl border border-border/40 p-4 bg-background/50 hover:bg-background/80 transition-all duration-300"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h4 className="font-semibold text-foreground">{inquiry.name}</h4>
                            <Badge variant={
                              inquiry.status === 'new' ? 'default' : 
                              inquiry.status === 'replied' ? 'secondary' : 
                              'outline'
                            }>
                              {inquiry.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{inquiry.email}</p>
                          <p className="text-sm text-muted-foreground">{inquiry.subject}</p>
                          <p className="text-sm text-foreground mt-2 line-clamp-2">{inquiry.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {inquiry.status === 'new' && (
                            <Button 
                              size="sm"
                              onClick={() => updateInquiryStatus(inquiry.id, 'replied')}
                            >
                              Mark Replied
                            </Button>
                          )}
                          <Button variant="outline" size="sm" asChild>
                            <a href={`mailto:${inquiry.email}`}>
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Content Management</h2>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Edit3 className="h-4 w-4" />
                  Manage homepage content and messaging
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Hero Section</CardTitle>
                <CardDescription>Update the main hero section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero_title">Hero Title</Label>
                  <Input
                    id="hero_title"
                    value={contentForm.hero_title}
                    onChange={(e) => setContentForm(prev => ({ ...prev, hero_title: e.target.value }))}
                    placeholder="PREDEVS - Professional Development Team"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero_subtitle">Hero Subtitle</Label>
                  <Textarea
                    id="hero_subtitle"
                    value={contentForm.hero_subtitle}
                    onChange={(e) => setContentForm(prev => ({ ...prev, hero_subtitle: e.target.value }))}
                    placeholder="We craft exceptional digital experiences that elevate your business to new heights..."
                    rows={3}
                  />
                </div>
                <Button onClick={handleContentSave} className="bg-gradient-primary text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Site Settings</h2>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Settings className="h-4 w-4" />
                  Configure site-wide settings and contact information
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40">
                <CardHeader>
                  <CardTitle className="text-xl">General Settings</CardTitle>
                  <CardDescription>Basic site configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="site_name">Site Name</Label>
                    <Input
                      id="site_name"
                      value={settingsForm.site_name}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, site_name: e.target.value }))}
                      placeholder="PREDEVS"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta_title">Meta Title</Label>
                    <Input
                      id="meta_title"
                      value={settingsForm.meta_title}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, meta_title: e.target.value }))}
                      placeholder="PREDEVS - Professional Development Solutions"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta_description">Meta Description</Label>
                    <Textarea
                      id="meta_description"
                      value={settingsForm.meta_description}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, meta_description: e.target.value }))}
                      placeholder="Expert development team delivering exceptional digital solutions that drive real business results..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>Update contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact_email">Contact Email</Label>
                    <Input
                      id="contact_email"
                      type="email"
                      value={settingsForm.contact_email}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, contact_email: e.target.value }))}
                      placeholder="hello@predevs.dev"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={settingsForm.address}
                      onChange={(e) => setSettingsForm(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleSettingsSave} className="bg-gradient-primary text-white">
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <ProjectForm
        project={selectedProject}
        open={showProjectForm}
        onOpenChange={setShowProjectForm}
        onSubmit={handleProjectSubmit}
      />
    </div>
  );
};

export default AdminDynamic;