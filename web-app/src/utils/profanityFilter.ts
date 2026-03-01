const BANNED_WORDS = new Set([
  'fuck', 'shit', 'cunt', 'nigger', 'nigga', 'faggot', 'fag',
  'bitch', 'ass', 'asshole', 'bastard', 'cock', 'dick', 'pussy',
  'slut', 'whore', 'twat', 'wanker', 'bollocks', 'motherfucker',
  'mf', 'stfu', 'wtf',
]);

export function containsProfanity(text: string): boolean {
  const lower = text.toLowerCase();
  return Array.from(BANNED_WORDS).some((word) =>
    new RegExp(`\\b${word}\\b`, 'i').test(lower)
  );
}

export function sanitise(text: string): string {
  let result = text;
  BANNED_WORDS.forEach((word) => {
    result = result.replace(new RegExp(`\\b${word}\\b`, 'gi'), '*'.repeat(word.length));
  });
  return result;
}
