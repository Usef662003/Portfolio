import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { EMAILJS_CONFIG } from '../../constants';

const initialForm = { name: '', email: '', message: '' };

/**
 * Contact form wired to EmailJS. Replace the placeholder IDs in
 * src/constants/index.js (EMAILJS_CONFIG) with real values from your
 * EmailJS dashboard for this to send live emails.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.07]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.07]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.07]"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={17} />
            Send Message
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-accent-light" role="status">
          <CheckCircle2 size={16} />
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
