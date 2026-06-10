import { useState } from 'react';
import { RELATIONS } from '../constants';
import '../styles/EntryForm.css';

function EntryForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!relation) {
      setError('Please select your relation');
      return;
    }

    onSubmit(name.trim(), relation);
  };

  return (
    <div className="entry-form-container">
      {/* Decorative Background Elements */}
      <div className="decoration decoration-top-left"></div>
      <div className="decoration decoration-bottom-right"></div>

      <div className="entry-form-wrapper animate-fade-in">
        {/* Header Section */}
        <div className="form-header">
          <h1 className="gradient-text form-title">You're Invited!</h1>
          <p className="form-subtitle">Join us for a celebration of love & commitment</p>
          <div className="header-divider"></div>
        </div>

        {/* Form Card */}
        <div className="form-card card">
          <form onSubmit={handleSubmit} className="form-content">
            {/* Name Input Group */}
            <div className="form-group">
              <label className="form-label">
                Your Full Name
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Enter your full name"
                  className={`form-input ${focused === 'name' ? 'focused' : ''}`}
                />
              </div>
              <p className="input-hint">How should we address you?</p>
            </div>

            {/* Relation Select Group */}
            <div className="form-group">
              <label className="form-label">
                Your Relation
                <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <span className="select-icon">💑</span>
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  onFocus={() => setFocused('relation')}
                  onBlur={() => setFocused(null)}
                  className={`form-select ${focused === 'relation' ? 'focused' : ''}`}
                >
                  <option value="">-- Select your relation --</option>
                  {RELATIONS.map((rel) => (
                    <option key={rel} value={rel}>
                      {rel}
                    </option>
                  ))}
                </select>
              </div>
              <p className="input-hint">How are you connected to us?</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="error-alert animate-fade-in">
                <span className="error-icon">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn-primary submit-button">
              <span>View My Invitation</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          {/* Form Footer */}
          <p className="form-footer">
            ✨ This invitation is personalized just for you
          </p>
        </div>

        {/* Bottom Emoji */}
        <div className="emoji-decoration animate-float">💍</div>
      </div>
    </div>
  );
}

export default EntryForm;
