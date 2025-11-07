/**
 * Color utility functions for calculating contrast and luminance
 * Used for automatic footer color adjustments based on brand colors
 */

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Calculate relative luminance of a color (WCAG formula)
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);

  // Convert RGB to 0-1 range
  const rsRGB = rgb.r / 255;
  const gsRGB = rgb.g / 255;
  const bsRGB = rgb.b / 255;

  // Apply gamma correction
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Determine if a color is light or dark
 * @param hex - Hex color code
 * @returns true if color is light, false if dark
 */
export function isLightColor(hex: string): boolean {
  return getLuminance(hex) > 0.5;
}

/**
 * Calculate optimal footer colors based on brand colors
 * Ensures proper contrast for readability
 */
export function getFooterColors(brandColors: {
  primary: string;
  secondary?: string;
  background: string;
}): {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
  linkColor: string;
  linkHoverColor: string;
  borderColor: string;
} {
  const backgroundColor = brandColors.primary;
  const isLight = isLightColor(backgroundColor);

  return {
    backgroundColor,
    textColor: isLight ? '#4b5563' : '#d1d5db',
    headingColor: isLight ? '#000000' : '#ffffff',
    linkColor: isLight ? '#6b7280' : '#9ca3af',
    linkHoverColor: isLight ? '#000000' : '#ffffff',
    borderColor: isLight ? '#e5e7eb' : '#374151',
  };
}
