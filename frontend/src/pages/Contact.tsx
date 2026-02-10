import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '../components/ui/Icons';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: <MailIcon />,
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: 'hello@nexgensolutions.com',
    link: 'mailto:hello@nexgensolutions.com',
  },
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: <MapPinIcon />,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    value: '123 Tech Street, San Francisco, CA 94102',
    link: '#',
  },
  {
    icon: <ClockIcon />,
    title: 'Working Hours',
    description: 'When we\'re available',
    value: 'Mon-Fri: 8am-5pm PST',
    link: '#',
  },
];

const faqs = [
  {
    question: 'How quickly can you start my project?',
    answer: 'We typically respond to new inquiries within 24 hours and can start most projects within 1-2 weeks of signing.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer comprehensive support packages to ensure your solution continues to perform optimally.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'We provide a 30-day warranty on all projects and offer ongoing development services for future changes.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We collaborate seamlessly with internal teams and can integrate into your existing workflow.',
  },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

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
            <Badge variant="outline" className="mb-6">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl mb-2">Start Your Project</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        label="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                      <Input
                        name="email"
                        type="email"
                        label="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="company"
                        label="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Project Type
                        </label>
                        <select
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-development">Mobile Development</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="ai-ml-solutions">AI/ML Solutions</option>
                          <option value="consulting">Technical Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>
                    
                    <Textarea
                      name="message"
                      label="Project Details *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                    />
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <ArrowRightIcon />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help answer any questions you might have. 
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                          <p className="text-gray-900 font-medium">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPinIcon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive map coming soon</p>
                      <p className="text-sm text-gray-500">123 Tech Street, San Francisco, CA 94102</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about working with us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait to transform your business. Let's start building your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
                Email Us Directly
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
