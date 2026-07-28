import { readFile } from 'node:fs/promises';

const fileUrl = new URL('../src/data/sentences.json', import.meta.url);
const data = JSON.parse(await readFile(fileUrl, 'utf8'));
const requiredCategories = [
  'beginner',
  'intermediate',
  'advanced',
  'hardWords',
];

const errors = [];

for (const category of requiredCategories) {
  const entries = data[category];

  if (!Array.isArray(entries) || entries.length === 0) {
    errors.push(`${category} must be a non-empty array`);
    continue;
  }

  if (
    entries.some(
      (entry) => typeof entry !== 'string' || entry.trim().length === 0
    )
  ) {
    errors.push(`${category} contains an invalid entry`);
  }

  const normalized = entries.map((entry) => entry.trim().toLowerCase());
  if (new Set(normalized).size !== normalized.length) {
    errors.push(`${category} contains duplicate entries`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Sentence data validation passed.');
}
