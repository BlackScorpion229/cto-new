import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/Dialog';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for an experienced Full-Stack Developer to join our team and work on cutting-edge web applications.',
    requirements: [
      '5+ years of experience in web development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving skills',
      'Strong communication skills',
    ],
    responsibilities: [
      'Design and implement scalable web applications',
      'Lead technical discussions and code reviews',
      'Mentor junior developers',
      'Collaborate with product and design teams',
      'Contribute to technical architecture decisions',
    ],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our design team to create beautiful and intuitive user experiences for our clients.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and other design tools',
      'Strong portfolio demonstrating design skills',
      'Experience with design systems',
      'Understanding of user research methods',
    ],
    responsibilities: [
      'Create intuitive user interfaces',
      'Conduct user research and usability testing',
      'Collaborate with developers for implementation',
      'Maintain design systems and components',
      'Present design concepts to stakeholders',
    ],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Help us build and maintain scalable infrastructure for our growing platform.',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of Docker and Kubernetes',
      'Experience with CI/CD pipelines',
      'Knowledge of infrastructure as code (Terraform)',
      'Experience with monitoring and logging tools',
    ],
    responsibilities: [
      'Manage cloud infrastructure on AWS',
      'Implement and maintain CI/CD pipelines',
      'Ensure system reliability and performance',
      'Automate deployment and infrastructure processes',
      'Implement security best practices',
    ],
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead product strategy and execution for our key products.',
    requirements: [
      '5+ years of product management experience',
      'Strong analytical and communication skills',
      'Experience with agile methodologies',
      'Track record of launching successful products',
      'Technical background preferred',
    ],
    responsibilities: [
      'Define product vision and strategy',
      'Work closely with engineering and design',
      'Analyze metrics and iterate on product',
      'Conduct user interviews and research',
      'Prioritize features and roadmap',
    ],
  },
  {
    id: 5,
    title: 'Mobile Developer (React Native)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build cross-platform mobile applications that millions of people use.',
    requirements: [
      '3+ years of mobile development experience',
      'Strong React Native proficiency',
      'Experience with iOS and Android development',
      'Knowledge of mobile app architecture',
      'Published apps in app stores',
    ],
    responsibilities: [
      'Develop high-quality mobile applications',
      'Optimize app performance',
      'Collaborate with design team',
      'Implement new features and updates',
      'Mentor junior mobile developers',
    ],
  },
  {
    id: 6,
    title: 'Data Scientist',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Apply machine learning to solve complex business problems.',
    requirements: [
      '3+ years of data science experience',
      'Strong Python and ML library skills',
      'Experience with deep learning frameworks',
      'Strong statistical background',
      'Experience with cloud ML platforms',
    ],
    responsibilities: [
      'Develop ML models for various use cases',
      'Analyze and interpret complex data',
      'Deploy models to production',
      'Collaborate with engineering teams',
      'Present insights to stakeholders',
    ],
  },
];

const benefits = [
  { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
  { icon: '🏖️', title: 'Unlimited PTO', description: 'Take time off when you need it' },
  { icon: '🏋️', title: 'Wellness Benefits', description: '$1,000 annual wellness budget' },
  { icon: '📚', title: 'Learning Budget', description: '$2,000 for courses and conferences' },
  { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere in the world' },
  { icon: '👶', title: 'Parental Leave', description: 'Generous paid parental leave' },
  { icon: '💻', title: 'Latest Tech', description: 'MacBook Pro and accessories provided' },
];

const cultureValues = [
  {
    title: 'Innovation First',
    description: 'We encourage creative thinking and experimentation. Every voice matters.',
    icon: '💡',
  },
  {
    title: 'Growth Mindset',
    description: 'Continuous learning is part of our DNA. We support your development journey.',
    icon: '📈',
  },
  {
    title: 'Work-Life Balance',
    description: 'We believe in sustainable productivity, not burnout culture.',
    icon: '⚖️',
  },
  {
    title: 'Collaboration',
    description: 'Great things happen when talented people work together.',
    icon: '🤝',
  },
];

const stats = [
  { value: '4.9', label: 'Glassdoor Rating' },
  { value: '95%', label: 'Employee Retention' },
  { value: '4.2', label: 'Avg. Tenure (years)' },
  { value: '100%', label: 'Remote-First' },
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

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
            <Badge variant="outline" className="mb-6">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build Your Future at{' '}
              <span className="gradient-text">NexGen</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join a team of passionate innovators and help shape the future of technology. 
              We offer competitive benefits, remote-first culture, and endless growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings">
                <Button size="lg" className="text-lg px-8 py-3">
                  View Open Positions
                </Button>
              </a>
              <a href="#culture">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Learn About Our Culture
                </Button>
              </a>
            </div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              perks & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people because they're our greatest asset.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Culture</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Values That Drive Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex gap-4">
                    <div className="text-4xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and be part of something amazing.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                          <Badge variant="outline">{job.experience}</Badge>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button onClick={() => setSelectedJob(job)}>View Details</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{job.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">{job.department}</Badge>
                                <Badge variant="outline">{job.location}</Badge>
                                <Badge variant="outline">{job.type}</Badge>
                                <Badge variant="outline">{job.experience}</Badge>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3">Requirements</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                                      <span className="text-gray-600">{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3">Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                                      <span className="text-gray-600">{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <Button className="w-full">Apply Now</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application and resume' },
              { step: '02', title: 'Review', description: 'Our team reviews your profile' },
              { step: '03', title: 'Interview', description: 'Phone screen + technical interview' },
              { step: '04', title: 'Offer', description: 'Welcome to the team!' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Submit Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
