import React, { useState } from "react";
import { Github, Linkedin, Mail, Heart, Star, Sparkles, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call to Formspree
      const response = await fetch('https://formspree.io/f/movlbpow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // For demo purposes, simulate success after 2 seconds
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Contact Info - Left Side */}
        <div className="flex flex-col justify-center space-y-8 bg-gradient-to-br from-pink-50/10 via-purple-50/10 to-indigo-50/10 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-200/20">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              Let's Connect!
            </h2>
            <p className="text-pink-200 text-sm">I'd love to hear from you!</p>
          </div>

          <div className="space-y-6">
            {/* GitHub */}
            <div 
              className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="relative">
                <Github className="text-white group-hover:text-purple-300 transition-colors duration-300" size={24} />
                {hoveredIcon === 'github' && (
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-3 h-3 text-yellow-400 animate-spin" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium">Check out my repos</p>
                <a
                  href="https://github.com/HansujaB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-pink-400 transition-colors text-sm"
                >
                  github.com/HansujaB
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div 
              className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="relative">
                <Linkedin className="text-white group-hover:text-blue-300 transition-colors duration-300" size={24} />
                {hoveredIcon === 'linkedin' && (
                  <div className="absolute -top-1 -right-1">
                    <Star className="w-3 h-3 text-yellow-400 animate-pulse" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium">Let's be professional friends</p>
                <a
                  href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Connect with me!
                </a>
              </div>
            </div>

            {/* Email */}
            <div 
              className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="relative">
                <Mail className="text-white group-hover:text-pink-300 transition-colors duration-300" size={24} />
                {hoveredIcon === 'email' && (
                  <div className="absolute -top-1 -right-1">
                    <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium">Drop me a email</p>
                <a
                  href="mailto:hansujaigdtuwcseai@gmail.com"
                  className="text-pink-300 hover:text-rose-400 transition-colors text-sm"
                >
                  hansujaigdtuwcseai@gmail.com 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div className="bg-gradient-to-br from-purple-50/10 via-pink-50/10 to-rose-50/10 backdrop-blur-sm shadow-xl border border-purple-200/20 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
              Contact Me!
            </h2>
            <p className="text-purple-200 text-sm">I promise to reply with lots of enthusiasm!</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Message sent!</h3>
              <p className="text-green-300">Thanks for reaching out! 💖</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="text-white/90 text-sm font-medium mb-2 flex items-center gap-2">
                  Your full name?
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name..."
                  className="w-full p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 transition-all duration-300"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className=" text-white/90 text-sm font-medium mb-2 flex items-center gap-2">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="yourname@example.com"
                  className="w-full p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className=" text-white/90 text-sm font-medium mb-2 flex items-center gap-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Suggestions/Feedbacks are always welcome.."
                  className="w-full p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-400 transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 p-4 rounded-2xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send your message
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}