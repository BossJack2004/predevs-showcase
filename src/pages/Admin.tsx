import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
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
  LogOut
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
  const [activeTab, setActiveTab] = useState('projects');
  const { user, signOut } = useAuth();
  
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
    { 
      title: 'Total Projects', 
      value: '12', 
      icon: FolderOpen, 
      change: '+2 this month',
      changeType: 'positive' as const,
      progress: 75
    },
    { 
      title: 'Active Clients', 
      value: '8', 
      icon: Users, 
      change: '+1 this week',
      changeType: 'positive' as const,
      progress: 60
    },
    { 
      title: 'New Inquiries', 
      value: '5', 
      icon: MessageSquare, 
      change: '+3 today',
      changeType: 'positive' as const,
      progress: 90
    },
    { 
      title: 'Revenue', 
      value: '$24,500', 
      icon: BarChart3, 
      change: '+15% this month',
      changeType: 'positive' as const,
      progress: 85
    }
  ];

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
                  Predevs.com Management Portal
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
              <Button className="bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 hover-scale">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Recent Projects</CardTitle>
                      <CardDescription>Your latest portfolio projects</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>This month</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div 
                        key={project.id} 
                        className="group flex items-center justify-between rounded-xl border border-border/40 p-4 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-md animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`https://api.dicebear.com/7.x/shapes/svg?seed=${project.id}`} />
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
                              Created on {project.created}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant={project.status === 'published' ? 'default' : 'secondary'}
                            className={project.status === 'published' ? 'bg-success text-success-foreground' : ''}
                          >
                            {project.status === 'published' ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <AlertCircle className="h-3 w-3 mr-1" />
                            )}
                            {project.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity hover-scale text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-xl border-primary/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Manage your projects efficiently</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start hover-scale">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover-scale">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Projects
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover-scale">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
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
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="hover-scale">
                  <Eye className="mr-2 h-4 w-4" />
                  View All
                </Button>
                <Button className="bg-gradient-primary text-white shadow-lg shadow-primary/25 hover-scale">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Inquiry Stats */}
              <div className="lg:col-span-1 space-y-4">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-xl border-primary/20">
                  <CardContent className="p-4 text-center">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">5</div>
                    <div className="text-sm text-muted-foreground">New Inquiries</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-success/5 to-success/10 backdrop-blur-xl border-success/20">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-sm text-muted-foreground">Replied</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-muted/5 to-muted/10 backdrop-blur-xl border-muted/20">
                  <CardContent className="p-4 text-center">
                    <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">3</div>
                    <div className="text-sm text-muted-foreground">Closed</div>
                  </CardContent>
                </Card>
              </div>

              {/* Inquiries List */}
              <Card className="lg:col-span-3 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">Recent Inquiries</CardTitle>
                      <CardDescription>Latest contact form submissions</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Today</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inquiries.map((inquiry, index) => (
                      <div 
                        key={inquiry.id} 
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl border border-border/40 p-4 bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-md animate-fade-in gap-4 sm:gap-0"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start sm:items-center gap-4 flex-1 w-full sm:w-auto">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${inquiry.name}`} />
                            <AvatarFallback className="bg-gradient-primary text-white">
                              {inquiry.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {inquiry.name}
                            </h4>
                            <p className="text-sm text-muted-foreground truncate">{inquiry.email}</p>
                            <p className="text-sm font-medium text-foreground mt-1">{inquiry.subject}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                              <Clock className="h-3 w-3" />
                              Received on {inquiry.created}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                          <Badge 
                            variant={inquiry.status === 'new' ? 'destructive' : inquiry.status === 'replied' ? 'default' : 'secondary'}
                            className={inquiry.status === 'replied' ? 'bg-success text-success-foreground' : ''}
                          >
                            {inquiry.status === 'new' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {inquiry.status === 'replied' && <CheckCircle className="h-3 w-3 mr-1" />}
                            {inquiry.status === 'closed' && <Clock className="h-3 w-3 mr-1" />}
                            {inquiry.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="hover-scale">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="hover-scale">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Content Management</h2>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Edit3 className="h-4 w-4" />
                Update site content, team info, and services
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Hero Section */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Hero Section</CardTitle>
                  </div>
                  <CardDescription>Main homepage content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title" className="text-sm font-medium">Main Title</Label>
                    <Input 
                      id="hero-title" 
                      defaultValue="Professional, Reliable, Exceptional" 
                      className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle" className="text-sm font-medium">Subtitle</Label>
                    <Textarea 
                      id="hero-subtitle" 
                      defaultValue="We create exceptional web experiences that drive results for your business."
                      className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary text-white shadow-lg shadow-primary/25 hover-scale">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Update Hero
                  </Button>
                </CardContent>
              </Card>

              {/* Team Members */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Team Members</CardTitle>
                  </div>
                  <CardDescription>Manage team information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: 'Alex Johnson', role: 'Lead Developer', avatar: '1' },
                      { name: 'Sarah Chen', role: 'UI/UX Designer', avatar: '2' },
                      { name: 'Mike Rodriguez', role: 'Project Manager', avatar: '3' }
                    ].map((member, index) => (
                      <div 
                        key={member.name}
                        className="flex items-center justify-between rounded-xl border border-border/40 p-3 bg-background/50 hover:bg-background/80 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}`} />
                            <AvatarFallback className="bg-gradient-primary text-white text-xs">
                              {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="font-medium text-foreground text-sm">{member.name}</span>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="hover-scale">
                          <Edit3 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full hover-scale">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Team Member
                  </Button>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Services</CardTitle>
                  </div>
                  <CardDescription>Manage service offerings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Web Development', icon: '💻' },
                    { name: 'Mobile Apps', icon: '📱' },
                    { name: 'Cloud Solutions', icon: '☁️' },
                    { name: 'UI/UX Design', icon: '🎨' }
                  ].map((service, index) => (
                    <div 
                      key={service.name}
                      className="flex items-center justify-between rounded-xl border border-border/40 p-3 bg-background/50 hover:bg-background/80 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{service.icon}</span>
                        <span className="font-medium text-foreground text-sm">{service.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-scale">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full hover-scale">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Service
                  </Button>
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">SEO Settings</CardTitle>
                  </div>
                  <CardDescription>Search engine optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title" className="text-sm font-medium">Meta Title</Label>
                    <Input 
                      id="meta-title" 
                      defaultValue="Predevs.com - P.R.E Professional Development Team"
                      className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta-description" className="text-sm font-medium">Meta Description</Label>
                    <Textarea 
                      id="meta-description" 
                      defaultValue="Professional, Reliable, Exceptional development team. Expert web development, mobile apps, cloud solutions."
                      className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors min-h-[80px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary text-white shadow-lg shadow-primary/25 hover-scale">
                    <Globe className="mr-2 h-4 w-4" />
                    Update SEO
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Settings</h2>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Settings className="h-4 w-4" />
                Configure site settings and integrations
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Site Configuration */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Site Configuration</CardTitle>
                  </div>
                  <CardDescription>General website settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="site-name" className="text-sm font-medium">Site Name</Label>
                      <Input 
                        id="site-name" 
                        defaultValue="P.R.E Development Team" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-medium">Contact Email</Label>
                      <Input 
                        id="contact-email" 
                        defaultValue="hello@predevs.com" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input 
                        id="phone" 
                        defaultValue="+1 (555) 123-4567" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                      <Input 
                        id="address" 
                        defaultValue="San Francisco, CA" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary text-white shadow-lg shadow-primary/25 hover-scale">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Save Site Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Integration Settings */}
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Integration Settings</CardTitle>
                  </div>
                  <CardDescription>API keys and external services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="supabase-url" className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        Supabase URL
                      </Label>
                      <Input 
                        id="supabase-url" 
                        type="password" 
                        defaultValue="••••••••••••••••" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resend-key" className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        Resend API Key
                      </Label>
                      <Input 
                        id="resend-key" 
                        type="password" 
                        defaultValue="••••••••••••••••" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="analytics-id" className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                        Analytics ID (Optional)
                      </Label>
                      <Input 
                        id="analytics-id" 
                        placeholder="GA4 Measurement ID" 
                        className="bg-background/50 border-border/40 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary text-white shadow-lg shadow-primary/25 hover-scale">
                    <Shield className="mr-2 h-4 w-4" />
                    Update Integration Keys
                  </Button>
                </CardContent>
              </Card>

              {/* Performance & Security */}
              <Card className="xl:col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-border/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Performance & Security</CardTitle>
                  </div>
                  <CardDescription>Monitor and optimize your site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Performance Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Performance Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Page Load Speed</span>
                          <div className="flex items-center gap-2">
                            <Progress value={92} className="w-16 h-2" />
                            <span className="text-sm font-medium text-success">92/100</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">SEO Score</span>
                          <div className="flex items-center gap-2">
                            <Progress value={95} className="w-16 h-2" />
                            <span className="text-sm font-medium text-success">95/100</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Accessibility</span>
                          <div className="flex items-center gap-2">
                            <Progress value={88} className="w-16 h-2" />
                            <span className="text-sm font-medium text-success">88/100</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Security Status */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Security Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm text-foreground">SSL Certificate Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm text-foreground">Security Headers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm text-foreground">HTTPS Redirect</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-warning" />
                          <span className="text-sm text-foreground">2FA Recommended</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start hover-scale">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          View Analytics
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start hover-scale">
                          <Shield className="mr-2 h-4 w-4" />
                          Security Scan
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start hover-scale">
                          <Activity className="mr-2 h-4 w-4" />
                          Performance Test
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;