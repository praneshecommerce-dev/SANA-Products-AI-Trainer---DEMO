import React, { useState, useEffect } from 'react';
import { getGeminiKey, setGeminiKey } from '../services/geminiService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [key, setKey] = useState('');

  useEffect(() => {
    if (isOpen) {
      setKey(getGeminiKey());
    }
  }, [isOpen]);

  const handleSave = () => {
    setGeminiKey(key);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in-up">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Application Settings</h3>
        <p className="text-sm text-slate-500 mb-4">
          To enable AI features, please provide a Google Gemini API Key. This key is stored locally in your browser.
        </p>
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Gemini API Key</label>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sana-500 focus:border-sana-500 outline-none"
            placeholder="AIzaSy..."
          />
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-xs text-sana-600 hover:underline mt-1 block">
            Get an API key here
          </a>
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-sana-600 text-white rounded-lg hover:bg-sana-700">Save Key</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;