# Noman Portfolio

A modern portfolio website built with Next.js 15 and Tailwind CSS.

## Features

- ✅ Next.js 15 App Router
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Portfolio showcase
- ✅ Project case studies
- ✅ Contact section
- ✅ Dynamic routing for projects
- ✅ API integration

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

The portfolio will be available at `/portfolio` route.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Project Structure

```
noman-portfolio/
├── app/
│   ├── portfolio/
│   │   ├── page.jsx           # Main portfolio page
│   │   ├── layout.jsx         # Portfolio layout
│   │   └── project/
│   │       └── [name]/
│   │           └── page.jsx   # Dynamic project pages
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Portfolio/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Project.jsx
│   │   ├── Contact.jsx
│   │   ├── PortFolioHead.jsx
│   │   ├── PortfolioFooter.jsx
│   │   ├── Chat.jsx
│   │   ├── CaseStudyHEad.jsx
│   │   └── ProjectCard.jsx
│   └── RichTextComponent.jsx
├── lib/
│   └── constants.js           # API constants
└── public/
    └── assest/                # Static assets

```

## API Configuration

The API URL is configured in `lib/constants.js`:

```javascript
export const API__URL = "https://noman99.pythonanywhere.com/";
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Icons** - Icon library

## Author

Md Noman Hossain - Frontend Developer

## License

ISC
