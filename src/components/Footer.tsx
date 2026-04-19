import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@designer.com' },
];

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's create something amazing together
            </h3>
            <p className="text-lg text-neutral-400 mb-8">
              Available for freelance projects, full-time opportunities, and collaborations.
            </p>
            <a
              href="mailto:hello@designer.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-colors group"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-start md:justify-end"
          >
            <div className="space-y-4">
              <p className="text-sm text-neutral-500 mb-6">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-500 text-sm">
            © 2026 Portfolio. Designed with passion.
          </p>
          <div className="flex gap-8 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
