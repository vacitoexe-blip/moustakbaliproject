import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const IAPlus = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!user) {
      toast.error("Veuillez vous connecter d'abord.");
      navigate('/login');
      return;
    }
    
    // Redirect to payment page
    navigate('/payment-iaplus');
  };

  return (
    <div className="min-h-screen py-24 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-main/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10"
      >
        {/* Left Side: Features */}
        <div className="md:w-1/2 p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center">
          <div className="w-12 h-12 bg-green-main/20 rounded-2xl flex items-center justify-center mb-6 border border-green-main/30">
            <Sparkles className="text-green-bright" size={24} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-syne font-black text-white mb-4 leading-tight">
            Passez à la vitesse supérieure avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-main to-green-bright">IA Plus</span>
          </h2>
          <p className="text-text-muted mb-8 text-sm lg:text-base leading-relaxed">
            Profitez de toute la puissance de notre intelligence artificielle sans aucune limite. Conçu pour les investisseurs exigeants.
          </p>

          <ul className="space-y-4">
            {[
              "Requêtes illimitées (plus de limite des 5 questions)",
              "Modèle d'IA financier plus avancé et plus précis",
              "Temps de réponse prioritaire (ultra-rapide)",
              "Accès anticipé aux nouvelles fonctionnalités",
              "Analyse de graphiques et portefeuilles (Bientôt)"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-main/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-green-bright" />
                </div>
                <span className="text-white/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Pricing & CTA */}
        <div className="md:w-1/2 bg-white/[0.02] p-8 lg:p-12 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-widest mb-8">
            <Star size={12} />
            Le choix des pros
          </div>

          <div className="mb-2">
            <span className="text-5xl font-syne font-black text-white">100 DH</span>
            <span className="text-text-muted"> / mois</span>
          </div>
          <p className="text-sm text-white/40 mb-10">Facturé mensuellement. Annulable à tout moment.</p>

          {user?.plan === 'iaplus' ? (
            <div className="w-full bg-white/5 border border-white/10 text-white font-black py-4 rounded-xl uppercase tracking-widest flex items-center justify-center space-x-2">
              <Check size={18} className="text-green-main" />
              <span>Vous êtes déjà abonné</span>
            </div>
          ) : (
            <button 
              onClick={handleSubscribe}
              className="group relative w-full bg-gradient-to-r from-green-main via-green-bright to-green-main bg-[length:200%_auto] text-black font-black py-4 rounded-xl uppercase tracking-widest flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_40px_-10px_rgba(157,253,36,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 blur-md group-hover:translate-x-full -translate-x-full transition-transform duration-700 ease-out" />
              <Sparkles size={18} className="animate-pulse" />
              <span>Obtenir IA Plus</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
            <Zap size={12} />
            Activation instantanée
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IAPlus;
