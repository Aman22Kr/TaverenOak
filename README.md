# TaverenOak — Luxury Heritage Hotel & Living Museum

> **Live Preview & Production Deployment Ready for GitHub Pages**  
> GitHub Repository Owner: **Aman22kr**  
> Brand Identity: **TaverenOak**  
> Reference Inspiration: [The Imperial New Delhi](https://www.theimperialindia.com/)

---

## 1. Overview
**TaverenOak** is a responsive, multi-page web application replicating the grandeur, architecture, and luxury guest experience of New Delhi's premier heritage hotel (The Imperial). 

Erected in 1936 under the architectural guidance of Blomfield and Sir Edwin Lutyens, TaverenOak features colonial verandahs, twenty-four royal king palm trees, four thousand museum-grade lithographs and aquatints, six award-winning culinary sanctuaries, and a 16,000 sq. ft. holistic Ayurvedic spa.

---

## 2. Brand Identity & Reference Mapping
| Reference Aspect | Original (*The Imperial New Delhi*) | Recreated Brand (*TaverenOak*) |
|---|---|---|
| **Hotel Name** | The Imperial New Delhi | **TaverenOak** |
| **Founding Era** | 1911 Delhi Durbar / 1936 Inauguration | **1936 Heritage Living Museum** |
| **All-Day Dining** | 1911 Restaurant & Verandah | **1911 Restaurant & Verandah** |
| **Pan-Asian Fine Dining** | The Spice Route | **The Spice Route** (Southeast Asian) |
| **Tuscan Al Fresco** | San Gimignano | **San Gimignano** |
| **Historic Indian** | Daniell's Tavern | **Daniell's Tavern** |
| **Pastry & High Tea** | The Imperial Patisserie | **The Imperial Patisserie & Tea Salon** |
| **Club Bar** | 1911 Bar & Lounge | **1911 Bar & Heritage Malts** |
| **Wellness** | The Imperial Spa & Salon | **The Imperial Spa & Ayurvedic Oasis** |

---

## 3. Main Pages & Key Features Implemented

1. **Homepage (`/`)**:
   - Atmospheric Hero with live multi-field reservation bar (Check-in, Check-out, Guests, Suite selection).
   - Heritage history section (1936 founding, Blomfield & Lutyens colonial heritage).
   - Signature rooms & suites catalog with live currency conversion.
   - Culinary Sanctuaries spotlight with hours and direct table booking.
   - The Imperial Spa & holistic Ayurvedic treatments preview.
   - Museum Art Collection feature with custom video chronicle placeholder.
   - Royal Weddings & Galas section with RFP request.
   - Verified guest accolades (Condé Nast Gold List, Forbes Five Star, World Luxury Hotel Award).
   - Compact advertisement placeholder slot.

2. **Rooms & Suites (`/rooms`) & Dynamic Detail (`/rooms/:id`)**:
   - Filter by category (*Colonial Heritage Rooms, Art Deco Luxury Suites, The Royal Imperial Suite, Eliza Rooms for Women Travelers*).
   - Search by suite amenities (*butler, marble tub, balcony, jacuzzi, garden view*).
   - Filter by minimum guest capacity and sort by price or room dimensions.
   - Interactive photo gallery thumbnail selector.
   - Dimensions, bedding, occupancy, and vista specifications.
   - In-room amenities checklist & architectural highlights.
   - Direct reservation engine modal integration with instant pricing calculations.

3. **Dining & Bars (`/dining`) & Dynamic Detail (`/dining/:id`)**:
   - Showcase of all 6 gastronomic sanctuaries.
   - Cuisine storytelling and architectural background.
   - Interactive sample menu tabs (*Starters, Mains, Desserts, Beverages*) with dietary badges and localized currency pricing.
   - Service timings (Breakfast, Lunch, High Tea, Dinner), location, dress code.
   - Table reservation modal with date, time, party size, and seating preference.

4. **The Imperial Spa & Ayurveda (`/spa`)**:
   - Ancient Ayurvedic therapies (*Shirodhara, Abhyanga*), Imperial Sufi rituals, Balinese deep tissue, and 24K Gold Cellular facials.
   - Wellness amenities: Heated garden swimming pool, Turkish hammams, resident Ayurvedic Vaidya consultation, sunrise yoga.
   - Treatment duration, benefits, pricing, and direct spa appointment booking.

5. **Heritage & Living Museum (`/heritage`)**:
   - The Living Museum housing 4,000+ original 18th & 19th-century colonial lithographs.
   - Thomas & William Daniell aquatints (1786) documentation.
   - Interactive historical timeline spanning 1911 to 2026.
   - Daily resident curator walking tour schedule (11:00 AM & 16:30 PM).
   - Custom YouTube video chronicle placeholder reproducing correct 16:9 layout.

6. **Curated Offers & Packages (`/offers`) & Detail (`/offers/:id`)**:
   - Curated stay sabbaticals, romantic packages, culinary trails, and Ayurvedic wellness retreats.
   - Inclusions, terms & conditions, base vs. privileged discounted pricing.

7. **Weddings, Banquets & Events (`/events`)**:
   - Venue spaces: The Royal Ballroom (500 capacity), One Imperial Lawns (800 capacity), The Lutyens Boardrooms, Palm Verandah.
   - Detailed dimension and capacity matrix (Theatre, Banquet, Reception).
   - Interactive Request for Proposal (RFP) form with validation and reference generation.

8. **Estate Visual Chronicle Gallery (`/gallery`)**:
   - High-fidelity photography categorized by Architecture, Suites, Dining, Spa, Art, and Celebrations.
   - Fullscreen Lightbox viewer with Next, Previous, and Keyboard navigation.

9. **Location, Directions & Concierge (`/contact`)**:
   - Central New Delhi address on Janpath near Connaught Place.
   - Interactive Concierge correspondence form with response guarantee.
   - Directions from DEL Airport (16 km / 30 mins) with luxury fleet transfers.
   - Comprehensive interactive FAQ accordion.

10. **My Itinerary & Saved Items (`/saved`)**:
    - Persisted in browser `localStorage`:
      - Active Room Reservations with alphanumeric reference codes (`TO-XXXXX`).
      - Confirmed Dining Table Bookings (`TB-XXXXX`).
      - Scheduled Spa Appointments (`SPA-XXXXX`).
      - Saved Favorite suites and restaurants.
    - Cancel booking capabilities and reset options.

11. **Custom Not-Found Chamber (`404`)**:
    - Stately colonial error page with seamless navigation back to the lobby or suites.

---

## 4. Project Structure
```text
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deploy workflow for GitHub Pages
├── public/                         # Public static assets
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AdvertisementPlaceholder.tsx # Reusable compact advertising slot
│   │   │   ├── BookingModal.tsx             # Interactive room reservation modal
│   │   │   ├── Footer.tsx                   # Grand luxury footer & newsletter
│   │   │   ├── Header.tsx                   # Sticky nav, currency switcher & crest
│   │   │   ├── SpaBookingModal.tsx          # Spa appointment booking modal
│   │   │   ├── TableReservationModal.tsx    # Dining table booking modal
│   │   │   ├── Toast.tsx                    # Toast notifications
│   │   │   └── YouTubePlaceholder.tsx       # Blank 16:9 video presentation component
│   │   └── home/
│   │       ├── AccoladesSection.tsx         # Five-star awards
│   │       ├── ArtCollectionBanner.tsx      # Living museum spotlight
│   │       ├── DiningShowcase.tsx           # Featured restaurants
│   │       ├── GuestReviewsSection.tsx      # Verified guest testimonials
│   │       ├── HeroSection.tsx              # Grand hero with booking bar
│   │       ├── RoomsCarousel.tsx            # Suite showcase
│   │       ├── RoyalWeddingsPreview.tsx     # Weddings & banquets
│   │       ├── SpaWellnessPreview.tsx       # Ayurvedic spa preview
│   │       └── WelcomeSection.tsx           # 1936 heritage narrative
│   ├── context/
│   │   └── HotelContext.tsx        # Global state, currency rates & localStorage
│   ├── data/
│   │   └── mockData.ts             # Rich authentic heritage dataset
│   ├── pages/
│   │   ├── ContactPage.tsx
│   │   ├── DiningDetailPage.tsx
│   │   ├── DiningPage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HeritagePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── OfferDetailPage.tsx
│   │   ├── OffersPage.tsx
│   │   ├── RoomDetailPage.tsx
│   │   ├── RoomsPage.tsx
│   │   ├── SavedBookingsPage.tsx
│   │   └── SpaPage.tsx
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # HashRouter routes
│   ├── index.css                   # Tailwind CSS & luxury typography
│   └── main.tsx                    # React root entry point
├── .gitignore
├── index.html                      # HTML entry with Google Fonts & favicon
├── metadata.json
├── package.json
├── package-lock.json               # Committed npm dependency lockfile
├── tsconfig.json
└── vite.config.ts                  # Vite build config with base: './'
```

---

## 5. Prerequisites & Recommended Versions
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or later

---

## 6. Installation & Development

### Clone the repository
```bash
git clone https://github.com/Aman22kr/<repository-name>.git
cd <repository-name>
```

### Install dependencies
```bash
npm ci
# or if modifying packages:
npm install
```

### Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

---

## 7. Production Build & Local Preview

### Generate production build
```bash
npm run build
```
The compiled static assets are generated in the `dist/` directory with relative asset paths (`base: './'`).

### Preview production build
```bash
npm run preview
```

---

## 8. LocalStorage Persistence Details & Limitations
This client-side web application stores state locally in the user's browser:
- `taverenoak_reservations`: Room bookings and references
- `taverenoak_table_bookings`: Dining table reservations
- `taverenoak_spa_bookings`: Spa appointments
- `taverenoak_saved_favorites`: Favorited suites and venues
- `taverenoak_currency`: User's selected currency (`INR`, `USD`, `EUR`, `GBP`)
- `taverenoak_newsletter_subscribed`: Newsletter subscription status
- `taverenoak_inquiries`: Submitted concierge inquiries
- `taverenoak_rfps`: Event proposal requests

### Limitations:
- State is specific to the browser profile and device.
- It does not synchronize across different devices or browsers.
- Clearing browser cache or private browsing mode will reset stored bookings.
- Form submissions and reservations simulate the real booking engine without charging real payment instruments.

---

## 9. GitHub Actions & GitHub Pages Deployment Guide

The application is pre-configured for automated static deployment to **GitHub Pages** using the official GitHub Actions workflow.

### Step 1: Configure GitHub Repository Settings
1. Go to your repository on GitHub: `https://github.com/Aman22kr/<repository-name>`
2. Click **Settings** → **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (do NOT choose "Deploy from a branch").

### Step 2: Push Changes to the `main` Branch
```bash
git add .
git commit -m "feat: complete TaverenOak luxury heritage hotel website"
git push origin main
```

### Step 3: Automated Workflow Execution
The workflow in `.github/workflows/deploy.yml` will automatically:
1. Check out the codebase.
2. Set up Node.js 22 with npm cache.
3. Run `npm ci` using the committed `package-lock.json`.
4. Run `npm run build` to compile the app into `./dist`.
5. Upload and publish the production artifact to GitHub Pages.

Your live website will be available at:
`https://Aman22kr.github.io/<repository-name>/`

---

## 10. Troubleshooting Deployment Issues
- **White Screen / Broken CSS or Images on GitHub Pages**:
  - Verify that `vite.config.ts` specifies `base: './'`. This ensures all script and CSS bundles use relative URLs regardless of the repository subfolder path.
- **404 on Direct Page Refresh**:
  - The application uses `HashRouter` (`/#/rooms`, `/#/dining`). Hash-based routing ensures that page refreshes and direct links function seamlessly on static web hosts without server-side URL rewrite rules.
- **Workflow Permission Errors**:
  - Ensure repository **Settings** → **Actions** → **General** → **Workflow permissions** has `Read and write permissions` enabled or that `.github/workflows/deploy.yml` contains:
    ```yaml
    permissions:
      contents: read
      pages: write
      id-token: write
    ```

---

## 11. Reusing for Another Brand
To adapt this application to a different luxury hotel or brand:
1. Update `HOTEL_INFO` in `src/data/mockData.ts` (name, address, telephone, email).
2. Modify room titles, dining venues, and imagery in `src/data/mockData.ts`.
3. Update brand typography and color palette variables in `src/index.css`.
4. Update `<title>` and `<meta>` tags in `index.html`.
