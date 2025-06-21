
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Zap, Image } from 'lucide-react';

interface Meme {
  id: string;
  title: string;
  image_url: string;
  tags: string[];
  upvotes: number;
  caption: string;
  vibe: string;
}

interface CreateMemeFormProps {
  onMemeCreated: (meme: Meme) => void;
}

export const CreateMemeForm: React.FC<CreateMemeFormProps> = ({ onMemeCreated }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newMeme: Meme = {
        id: Date.now().toString(),
        title: title || 'Untitled Meme',
        image_url: imageUrl || 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
        upvotes: 0,
        caption: 'AI-generated caption loading...',
        vibe: 'Fresh Upload'
      };

      onMemeCreated(newMeme);
      setTitle('');
      setImageUrl('');
      setTags('');
      setIsSubmitting(false);
      
      console.log('🔊 Meme upload success sound');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card p-8 mb-12 holographic"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl neon-text font-bold mb-2">
          CREATE <span className="neon-text-pink">NEURAL</span> MEME
        </h2>
        <p className="neon-text-green">Upload your consciousness to the meme matrix</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block neon-text-pink text-sm font-semibold mb-2">
              Meme Title
            </label>
            <input
              type="text"
              placeholder="e.g., Quantum Doge HODL"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="cyber-input w-full px-4 py-3 rounded-lg"
              required
            />
          </motion.div>

          {/* Tags Input */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block neon-text-pink text-sm font-semibold mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              placeholder="crypto, funny, ai, cyberpunk"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="cyber-input w-full px-4 py-3 rounded-lg"
            />
          </motion.div>
        </div>

        {/* Image URL Input */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block neon-text-pink text-sm font-semibold mb-2">
            Image URL (optional)
          </label>
          <div className="relative">
            <input
              type="url"
              placeholder="https://example.com/meme.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="cyber-input w-full px-4 py-3 pl-12 rounded-lg"
            />
            <Image className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Leave empty for AI-generated placeholder
          </p>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="cyber-button-pink px-12 py-4 rounded-lg text-lg font-bold flex items-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pink-400"></div>
                <span>UPLOADING TO MATRIX...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>DEPLOY TO CYBERSPACE</span>
                <Zap className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* AI Enhancement Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-cyan-400/20"
        >
          <div className="text-center p-4 glass-card rounded-lg">
            <Sparkles className="w-8 h-8 neon-text-green mx-auto mb-2" />
            <h4 className="neon-text text-sm font-semibold">AI Caption</h4>
            <p className="text-gray-400 text-xs">Auto-generated humor</p>
          </div>
          
          <div className="text-center p-4 glass-card rounded-lg">
            <Zap className="w-8 h-8 neon-text-pink mx-auto mb-2" />
            <h4 className="neon-text text-sm font-semibold">Vibe Analysis</h4>
            <p className="text-gray-400 text-xs">Neural mood detection</p>
          </div>
          
          <div className="text-center p-4 glass-card rounded-lg">
            <Upload className="w-8 h-8 neon-text mx-auto mb-2" />
            <h4 className="neon-text text-sm font-semibold">Quantum Upload</h4>
            <p className="text-gray-400 text-xs">Instant blockchain mint</p>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};
