import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/Dialog';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI/ML', 'UI/UX Design'];
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce platform with real-time inventory management and payment processing.',
    image: '🛒',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    client: 'Retail Corp',
    timeline: '6 months',
    features: ['Real-time Inventory', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive'],
    caseStudy: {
      challenge: 'The client needed a scalable e-commerce platform to handle thousands of products and transactions.',
      solution: 'We built a modern web application with microservices architecture and real-time features.',
      results: ['300% increase in online sales', '50% reduction in checkout time', '99.9% uptime'],
    },
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    category: 'Mobile Apps',
    description: 'Cross-platform mobile app for personal finance management with AI-powered insights.',
    image: '💰',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AI/ML'],
    client: 'FinanceStart',
    timeline: '8 months',
    features: ['Budget Tracking', 'AI Insights', 'Investment Tracking', 'Security Features'],
    caseStudy: {
      challenge: 'Create a user-friendly finance app that stands out in a crowded market.',
      solution: 'Developed a React Native app with AI-powered financial insights and beautiful UI.',
      results: ['4.8★ App Store rating', '500K+ downloads', '90% user retention'],
    },
  },
  {
    id: 3,
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Complete cloud migration for a healthcare company, improving scalability and security.',
    image: '🏥',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
    client: 'HealthTech Inc',
    timeline: '4 months',
    features: ['Scalable Infrastructure', 'Security Compliance', '24/7 Monitoring', 'Cost Optimization'],
    caseStudy: {
      challenge: 'Migrate legacy systems to cloud while ensuring HIPAA compliance.',
      solution: 'Implemented secure cloud infrastructure with automated compliance monitoring.',
      results: ['40% cost reduction', '99.9% uptime', 'HIPAA certified'],
    },
  },
  {
    id: 4,
    title: 'AI Chatbot',
    category: 'AI/ML',
    description: 'Intelligent customer service chatbot with natural language processing capabilities.',
    image: '🤖',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    client: 'SupportBot Ltd',
    timeline: '5 months',
    features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
    caseStudy: {
      challenge: 'Automate customer support while maintaining human-like interactions.',
      solution: 'Built an AI-powered chatbot using advanced NLP and machine learning.',
      results: ['70% query automation', '24/7 availability', '95% customer satisfaction'],
    },
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Comprehensive analytics dashboard for SaaS companies with real-time data visualization.',
    image: '📊',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    client: 'DataViz Co',
    timeline: '7 months',
    features: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'User Management'],
    caseStudy: {
      challenge: 'Create an intuitive dashboard for complex business analytics.',
      solution: 'Developed a Vue.js dashboard with interactive charts and real-time updates.',
      results: ['500% increase in data insights', '60% faster reporting', 'Enhanced decision making'],
    },
  },
  {
    id: 6,
    title: 'Design System',
    category: 'UI/UX Design',
    description: 'Comprehensive design system and component library for enterprise applications.',
    image: '🎨',
    technologies: ['Figma', 'Storybook', 'React', 'TypeScript'],
    client: 'DesignOps Inc',
    timeline: '3 months',
    features: ['Component Library', 'Design Tokens', 'Documentation', 'Developer Tools'],
    caseStudy: {
      challenge: 'Standardize design across multiple product lines.',
      solution: 'Created a comprehensive design system with reusable components.',
      results: ['50% faster development', '100% consistency', 'Improved developer experience'],
    },
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Success Rate' },
  { value: '24/7', label: 'Support Available' },
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-6">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories &{' '}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of successful projects and discover how we've helped 
              businesses achieve their technology goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.timeline}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                              <div className="text-8xl">{project.image}</div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold mb-2">Challenge</h3>
                              <p className="text-gray-600">{project.caseStudy.challenge}</p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold mb-2">Solution</h3>
                              <p className="text-gray-600">{project.caseStudy.solution}</p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold mb-2">Results</h3>
                              <ul className="space-y-1">
                                {project.caseStudy.results.map((result) => (
                                  <li key={result} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                                    <span className="text-gray-600">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" className="flex-1">
                        Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Study
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A deep dive into one of our most impactful projects.
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Web Development
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  E-Commerce Revolution
                </h3>
                <p className="text-blue-100 mb-6">
                  How we helped Retail Corp transform their online presence and increase sales by 300%.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">300% increase in online sales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">50% reduction in checkout time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">99.9% uptime achieved</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-8xl">🛒</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Client Feedback</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The team delivered exactly what we needed, on time and within budget. The results exceeded our expectations.",
                author: "John Smith",
                role: "CEO, Retail Corp",
                rating: 5,
              },
              {
                quote: "Outstanding technical expertise and great communication throughout the project. Highly recommended!",
                author: "Sarah Johnson",
                role: "Product Manager, FinanceStart",
                rating: 5,
              },
              {
                quote: "Their cloud migration saved us time and money while improving our system's reliability significantly.",
                author: "Mike Chen",
                role: "CTO, HealthTech Inc",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our portfolio of satisfied clients and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
