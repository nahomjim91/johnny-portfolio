// README.md content
# Johnny Video Production - Luxury Wedding Videography Portfolio

A modern, responsive portfolio website for luxury wedding videography built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, luxury aesthetic inspired by high-end wedding photography
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized images, lazy loading, and fast page loads
- **SEO Friendly**: Built-in SEO optimization with metadata and structured data
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Gallery System**: Advanced gallery with filtering and lightbox functionality
- **Story Pages**: Dynamic individual wedding story pages
- **Contact Form**: Integration-ready contact form

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Components**: shadcn/ui

## 📁 Project Structure

```
johnny-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── gallery/           # Gallery page
│   └── stories/[slug]/    # Dynamic story pages
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Home page sections
│   ├── gallery/           # Gallery components
│   ├── story/             # Story page components
│   ├── shared/            # Reusable components
│   └── ui/                # Base UI components
├── lib/
│   ├── data/              # Content and data
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── constants/         # App constants
└── public/                # Static assets
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/johnny-portfolio.git
cd johnny-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding New Weddings

1. Add wedding data to `lib/data/weddings.ts`
2. Add corresponding gallery images to `lib/data/gallery.ts`
3. Update testimonials in `lib/data/testimonials.ts`

### Customizing Content

- Update site content in `lib/constants/content.ts`
- Modify navigation in `lib/constants/navigation.ts`
- Adjust colors and fonts in `tailwind.config.js`

## 🎨 Design System

### Typography
- **Primary**: Playfair Display (headings)
- **Body**: Inter (content)
- **Accent**: Cormorant Garamond (details)

### Colors
- **Primary**: #0A0A0A (Rich Black)
- **Secondary**: #F8F7F4 (Warm White)
- **Accent**: #D4AF37 (Luxury Gold)
- **Neutral**: #6B7280 (Soft Gray)
- **Background**: #FEFEFE (Pure White)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📱 Pages Overview

### Home Page
- Hero section with video background
- About section with personal story
- Featured work showcase
- Statistics display
- Client testimonials
- Contact section

### Gallery Page
- Filterable image grid
- Lightbox functionality
- Load more pagination
- Category filtering

### Story Pages
- Individual wedding stories
- Image galleries by category
- Video integration
- Navigation between stories

## 🔧 Customization

### Adding New Pages
1. Create page in `app/` directory
2. Add navigation link in constants
3. Update sitemap and robots.txt

### Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for custom styles
- Use CSS variables for consistent theming

## 📊 Performance

- Optimized images with next/image
- Lazy loading for better performance
- Minimal JavaScript bundle
- Fast page transitions
- SEO optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For support, email selihom2001@gmail.com or create an issue on GitHub.