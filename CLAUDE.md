# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository shape

This repository has no single build system — it is a loose collection of independent, self-contained projects. There is no root `package.json` or shared tooling; work happens inside whichever subdirectory is relevant.

- **`game/`** — an active single-file browser game (see below). This is the main area of ongoing work.
- **`ClaudeCode_samplefile/`** — reference sample projects from a Claude Code book, organized by chapter (`chap05_pdflabel`, `chap06_contact-form` … `chap10_todo-app`). Each chapter is a standalone project with its own `CLAUDE.md` describing its own stack and conventions — **read the chapter's own `CLAUDE.md` before editing inside it**, since conventions differ per chapter (e.g. Laravel/PSR-12 for the contact-form chapters, vanilla JS for the PDF label maker and ToDo app). Do not assume conventions from one chapter apply to another or to `game/`.

## `game/` — 落ちゲー (falling-block puzzle game)

A single self-contained file: `game/index.html` (HTML + CSS + JS inline, no build step, no dependencies). Open it directly in a browser to run — there is no dev server, bundler, or test suite for this project.

### Architecture

Everything lives in one IIFE in the `<script>` tag at the bottom of `index.html`:

- **Board model**: `board` is a `ROWS x COLS` grid of cell colors (`null` = empty), rebuilt via `createEmptyBoard()`. Pieces (`SHAPES`) are defined as coordinate arrays keyed by tetromino letter (I/O/T/S/Z/J/L); `current` holds the active falling piece's shape, position, and rotation state.
- **Game loop**: `requestAnimationFrame`-driven `loop()` accumulates elapsed time into `dropTimer` and advances the piece downward once it exceeds `dropInterval`; `dropInterval` shrinks as `level` increases (10% faster per level, floored at 100ms).
- **Piece lifecycle**: `spawnPiece()` → falls via the loop or manual `softDrop()`/`hardDrop()` → `lockPiece()` writes it into `board` and calls `clearLines()` → next piece spawns. Collision is centralized in `collides()`, reused for movement, rotation (with simple wall-kick offsets), and ghost-piece projection.
- **Scoring** (`clearLines()`): line clears award `[0,100,300,500,800][cleared] * level`, multiplied by a combo bonus (`comboStreak`: 2 in a row = ×1.5, 3+ in a row = ×2, reset to 0 on any lock that clears no lines). Soft drop awards 1 point/cell, hard drop 2 points/cell.
- **Persistence**: high score is stored in `localStorage` under `ochigee-tetris-highscore`.
- **UI wiring**: game functions (`startGame`, `restartGame`, `moveLeft/Right`, `rotatePiece`, `softDrop`, `hardDrop`, `togglePause`) are exposed on `window` because they're invoked from inline `onclick`/`ontouchstart` handlers in the HTML (title screen, on-screen mobile controls, keyboard handler). Desktop input goes through a single `keydown` listener with a `keyState` map to prevent OS auto-repeat from double-firing actions.

When changing game balance (scoring, speed, level thresholds), the values to touch are concentrated in `clearLines()` (scoring/level-up) and the `dropInterval` formula — there is no separate config object.
