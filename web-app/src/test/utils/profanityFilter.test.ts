import { describe, it, expect } from 'vitest';
import { containsProfanity, sanitise } from '../../utils/profanityFilter';

describe('containsProfanity', () => {
  it('returns false for clean text', () => {
    expect(containsProfanity('Hello, how are you?')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(containsProfanity('')).toBe(false);
  });

  it('detects a known bad word', () => {
    expect(containsProfanity('you are an ass')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(containsProfanity('ASS')).toBe(true);
  });

  it('does not flag partial matches inside clean words', () => {
    // "class" contains "ass" but with word boundaries it should be fine
    expect(containsProfanity('I am in class')).toBe(false);
  });
});

describe('sanitise', () => {
  it('replaces a bad word with asterisks', () => {
    const result = sanitise('you are an ass');
    expect(result).not.toContain('ass');
    expect(result).toContain('***');
  });

  it('returns clean text unchanged', () => {
    expect(sanitise('Hello there')).toBe('Hello there');
  });
});
