import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { CheckIcon, XIcon } from '../components/ui/Icons';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and startups',
    price: { monthly: 499, yearly: 479 },
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Basic SEO optimization', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'Social media links', included: true },
      { name: 'Email support', included: true },
      { name: 'Custom animations', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'CMS integration', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: { monthly: 999, yearly: 949 },
    features: [
      { name: 'Up to 15 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Email & chat support', included: true },
      { name: 'Custom animations', included: true },
      { name: 'E-commerce functionality', included: true },
      { name: 'CMS integration', included: true },
      { name: 'Priority support', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    price: { monthly: 2499, yearly: 2399 },
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Advanced SEO & analytics', included: true },
      { name: 'Custom form integration', included: true },
      { name: 'Full social integration', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Advanced animations', included: true },
      { name: 'Full e-commerce suite', included: true },
      { name: 'Custom CMS & APIs', included: true },
      { name: 'Priority support', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const services = [
  { name: 'Web Development', starting: '$2,999', description: 'Custom websites and web applications' },
  { name: 'Mobile Development', starting: '$4,999', description: 'iOS and Android applications' },
  { name: 'Cloud Solutions', starting: '$3,499', description: 'Cloud migration and infrastructure' },
  { name: 'UI/UX Design', starting: '$2,499', description: 'User interface and experience design' },
  { name: 'AI/ML Solutions', starting: '$5,999', description: 'Machine learning and AI integration' },
  { name: 'Technical Consulting', starting: '$199/hr', description: 'Expert technology guidance' },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A standard website typically takes 4-8 weeks, while complex web applications can take 3-6 months.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes! We offer maintenance packages starting at $199/month that include security updates, backups, and minor changes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and PayPal. For larger projects, we offer milestone-based payment plans.',
  },
  {
    question: 'Can I make changes to my website after launch?',
    answer: 'Absolutely! We provide a user-friendly CMS for content changes. For larger modifications, we offer hourly development services.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We work hard to ensure client satisfaction. Refunds are available on a case-by-case basis for unused services.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure.',
  },
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = React.useState(false);

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
            <Badge variant="outline" className="mb-6">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple,{' '}
              <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the perfect plan for your needs. All plans include a free consultation 
              and no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2">Save 10%</Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
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
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <span className="text-4xl font-bold gradient-text">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.name}
                          </span>
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

      {/* Custom Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Custom Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Something Unique?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For custom projects and enterprise solutions, we offer tailored pricing based on your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold gradient-text">{service.starting}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-semibold text-gray-900">Features</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">Starter</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">Professional</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Number of pages', 'Up to 5', 'Up to 15', 'Unlimited'],
                  ['Responsive design', '✓', '✓', '✓'],
                  ['SEO optimization', 'Basic', 'Advanced', 'Advanced + Analytics'],
                  ['E-commerce', '✗', '✓', '✓'],
                  ['CMS integration', '✗', '✓', '✓'],
                  ['Custom development', '✗', '✓', '✓'],
                  ['Support', 'Email', 'Email & Chat', '24/7 Dedicated'],
                  ['SLA', '✗', '99.5%', '99.9%'],
                ].map(([feature, starter, pro, enterprise], index) => (
                  <tr key={feature} className="border-b">
                    <td className="py-4 px-6 text-gray-700">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={starter === '✓' ? 'text-green-600' : starter === '✗' ? 'text-gray-400' : 'text-gray-900'}>
                        {starter}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={pro === '✓' ? 'text-green-600' : pro === '✗' ? 'text-gray-400' : 'text-gray-900'}>
                        {pro}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={enterprise === '✓' ? 'text-green-600' : enterprise === '✗' ? 'text-gray-400' : 'text-gray-900'}>
                        {enterprise}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Talk to Sales
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
