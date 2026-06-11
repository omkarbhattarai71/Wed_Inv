import { COUPLE_INFO } from '../constants';
import '../styles/InvitationCard.css';

function InvitationCard({ guestInfo, onEdit }) {
  const getParentInfo = () => {
    return {
      groomParents: { mother: COUPLE_INFO.groom.mother, father: COUPLE_INFO.groom.father },
      brideParents: { mother: COUPLE_INFO.bride.mother, father: COUPLE_INFO.bride.father }
    };
  };

  const parents = getParentInfo();

  return (
    <div className="invitation-container">
      <div className="invitation-wrapper animate-fade-in">
        {/* Invitation Card */}
        <div className="invitation-card card">
          {/* Header Section with Couple Photo */}
          <div className="card-header">
            <div className="header-decorations">
              <div className="decoration-star top-left">✦</div>
              <div className="decoration-star top-right">✦</div>
              <div className="decoration-star bottom-left">✦</div>
              <div className="decoration-star bottom-right">✦</div>
            </div>


            <div className="header-content">
              <p className="header-subtitle">Together with our parents</p>
              <p className="header-text">Request the honor of your presence</p>
              <p className="header-text">at the marriage celebration</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="card-content">
            {/* Guest Name Section - AT TOP */}
            <div className="guest-section">
              <p className="guest-label">Dear</p>
              <h1 className="guest-name gradient-text">{guestInfo.name} <p className="guest-relation">({guestInfo.relation})</p></h1>
              <p className="guest-message">We are thrilled to invite you to share in the wedding celebration <br /> OF </p>
              <div className="section-divider"></div>
            </div>

            {/* Couple Information */}
            <div className="couple-section">
              {/* Groom */}
              <div className="person-info">
                <p className="person-label">THE GROOM</p>
                <p className="person-name">{COUPLE_INFO.groom.name}</p>
                <p className="person-parents">
                  Son of {COUPLE_INFO.groom.father} and {COUPLE_INFO.groom.mother}
                </p>
              </div>

              {/* Heart Divider */}
              <div className="heart-divider">❤️</div>

              {/* Bride */}
              <div className="person-info">
                <p className="person-label">THE BRIDE</p>
                <p className="person-name">{COUPLE_INFO.bride.name}</p>
                <p className="person-parents">
                  Daughter of {COUPLE_INFO.bride.father} and {COUPLE_INFO.bride.mother}
                </p>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="ornamental-divider">
              <div className="divider-line"></div>
              <span className="divider-icon">✦</span>
              <div className="divider-line"></div>
            </div>

            {/* Couple Photo */}
            <div className="couple-photo-container">
              <p className="photo-caption">The Groom and the Bride</p>
              <img src="/us.jpg" alt="Couple Photo" className="couple-photo" onError={(e) => e.target.src = '/us.jpeg'} />
            </div>
            {/* Decorative Divider */}
            <div className="ornamental-divider">
              <div className="divider-line"></div>
              <span className="divider-icon">✦</span>
              <div className="divider-line"></div>
            </div>

            {/* Date and Time Information */}
            <div className="event-details-section">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <div className="detail-content">
                  <p className="detail-label">DATE</p>
                  <p className="detail-value">{COUPLE_INFO.date}</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <div className="detail-content">
                  <p className="detail-label">TIME</p>
                  <p className="detail-value">{COUPLE_INFO.time}</p>
                </div>
              </div>
            </div>

            {/* Venue Information */}
            <div className="venue-section">
              <p className="venue-label">WEDDING VENUE</p>
              <p className="venue-name">{COUPLE_INFO.venue}</p>
              <p className="venue-region">{COUPLE_INFO.kommune}</p>
            </div>

            {/* Message Section - AT END */}
            <div className="message-section">
              <p className="message-main">Join us as we celebrate our love and commitment to each other</p>
              <p className="message-emphasis">We would be honored by your presence</p>
              <p className="message-closing">Your presence is a precious gift to us</p>
            </div>
          </div>

          {/* Footer Section */}
          <div className="card-footer">
            <p className="footer-text">Together in celebration of love 💕</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button onClick={onEdit} className="btn-secondary">
            <span>🔄</span>
            <span>Change Name & Relation</span>
          </button>
          <button onClick={() => window.print()} className="btn-primary">
            <span>🖨️</span>
            <span>Print Invitation</span>
          </button>
        </div>

        {/* Share Message */}
        <div className="share-section">
          <p className="share-text">✨ Share the joy with others! 🎉</p>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;
