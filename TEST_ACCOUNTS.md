# CarTalk â€” Test Accounts

All test accounts share the same password: **`CarTalk123!`**

These accounts are **live in the Firebase production project** (`cartalk-app`).  
You can log in immediately at <https://djtaylor333.github.io/car-talk-web/>.

To re-seed or add more accounts, run:
```bash
node scripts/seed_test_data.js
```
The script reads credentials from `web-app/.env.local` automatically â€” no service account or admin SDK needed.

---

## Accounts

| Email | Password | Display Name | Region | UID |
|-------|----------|-------------|--------|-----|
| `alice@cartalk.test` | `CarTalk123!` | Alice Johnson | Auckland, NZ | `ZOtbMruSkbX24T1Q3rtUoXanvJ93` |
| `bob@cartalk.test` | `CarTalk123!` | Bob Williams | Sydney, AU | `vzg6wU29LWOokaMQ2GEgBhc0D4j2` |
| `carol@cartalk.test` | `CarTalk123!` | Carol Davis | London, UK | `TpTi749WMHR8lQnPkg8JlRPImdc2` |
| `dave@cartalk.test` | `CarTalk123!` | Dave Smith | Manchester, UK | `34OFxV7jCXagNEuGQihxop5B3l52` |
| `emma@cartalk.test` | `CarTalk123!` | Emma Brown | Seattle, US | `bDMqul526xbbo1JZgFhlXQa5TVm1` |
| `frank@cartalk.test` | `CarTalk123!` | Frank Miller | Melbourne, AU | `wV0OnkMvDRgjalycqJskD7agrZG2` |
| `grace@cartalk.test` | `CarTalk123!` | Grace Wilson | Toronto, CA | `cgPoVUAQWVQ6W6KpqZdBqlPc9uu2` |
| `henry@cartalk.test` | `CarTalk123!` | Henry Moore | Edinburgh, UK | `XTSoP0BPmEY8bpPSk2P6TSfi7Qm1` |
| `isabel@cartalk.test` | `CarTalk123!` | Isabel Martinez | Christchurch, NZ | `FNl0EdHubKZuGN4IaNkAwBfdDSn1` |
| `james@cartalk.test` | `CarTalk123!` | James Taylor | Brisbane, AU | `E2uBvL8oxSdZlLrmNm876a9Tezz2` |

---

## Vehicles & Search Plates

Use these plates in the **Search** screen:

| Plate | Owner | Vehicle |
|-------|-------|---------|
| `NZL100` | Alice Johnson | MG HS PHEV Â· White |
| `NZL101` | Alice Johnson | Toyota HiLux Â· Silver |
| `NSW200` | Bob Williams | Ford Ranger Â· Black |
| `UK30AB` | Carol Davis | Vauxhall Corsa Â· Red |
| `UK31AB` | Carol Davis | MINI Countryman Â· White |
| `UK40CD` | Dave Smith | BMW 3 Series Â· Blue |
| `US500WA` | Emma Brown | Tesla Model Y Â· White |
| `VIC600` | Frank Miller | Toyota Land Cruiser 300 Â· Silver |
| `VIC601` | Frank Miller | Haval Jolion Â· Grey |
| `ON700G` | Grace Wilson | Honda CR-V Â· Grey |
| `UK80HM` | Henry Moore | Land Rover Defender Â· Green |
| `NZL900` | Isabel Martinez | Hyundai Tucson Plug-in Hybrid Â· Silver |
| `NZL901` | Isabel Martinez | Kia EV6 Â· Blue |
| `QLD010` | James Taylor | Mazda CX-5 Â· Red |
| `QLD011` | James Taylor | Isuzu D-Max Â· White |

---

## Pre-seeded Relationships

### Friends (accepted)
- **Alice** ↔ **Bob** (NZL100 ↔ NSW200)
- **Alice** ↔ **Carol** (NZL100 ↔ UK30AB)
- **Dave** ↔ **Emma** (UK40CD ↔ US500WA)
- **Frank** ↔ **James** (VIC600 ↔ QLD010)
- **Grace** ↔ **Isabel** (ON700G ↔ NZL900)

### Pending Friend Requests
- **Bob** → **Henry** — "Love seeing Defenders out on the road. Great taste!"
- **Carol** → **Dave** — "Fellow UK driver here — always nice to connect!"

### Messages
| From | To | Type | Preview |
|------|----|------|---------|
| Bob (NSW200) | Alice (NZL100) | Anonymous | Asking about MG HS PHEV |
| Alice (NZL101) | Bob (NSW200) | Anonymous | Reply — loves the PHEV |
| Carol (UK30AB) | Alice (NZL100) | Friend | Mentioning NZ connection |
| Dave (UK40CD) | Emma (US500WA) | Friend | Asking about Model Y |
| Emma (US500WA) | Dave (UK40CD) | Friend | Loves the Tesla |
| James (QLD010) | Frank (VIC600) | Friend | Admiring Land Cruiser 300 |
| Grace (ON700G) | Alice (NZL100) | Anonymous | Complimenting car colour |
