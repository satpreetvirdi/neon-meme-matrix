
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, TrendingUp } from 'lucide-react';

interface TopMeme {
  id: string;
  title: string;
  upvotes: number;
  creator: string;
}

export const Leaderboard = () => {
  const [topMemes, setTopMemes] = useState<TopMeme[]>([
    { id: '1', title: 'Quantum Doge HODL', upvotes: 1337, creator: 'MemeLord_2077' },
    { id: '2', title: 'Matrix Pepe Enlightenment', upvotes: 2048, creator: 'Neo_Memer' },
    { id: '3', title: 'Cyberpunk Cat Overlord', upvotes: 3141, creator: 'CyberKitty' },
    { id: '4', title: 'AI Robot Dancing', upvotes: 1024, creator: 'RoboMemes' },
    { id: '5', title: 'Neon Dreams Stonks', upvotes: 777, creator: 'DreamTrader' },
  ]);

  const podiumColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze
  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (index === 1) return <Zap className="w-6 h-6 text-gray-300" />;
    if (index === 2) return <TrendingUp className="w-6 h-6 text-orange-400" />;
    return <span className="w-6 h-6 flex items-center justify-center text-cyan-400 font-bold">{index + 1}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card p-8 mb-12 holographic"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl neon-text-pink font-bold mb-2">NEURAL LEADERBOARD</h2>
        <p className="neon-text-green">Top Memes in the Metaverse</p>
      </div>

      <div className="space-y-4">
        {topMemes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-xl">Scanning the matrix for memes...</p>
            <div className="mt-4 flex justify-center">
              <div className="animate-pulse flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        ) : (
          topMemes.map((meme, index) => (
            <motion.div
              key={meme.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="leaderboard-item p-4 rounded-lg flex justify-between items-center group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getRankIcon(index)}
                </div>
                <div>
                  <h3 className="neon-text font-semibold group-hover:neon-text-pink transition-all duration-300">
                    {meme.title}
                  </h3>
                  <p className="text-gray-400 text-sm">by {meme.creator}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="neon-text-green text-xl font-bold">
                  {meme.upvotes.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">upvotes</div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <button className="cyber-button-pink rounded-lg">
          View Full Rankings
        </button>
      </motion.div>
    </motion.div>
  );
};
