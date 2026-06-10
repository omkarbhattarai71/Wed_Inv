# 💍 Wedding Invitation Web App

A beautiful, responsive React wedding invitation application for Omkar Bhattarai & Samiksha Karki's wedding celebration in Farum, Denmark.

## 🎉 Features

✨ **Beautiful Responsive Design**
- Elegant invitation card with gold and burgundy color scheme
- Fully responsive layout that works seamlessly on mobile and desktop
- Smooth animations and transitions
- Professional typography with Poppins font

📝 **Personalized Invitations**
- Guests enter their name and relationship
- Invitation card displays personalized greeting
- Supports 20+ relationship types (Brother, Sister, Mother, Father, Friend, Sister-in-Law, Brother-in-Law, etc.)

🖨️ **Print & Share**
- Print-optimized invitation layout
- Easy sharing of personalized links
- Social-friendly design

📱 **Mobile-First Approach**
- Optimized for all screen sizes
- Touch-friendly form inputs
- Mobile-appropriate typography and spacing

## 🏠 Wedding Details

**Couple:**
- Groom: Omkar Bhattarai (Son of Narishwor Jaisi and Radika Jaisi)
- Bride: Samiksha Karki (Daughter of Ram Bahadur Karki and Sita Devi Karki)

**Venue:**
- Location: Farum, Denmark
- Kommune: Fureso Kommune

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + @tailwindcss/postcss
- **Fonts:** Google Fonts (Poppins)
- **PostCSS:** For CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd "Wed Invitation"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Wed Invitation/
├── src/
│   ├── components/
│   │   ├── EntryForm.jsx        # Guest name & relation input form
│   │   └── InvitationCard.jsx   # Beautiful invitation display
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── index.css                # Global styles with Tailwind
│   ├── constants.js             # Couple info and relation list
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── vite.config.js               # Vite configuration
```

## 🎨 Supported Relations

The app supports the following relationship types:
- Brother, Sister
- Mother, Father
- Friend, Colleague
- Sister-in-Law, Brother-in-Law
- Uncle, Aunt
- Cousin
- Grandfather, Grandmother
- Nephew, Niece
- Son, Daughter
- Mentor
- Neighbor
- Other

## 🌐 Deployment

This app can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Deploy the `dist` folder

### Traditional Hosting
- Build the project: `npm run build`
- Upload the contents of the `dist` folder to your web server

## 💡 Usage

1. **Open the App:** Visit the deployed link or access `http://localhost:5173` locally
2. **Enter Details:** 
   - Enter your full name
   - Select your relationship to the couple from the dropdown
3. **View Invitation:** Click "View My Invitation" to see your personalized card
4. **Print:** Click "Print Invitation" to print or save as PDF
5. **Share:** Share the link with others to create their personalized invitations

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Customization

To customize the invitation for a different couple:

1. Edit `src/constants.js`:
```javascript
export const COUPLE_INFO = {
  groom: {
    name: 'Your Groom Name',
    mother: 'Groom Mother Name',
    father: 'Groom Father Name'
  },
  bride: {
    name: 'Your Bride Name',
    mother: 'Bride Mother Name',
    father: 'Bride Father Name'
  },
  venue: 'Venue, Country',
  kommune: 'Region/Municipality'
};
```

2. Update color scheme in `tailwind.config.js`:
```javascript
colors: {
  gold: '#D4AF37',        // Change to your primary color
  burgundy: '#800020',    // Change to your secondary color
  cream: '#FFF8F0',       // Change to your background color
}
```

## 💻 Development Workflow

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Style

The project uses:
- React Hooks for state management
- Functional components
- Tailwind CSS for styling
- Responsive design patterns

## 🎁 Future Enhancements

- [ ] Guest RSVP system with backend
- [ ] Multiple language support
- [ ] Photo gallery section
- [ ] Wedding schedule/timeline
- [ ] Gift registry integration
- [ ] Email invitation sending
- [ ] Analytics dashboard
- [ ] Admin panel for RSVPs

## 📄 License

This project is open source and available under the MIT License.

## 💌 Credits

Designed and built with ❤️ for Omkar & Samiksha's wedding celebration.

---

**Made with React + Vite + Tailwind CSS**

For questions or support, please contact the development team.
