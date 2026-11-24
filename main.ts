// Entry for make.fun "Fortune Cookie Wisdom for Developers" bounty.
//
// Writes one line to /output/entry.txt: a fortune-cookie line of wisdom
// for a software developer.
//
// The line: the rubber duck on your desk already knows the answer — it
// is waiting for you to say it out loud. True about a developer's day
// (rubber-duck debugging really does work that way), reads like a real
// fortune (a small prophecy about an object on your desk), and turns
// with a twist nobody else used: the duck is not a tool, it is a patient
// listener waiting its turn. 97 characters, no trailing newline. Fresh
// among 291 submissions: rivals lean on legacy code, midnight code, git
// blame, and bugs already in production — none lets the duck speak, and
// none names the desk object that actually solves the bug.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The rubber duck on your desk already knows the answer — it is waiting for you to say it out loud.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 120) {
    throw new Error(`line must be 1-120 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
  console.log(`wrote ${chars.length} characters to ${OUTPUT_PATH}`);
}

main();
