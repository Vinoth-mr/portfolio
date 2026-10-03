import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Data Scientist',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0c121e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            06. Connect & Collaborate
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let's discuss how data science can drive your business forward.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Open for full-time opportunities, internships, research collaborations, and analytical consulting engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] text-slate-400 font-mono">PRIMARY EMAIL</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-teal-300 transition-colors block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 mt-1 cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedEmail ? 'Copied to clipboard' : 'Copy email address'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-teal-300 transition-colors block mt-0.5 font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Available during standard business hours</span>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">LOCATION & MOBILITY</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {personalInfo.location}
                    </div>
                    <span className="text-[11px] text-teal-300">Open to Bangalore, Chennai, Coimbatore, Hyderabad & Remote</span>
                  </div>
                </div>

                {/* LinkedIn item */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">PROFESSIONAL NETWORK</div>
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>linkedin.com/in/{personalInfo.linkedinHandle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Box (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Message or Role Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the quick form below or send a direct email. Responses typically within 24 hours.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding the <span className="text-teal-400">{formData.roleInterest}</span> role has been recorded.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`Inquiry from ${formData.name} - ${formData.roleInterest}`)}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 text-teal-300 text-xs rounded-lg hover:border-teal-500 transition-colors"
                    >
                      <span>Launch in Your Email Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleInterest: 'Data Scientist', message: '' });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Role / Discussion Focus
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="Data Scientist">Data Scientist Position</option>
                      <option value="Data Analyst">Data Analyst Position</option>
                      <option value="Business Analytics">Business Analytics Role</option>
                      <option value="Machine Learning">Machine Learning Role</option>
                      <option value="Project Collaboration">Research or Project Collaboration</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Vinoth, we came across your analytics portfolio and would love to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      * All fields handled with strict confidentiality.
                    </span>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg hover:bg-teal-300 transition-colors disabled:opacity-50 shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{sending ? 'Sending...' : 'Transmit Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
