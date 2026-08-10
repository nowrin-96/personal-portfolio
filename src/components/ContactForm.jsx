import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    // Simulate submission state (Privacy & Transparency rule compliant)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been prepared. Feel free to copy or connect directly via email.'
      });
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.message && (
        <div
          className={`p-4 rounded-xl text-xs font-mono flex items-start gap-2.5 ${
            status.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/10 border border-red-500/30 text-red-300'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Your Name
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="contact-name"
            type="text"
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#0D0D12] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Email Address
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="contact-email"
            type="email"
            placeholder="e.g. alex@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#0D0D12] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all"
          />
        </div>
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
          <textarea
            id="contact-message"
            rows="4"
            placeholder="What project or collaboration would you like to discuss?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#0D0D12] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/25 active:scale-95 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
      </button>

      <p className="text-[11px] text-zinc-500 font-mono text-center pt-2">
        Or write directly to <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 underline">{personalInfo.email}</a>
      </p>
    </form>
  );
};
