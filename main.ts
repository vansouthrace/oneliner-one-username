import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "calm-badger-97-9980";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
