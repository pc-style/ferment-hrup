---
name: brand-guidelines
description: Applies Ferment Kolektiv's official brand colors and typography to any sort of artifact that may benefit from having Ferment's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply.
license: Complete terms in LICENSE.txt
---

# Ferment Kolektiv Brand Styling

## Overview

To access Ferment Kolektiv's official brand identity and style resources, use this skill.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, Ferment brand, visual formatting, visual design, film culture, cultural branding

## Brand Guidelines

### Colors

**Main Colors:**

- Brand Pink: `#E00371` - Primary accent, headings, CTAs, icons
- Deep Black: `#000000` - Primary backgrounds, navigation
- Dark Charcoal: `#101010` - Section backgrounds, cards
- Pure White: `#FFFFFF` - Main headings, primary text, logos

**Secondary Colors:**

- Medium Grey: `#717173` - Body text, descriptions, secondary information

### Typography

- **Primary Font**: Poppins (with Arial fallback)
- **Weights**: Light (300), Regular (400), Semi-Bold (600), Bold (700)
- **Note**: Fonts should be pre-installed in your environment for best results

### Brand Pattern

**"dla" Prefix Pattern:**

- Signature branding element: `<pink>dla</pink> <white>CATEGORY</white>`
- Examples: "dla KULTURY", "dla BIZNESU", "dla EDUKACJI"
- Pink (#E00371) for "dla", White (#FFFFFF) for category name
- Used in headings, navigation, service differentiation

## Features

### Smart Font Application

- Applies Poppins font to all text elements
- Automatically assigns appropriate weights:
  - Bold (700) for main headings
  - Semi-Bold (600) for subheadings
  - Regular (400) for body text
  - Light (300) for descriptions
- Automatically falls back to Arial if Poppins unavailable
- Preserves readability across all systems

### Text Styling

- Large headings (24pt+): Poppins Bold, White
- Subheadings: Poppins Semi-Bold, White or Pink
- Body text: Poppins Regular, Grey or White
- Accent text: Pink for emphasis and CTAs
- Smart color selection based on background (dark vs light)
- Preserves text hierarchy and formatting

### Shape and Accent Colors

- Primary shapes and icons use Brand Pink (#E00371)
- Backgrounds alternate between Deep Black and Dark Charcoal
- Buttons and CTAs use Pink with White text
- Maintains visual consistency with dark theme aesthetic

## Technical Details

### Font Management

- Uses system-installed Poppins font when available
- Provides automatic fallback to Arial
- No font installation required - works with existing system fonts
- For best results, pre-install Poppins fonts in your environment
- Load from Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700`

### Color Application

- Uses RGB color values for precise brand matching:
  - Brand Pink: `RGB(224, 3, 113)`
  - Deep Black: `RGB(0, 0, 0)`
  - Dark Charcoal: `RGB(16, 16, 16)`
  - Medium Grey: `RGB(113, 113, 115)`
  - Pure White: `RGB(255, 255, 255)`
- Applied via python-pptx's RGBColor class or CSS variables
- Maintains color fidelity across different systems

### Design Principles

- **Dark Theme First**: All designs use dark backgrounds by default
- **Pink as Accent**: Use sparingly to guide user attention
- **High Contrast**: Ensure accessibility with white text on dark backgrounds
- **Minimalist**: Clean, bold typography with generous whitespace
- **Cultural**: Reflects film and cultural industry aesthetics

## Usage Notes

- Pink should be used as an accent color, not overwhelm the design
- Dark backgrounds (#000000 or #101010) are preferred for all sections
- White text for main content, Grey for secondary information
- Apply "dla" pattern for category headings and service differentiators
- Maintain generous spacing and clean layouts
