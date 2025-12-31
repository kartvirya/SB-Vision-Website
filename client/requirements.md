## Packages
framer-motion | Essential for all the required animations (hero reveal, floating elements, parallax, page transitions)
zustand | Simple global state management for Cart and Wishlist
lucide-react | Icon set (already in base but good to confirm usage)
clsx | Utility for constructing className strings conditionally
tailwind-merge | Utility for merging tailwind classes

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["'Outfit'", "sans-serif"],
  body: ["'DM Sans'", "sans-serif"],
}
Tailwind Config - extend colors:
colors: {
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Primary Sky Blue
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  }
}
Cart state should persist to localStorage.
Images will use Unsplash placeholders where dynamic product images aren't available.
