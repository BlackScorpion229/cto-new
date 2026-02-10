import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Modern, Responsive Websites',
    description: 'Build stunning, high-performance websites that engage users and drive conversions. From simple landing pages to complex web applications.',
    icon: '💻',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Content Management', 'E-commerce Integration', 'Progressive Web Apps'],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'PHP'],
    price: 'Starting at $2,999',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    subtitle: 'iOS & Android Apps',
    description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: '📱',
    features: ['Native iOS & Android', 'Cross-Platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Monitoring'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Ionic'],
    price: 'Starting at $4,999',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Migrate, optimize, and manage your infrastructure in the cloud for better performance, security, and cost efficiency.',
    icon: '☁️',
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Security Implementation', 'Performance Monitoring', 'Cost Optimization'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    price: 'Starting at $3,499',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design',
    description: 'Design beautiful, intuitive interfaces that provide exceptional user experiences and drive business results.',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
    price: 'Starting at $2,499',
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI/ML Solutions',
    subtitle: 'Intelligent Systems',
    description: 'Integrate artificial intelligence and machine learning to automate processes and gain valuable insights from your data.',
    icon: '🤖',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Data Analysis', 'Automation'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face'],
    price: 'Starting at $5,999',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    subtitle: 'Expert Guidance',
    description: 'Get strategic technology advice from our experienced consultants to make informed decisions about your digital transformation.',
    icon: '🔍',
    features: ['Technology Audit', 'Architecture Review', 'Digital Strategy', 'Performance Optimization', 'Security Assessment', 'Team Training'],
    technologies: ['All Major Platforms', 'Industry Best Practices', 'Custom Frameworks', 'Integration Solutions'],
    price: 'Starting at $199/hour',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team creates detailed designs and technical architecture tailored to your needs.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies with continuous testing and feedback.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support to ensure optimal performance.',
  },
];

export const Services: React.FC = () => {
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
            <Badge variant="outline" className="mb-6">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive{' '}
              <span className="gradient-text">Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to deployment, we provide end-to-end technology services 
              that power your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-blue-600 font-medium">{service.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="tech" className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </TabsContent>
                    </Tabs>
                    
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">{service.price}</span>
                        <Button size="sm">Learn More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the latest technologies and frameworks to deliver modern, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python',
              'AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Investment</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing models designed to fit your budget and project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'Custom Quote',
                description: 'Perfect for small projects and startups',
                features: ['1-3 months timeline', 'Basic features', 'Email support', 'Source code included'],
                cta: 'Get Quote',
                popular: false,
              },
              {
                name: 'Professional',
                price: 'Custom Quote',
                description: 'Ideal for growing businesses',
                features: ['3-6 months timeline', 'Advanced features', 'Priority support', 'Performance optimization'],
                cta: 'Get Quote',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom Quote',
                description: 'For large-scale projects',
                features: ['6+ months timeline', 'Custom solutions', 'Dedicated team', '24/7 support'],
                cta: 'Contact Us',
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full p-8 relative ${plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-0 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold gradient-text mb-6">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button size="lg" className="w-full">
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your requirements and create a custom solution that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
