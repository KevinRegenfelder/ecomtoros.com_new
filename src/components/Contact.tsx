import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  User,
  Building,
  Hash,
  FileText,
  Rocket,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    telegram: '',
    subject: '',
    projectName: '',
    projectStage: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.telegram.trim()) {
      newErrors.telegram = 'Telegram username is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }

    if (!formData.projectStage.trim()) {
      newErrors.projectStage = 'Project stage is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus('loading');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('telegram', formData.telegram);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('projectName', formData.projectName);
      formDataToSend.append('projectStage', formData.projectStage);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', telegram: '', subject: '', projectName: '', projectStage: '', message: '' });
        // Show success message for 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    // Reset to idle after 3 seconds
    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'mail@eomtoros.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Message Us',
      value: '@ecomtoros',
      description: 'Send us a message on Telegram'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.2) 25%, transparent 50%)`
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-secondary-800/20"></div>
        <div 
          className="absolute inset-0 bg-grid-pattern animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to start your Web3 journey? Let's discuss how we can help you build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative">
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                    <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-primary-400 font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                    <p className="text-secondary-400 text-xs sm:text-sm">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-primary-500/30 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-secondary-300 text-xs sm:text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                  <span>24/7 Support Available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                  <span>Free Initial Consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                  <span>Industry Experts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* Visible React form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                action="/success.html"
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
              >
                {/* Hidden input für Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base ${
                          errors.name ? 'border-red-500' : 'border-secondary-600'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base ${
                          errors.email ? 'border-red-500' : 'border-secondary-600'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Telegram Field */}
                  <div>
                    <label htmlFor="telegram" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      Telegram Username *
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="telegram"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base ${
                          errors.telegram ? 'border-red-500' : 'border-secondary-600'
                        }`}
                        placeholder="@johnexample"
                      />
                    </div>
                    {errors.telegram && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.telegram}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base ${
                          errors.subject ? 'border-red-500' : 'border-secondary-600'
                        }`}
                        placeholder="How can we help?"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Project Name Field */}
                  <div>
                    <label htmlFor="projectName" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      What is your project's name? *
                    </label>
                    <div className="relative">
                      <Rocket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base ${
                          errors.projectName ? 'border-red-500' : 'border-secondary-600'
                        }`}
                        placeholder="OneKey, Tangem,..."
                      />
                    </div>
                    {errors.projectName && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.projectName}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Stage Field */}
                  <div>
                    <label htmlFor="projectStage" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                      What is your project's current stage? *
                    </label>
                    <div className="relative">
                      <Rocket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                      <select
                        id="projectStage"
                        name="projectStage"
                        value={formData.projectStage}
                        onChange={handleChange}
                        className={`w-full pl-10 sm:pl-12 pr-12 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white text-sm sm:text-base appearance-none ${
                          errors.projectStage ? 'border-red-500' : 'border-secondary-600'
                        }`}
                      >
                        <option value="" className="bg-secondary-800">Select project stage...</option>
                        <option value="idea" className="bg-secondary-800">Idea/Concept</option>
                        <option value="development" className="bg-secondary-800">In Development</option>
                        <option value="testing" className="bg-secondary-800">Testing Phase</option>
                        <option value="launch" className="bg-secondary-800">Ready for Launch</option>
                        <option value="live" className="bg-secondary-800">Live/Active</option>
                        <option value="scaling" className="bg-secondary-800">Scaling Phase</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400 pointer-events-none" />
                    </div>
                    {errors.projectStage && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{errors.projectStage}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 text-sm sm:text-base"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-secondary-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-secondary-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 resize-none text-sm sm:text-base ${
                        errors.message ? 'border-red-500' : 'border-secondary-600'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-800 text-sm sm:text-base ${
                    formStatus === 'loading'
                      ? 'bg-secondary-600 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 hover:shadow-lg hover:shadow-primary-500/25'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>We'll review your project!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;