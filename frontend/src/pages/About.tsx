import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { Separator } from '../components/ui/Separator';

const timeline = [
  { year: '2015', title: 'Founded', description: 'Started with a vision to transform businesses through technology' },
  { year: '2017', title: 'First Major Client', description: 'Partnered with a Fortune 500 company for digital transformation' },
  { year: '2019', title: 'Global Expansion', description: 'Opened offices in Europe and Asia to serve clients worldwide' },
  { year: '2021', title: '100th Project', description: 'Celebrated delivering our 100th successful project' },
  { year: '2023', title: 'Innovation Award', description: 'Received recognition for our AI-powered solutions' },
  { year: '2025', title: '500+ Clients', description: 'Continuing to grow and innovate with our global community' },
];

const team = [
  { name: 'Alex Thompson', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in tech entrepreneurship', avatar: 'A' },
  { name: 'Sarah Chen', role: 'CTO', bio: 'Former Google engineer, expert in cloud architecture', avatar: 'S' },
  { name: 'Michael Rodriguez', role: 'VP of Design', bio: 'Award-winning designer shaping user experiences', avatar: 'M' },
  { name: 'Emily Watson', role: 'Head of Operations', bio: 'Operations expert ensuring seamless project delivery', avatar: 'E' },
  { name: 'David Kim', role: 'Lead Developer', bio: 'Full-stack expert passionate about clean code', avatar: 'D' },
  { name: 'Lisa Park', role: 'Head of Marketing', bio: 'Growth strategist with a data-driven approach', avatar: 'L' },
];

const values = [
  { title: 'Innovation', description: 'Constantly pushing boundaries to deliver cutting-edge solutions', icon: '💡' },
  { title: 'Excellence', description: 'Uncompromising quality in everything we do', icon: '🎯' },
  { title: 'Collaboration', description: 'Working together to achieve extraordinary results', icon: '🤝' },
  { title: 'Integrity', description: 'Building trust through transparency and honesty', icon: '⭐' },
];

export const About: React.FC = () => {
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
            <Badge variant="outline" className="mb-6">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Driving Innovation,{' '}
              <span className="gradient-text">Creating Impact</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of passionate technologists, designers, and strategists 
              committed to transforming businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We believe that the right technology 
                  can transform how organizations operate and deliver value to their customers.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-purple-100 leading-relaxed">
                  To be the most trusted technology partner for businesses worldwide, 
                  known for delivering exceptional solutions that exceed expectations 
                  and set new industry standards. We envision a future where every 
                  business can leverage technology to achieve its full potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Decade of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small startup to a global technology partner, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented individuals passionate about technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow group">
                  <CardContent className="p-0 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <Separator className="mb-3" />
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Team Members' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
