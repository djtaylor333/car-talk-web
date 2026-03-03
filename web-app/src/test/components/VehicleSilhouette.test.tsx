import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import VehicleSilhouette from '../../components/VehicleSilhouette';

describe('VehicleSilhouette', () => {
  // ── Fallback SVG (no make/model provided) ────────────────────────────────
  it('renders fallback SVG when no make/model given', () => {
    const { container } = render(<VehicleSilhouette color="Red" />);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('has accessible label on the wrapper div', () => {
    render(<VehicleSilhouette color="Blue" />);
    // aria-label is on the outer div, e.g. "Blue"
    expect(screen.getByRole('img', { name: /blue/i })).toBeTruthy();
  });

  it('wrapper width equals size × 2 (photo-ratio container)', () => {
    const { container } = render(<VehicleSilhouette color="White" size={120} />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper?.style.width).toBe('240px');
    expect(wrapper?.style.height).toBe('120px');
  });

  it('renders with unknown color without crashing', () => {
    const { container } = render(<VehicleSilhouette color="#ABCDEF" />);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  // ── Photo mode (make + model provided) ──────────────────────────────────
  it('renders an <img> when make and model are provided', () => {
    const { container } = render(
      <VehicleSilhouette color="Black" make="MG" model="HS PHEV" size={80} />
    );
    // Before the image loads the SVG placeholder is shown; after load the img
    // is present. The <img> element should exist in the DOM.
    expect(container.querySelector('img')).toBeTruthy();
  });

  it('includes make and model in aria-label when provided', () => {
    render(<VehicleSilhouette color="Silver" make="Toyota" model="HiLux" />);
    // The wrapper div carries the aria-label; the <img> has a matching alt text
    // so there may be multiple img-role elements — check at least one matches
    const imgs = screen.getAllByRole('img');
    const labels = imgs.map(el => (el.getAttribute('aria-label') ?? el.getAttribute('alt') ?? '').toLowerCase());
    expect(labels.some(l => l.includes('toyota'))).toBe(true);
    expect(labels.some(l => l.includes('hilux'))).toBe(true);
  });

  it('Imagin Studios URL contains make slug and paint id', () => {
    const { container } = render(
      <VehicleSilhouette color="Red" make="Land Rover" model="Defender" />
    );
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('land-rover');
    expect(img.src).toContain('defender');
    expect(img.src).toContain('colourpicker-cc0000');
  });
});
