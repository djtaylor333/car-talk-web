import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import * as useAuthModule from '../../hooks/useAuth';

vi.mock('../../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return { ...actual, Navigate: ({ to }: { to: string }) => <div data-testid="navigate" data-to={to} /> };
});

describe('ProtectedRoute', () => {
  it('shows loading when auth is resolving', () => {
    vi.mocked(useAuthModule.useAuth).mockReturnValue({ user: null, loading: true });
    render(
      <MemoryRouter>
        <ProtectedRoute><div>Secret</div></ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });

  it('redirects to /login when no user', () => {
    vi.mocked(useAuthModule.useAuth).mockReturnValue({ user: null, loading: false });
    render(
      <MemoryRouter>
        <ProtectedRoute><div>Secret</div></ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.getByTestId('navigate').getAttribute('data-to')).toBe('/login');
  });

  it('renders children when user is authenticated', () => {
    vi.mocked(useAuthModule.useAuth).mockReturnValue({
      user: { uid: 'user1' } as import('firebase/auth').User,
      loading: false,
    });
    render(
      <MemoryRouter>
        <ProtectedRoute><div>Secret Content</div></ProtectedRoute>
      </MemoryRouter>
    );
    expect(screen.getByText('Secret Content')).toBeTruthy();
  });
});
