import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import VehicleSilhouette from '../../components/VehicleSilhouette';

describe('VehicleSilhouette', () => {
  it('renders an SVG element', () => {
    const { container } = render(<VehicleSilhouette color="Red" />);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('has accessible label matching the color', () => {
    render(<VehicleSilhouette color="Blue" />);
    expect(screen.getByRole('img', { name: /blue vehicle/i })).toBeTruthy();
  });

  it('applies custom size', () => {
    const { container } = render(<VehicleSilhouette color="White" size={120} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('120');
  });

  it('renders with unknown color without crashing', () => {
    const { container } = render(<VehicleSilhouette color="#ABCDEF" />);
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
