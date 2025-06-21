
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import { Leaderboard } from './Leaderboard';
import { MemeCard } from './MemeCard';
import { CreateMemeForm } from './CreateMemeForm';
import { ParticleEffect } from './ParticleEffect';
import '../styles/cyberpunk.css';

interface Meme {
  id: string;
  title: string;
  image_url: string;
  tags: string[];
  upvotes: number;
  caption: string;
  vibe: string;
  highestBid?: number;
  highestBidder?: string;
}

const MemeMarketplace = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize terminal typing effect
    const typed = new Typed('#terminal-text', {
      strings: [
        'Initializing Quantum Meme Protocols...',
        'Hacking the Blockchain Matrix...',
        'Uploading Consciousness to Cyberspace...',
        'Neural Network Meme Analysis Complete.',
        'Welcome to the Future of Memes.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    // Simulate loading memes
    setTimeout(() => {
      setMemes([
        {
          id: '1',
          title: 'Quantum Doge HODL',
          image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
          tags: ['crypto', 'doge', 'quantum'],
          upvotes: 1337,
          caption: 'Much quantum, very HODL, wow!',
          vibe: 'Bullish AF',
          highestBid: 420,
          highestBidder: 'Neo_Trader'
        },
        {
          id: '2',
          title: 'Matrix Pepe Enlightenment',
          image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
          tags: ['pepe', 'matrix', 'philosophy'],
          upvotes: 2048,
          caption: 'There is no spoon, only green candles',
          vibe: 'Zen Master',
          highestBid: 888,
          highestBidder: 'Morpheus_Memer'
        },
        {
          id: '3',
          title: 'Cyberpunk Cat Overlord',
          image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
          tags: ['cat', 'cyberpunk', 'ai'],
          upvotes: 3141,
          caption: 'Resistance is futile. Purr.',
          vibe: 'Dystopian Cute',
          highestBid: 1337,
          highestBidder: 'CyberKitty'
        }
      ]);
      setLoading(false);
    }, 2000);

    return () => typed.destroy();
  }, []);

  return (
    <div className="matrix-bg min-h-screen relative overflow-hidden">
      <ParticleEffect />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold neon-text mb-4 glitch">
            MEME<span className="neon-text-pink">VERSE</span>
          </h1>
          <p className="text-xl neon-text-green font-mono">
            The Ultimate Cyberpunk Meme Trading Platform
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="terminal mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-400 ml-4">meme_terminal.exe</span>
          </div>
          <div id="terminal-text" className="text-lg min-h-[2rem]"></div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Leaderboard />
        </motion.div>

        {/* Create Meme Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <CreateMemeForm onMemeCreated={(newMeme) => setMemes([...memes, newMeme])} />
        </motion.div>

        {/* Memes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-4xl neon-text text-center mb-8">Neural Meme Network</h2>
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {memes.map((meme, index) => (
                  <motion.div
                    key={meme.id}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      bounce: 0.4 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MemeCard meme={meme} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MemeMarketplace;
