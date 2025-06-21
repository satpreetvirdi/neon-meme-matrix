
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, ArrowDown, Coins, Sparkles, Eye } from 'lucide-react';

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

interface MemeCardProps {
  meme: Meme;
}

export const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const [bidCredits, setBidCredits] = useState('');
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(meme.upvotes);

  const handleVote = (type: 'up' | 'down') => {
    // Simulate vote with optimistic update
    if (type === 'up' && voted !== 'up') {
      setCurrentUpvotes(prev => prev + (voted === 'down' ? 2 : 1));
      setVoted('up');
    } else if (type === 'down' && voted !== 'down') {
      setCurrentUpvotes(prev => prev - (voted === 'up' ? 2 : 1));
      setVoted('down');
    }
    
    // Play sound effect (you can replace with actual audio)
    console.log('🔊 Cyber vote sound effect');
  };

  const handleBid = () => {
    if (bidCredits && Number(bidCredits) > 0) {
      console.log(`Bidding ${bidCredits} credits on meme ${meme.id}`);
      setBidCredits('');
      // Play sound effect
      console.log('🔊 Cyber bid sound effect');
    }
  };

  const handleGenerateCaption = () => {
    console.log(`Regenerating caption for meme ${meme.id}`);
    // Play sound effect
    console.log('🔊 AI processing sound effect');
  };

  return (
    <motion.div
      className="meme-card glass-card p-6 h-full flex flex-col relative overflow-hidden group"
      whileHover={{ 
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
        scale: 1.02 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <motion.img
          src={meme.image_url}
          alt={meme.title}
          className="meme-image w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* View overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <Eye className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {meme.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-black/70 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title and Info */}
      <div className="flex-grow">
        <h3 className="text-xl neon-text font-bold mb-2 group-hover:neon-text-pink transition-all duration-300">
          {meme.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {meme.caption}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-purple-400 font-mono text-sm">
            Vibe: {meme.vibe}
          </span>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="neon-text-green font-bold">{currentUpvotes.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Voting Buttons */}
      <div className="flex space-x-2 mb-4">
        <motion.button
          onClick={() => handleVote('up')}
          className={`flex-1 cyber-button rounded-lg flex items-center justify-center space-x-2 ${
            voted === 'up' ? 'bg-green-500/20 border-green-400' :  ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-4 h-4" />
          <span>UP</span>
        </motion.button>
        
        <motion.button
          onClick={() => handleVote('down')}
          className={`flex-1 cyber-button-pink rounded-lg flex items-center justify-center space-x-2 ${
            voted === 'down' ? 'bg-red-500/20 border-red-400' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="w-4 h-4" />
          <span>DOWN</span>
        </motion.button>
      </div>

      {/* Bidding Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Highest Bid:</span>
          <span className="neon-text-green font-bold">
            {meme.highestBid?.toLocaleString() || 0} credits
          </span>
        </div>
        
        {meme.highestBidder && (
          <p className="text-gray-400 text-xs mb-2">by {meme.highestBidder}</p>
        )}
        
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Bid amount"
            value={bidCredits}
            onChange={(e) => setBidCredits(e.target.value)}
            className="cyber-input flex-1 px-3 py-2 rounded-lg text-sm"
          />
          <motion.button
            onClick={handleBid}
            className="cyber-button rounded-lg px-4 flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Coins className="w-4 h-4" />
            <span>BID</span>
          </motion.button>
        </div>
      </div>

      {/* Generate Caption Button */}
      <motion.button
        onClick={handleGenerateCaption}
        className="w-full cyber-button-pink rounded-lg flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Sparkles className="w-4 h-4" />
        <span>AI ENHANCE</span>
      </motion.button>
    </motion.div>
  );
};
