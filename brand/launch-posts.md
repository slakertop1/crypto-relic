# Тексты запуска (дни 1–7)

## День 1–2. X: твит №2 (reply-магнит), запостить через 2–3 часа после поста дня

```
Drop your handle in the replies and I'll tell you what today's block gave you 🎴

Or check yourself: https://cryptorelicday.github.io/crypto-relic/

Rarest reply gets pinned.
```

(151 символ. Каждому ответившему — открыть его ник на сайте и ответить скрином/названием дропа.)

## День 3. Reddit: r/SideProject

**Title:**
```
I built a daily case opener with no backend — every drop is computed from today's Bitcoin block hash
```

**Body:**
```
The idea: once a day, the whole world opens the same "case", sealed by the hash of a real Bitcoin block. What you pull depends only on (today's block + your name). No rerolls. Come back tomorrow for a new one.

The fun engineering part: there is no server and no database. Your drop is a pure function — hash(date + block hash + name) → rarity, item, float. Same input always gives the same output, for everyone, forever. That also makes it provably fair by construction: I couldn't rig the odds even if I wanted to, and you can verify any drop by recomputing it (source is open).

Stack: vanilla JS static page on GitHub Pages + one tiny Cloudflare Worker for the live "recent drops" feed (the worker recomputes every drop server-side, so the feed can't be faked either).

Try it with your username: https://cryptorelicday.github.io/crypto-relic/

Would love feedback — especially on what would make you come back tomorrow.
```

## День 7. Show HN

**Title (≤80 символов):**
```
Show HN: Daily collectible game with no backend, sealed by Bitcoin block hashes
```

**URL:** https://cryptorelicday.github.io/crypto-relic/

**Первый комментарий (запостить сразу после сабмита):**
```
Hi HN! Little weekend-project-turned-rabbit-hole.

The premise: once a day there's one global "case", sealed by the hash of a recent Bitcoin block. Your drop is a pure function of (date, block hash, your name) — deterministic, so there's nothing to store: no accounts, no database, no server. The whole game is a static page.

Things I enjoyed figuring out:

- Provably fair "for free": the drop function is public, so anyone can recompute any drop. There are no odds to trust — only math to check.
- The "recent drops" feed can't be faked: a tiny Cloudflare Worker recomputes each drop server-side from the submitted name + block before accepting it into the feed.
- Rarity-tiered reveal animations in pure CSS (legendary/mythic get sparks and a screen shake).

One honest limitation: your collection lives in localStorage, so it's per-device and trivially cheatable — a deliberate trade-off to stay serverless. The shared feed is the only thing that's verified.

Happy to answer anything about the deterministic-drop design.
```

## Discord (день 5), короткая подача для #showcase

```
Built a tiny daily ritual: one case per day for the whole world, sealed by a real Bitcoin block hash. Your drop = f(block, your name). No rerolls, no server, provably fair — the whole game is a static page. Check what today's block gives you: https://cryptorelicday.github.io/crypto-relic/
```

## Правила подачи

- Reddit/HN: публиковать со своего аккаунта, отвечать на КАЖДЫЙ комментарий в первые 2 часа (алгоритмы это любят).
- Reddit: за 2 дня до поста — 5–10 нормальных комментариев в тех же сабах (карма + не выглядеть спамером).
- HN: вторник–четверг, 17:00–19:00 МСК. Если не взлетело (< 5 очков за 2 часа) — можно удалить и повторить через неделю с другим заголовком.
- Везде: не постить одно и то же в один день — по одному каналу за раз, смотреть /stats.
