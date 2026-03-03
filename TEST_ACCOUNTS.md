# CarTalk — Test Accounts

All test accounts share the same password: **`CarTalk123!`**

Run the seed script once to create these accounts in Firebase Auth + Firestore:

```bash
# Against the local emulator (start emulators first)
firebase emulators:start --only auth,firestore
node scripts/seed_test_data.js

# Against the real project (needs a service-account key or ADC)
GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json node scripts/seed_test_data.js
```

---

## Accounts

| Email | Display Name | Region | Vehicles |
|-------|-------------|--------|----------|
| `alice@cartalk.test` | Alice Johnson | Auckland, NZ | MG HS PHEV (NZL100) · Toyota HiLux (NZL101) |
| `bob@cartalk.test` | Bob Williams | Sydney, AU | Ford Ranger (NSW200) |
| `carol@cartalk.test` | Carol Davis | London, UK | Vauxhall Corsa (UK30AB) · MINI Countryman (UK31AB) |
| `dave@cartalk.test` | Dave Smith | Manchester, UK | BMW 3 Series (UK40CD) |
| `emma@cartalk.test` | Emma Brown | Seattle, US | Tesla Model Y (US500WA) |
| `frank@cartalk.test` | Frank Miller | Melbourne, AU | Toyota Land Cruiser 300 (VIC600) · Haval Jolion (VIC601) |
| `grace@cartalk.test` | Grace Wilson | Toronto, CA | Honda CR-V (ON700G) |
| `henry@cartalk.test` | Henry Moore | Edinburgh, UK | Land Rover Defender (UK80HM) |
| `isabel@cartalk.test` | Isabel Martinez | Christchurch, NZ | Hyundai Tucson PHEV (NZL900) · Kia EV6 (NZL901) |
| `james@cartalk.test` | James Taylor | Brisbane, AU | Mazda CX-5 (QLD010) · Isuzu D-Max (QLD011) |

---

## Pre-seeded Relationships

### Friends (accepted)
- **Alice** ↔ **Bob** (via NZL100 ↔ NSW200)
- **Alice** ↔ **Carol** (via NZL100 ↔ UK30AB)
- **Dave** ↔ **Emma** (via UK40CD ↔ US500WA)
- **Frank** ↔ **James** (via VIC600 ↔ QLD010)
- **Grace** ↔ **Isabel** (via ON700G ↔ NZL900)

### Pending Friend Requests
- **Bob** → **Henry** — *"Love seeing Defenders out on the road. Great taste!"*
- **Carol** → **Dave** — *"Fellow UK driver here — always nice to connect!"*

### Messages
| From | To | Type | Summary |
|------|----|------|---------|
| Bob (NSW200) | Alice (NZL100) | Anonymous | Asking about MG HS PHEV |
| Alice (NZL101) | Bob (NSW200) | Anonymous | Reply — loves the PHEV |
| Carol (UK30AB) | Alice (NZL100) | Friend | Mentioning NZ connection |
| Dave (UK40CD) | Emma (US500WA) | Friend | Asking about Model Y |
| Emma (US500WA) | Dave (UK40CD) | Friend | Loves the Tesla |
| James (QLD010) | Frank (VIC600) | Friend | Admiring Land Cruiser 300 |
| Grace (ON700G) | Alice (NZL100) | Anonymous | Complimenting car colour |

---

## Search Test Plates

Use these plates in the search screen to find test users:

| Plate | Owner | Vehicle |
|-------|-------|---------|
| `NZL100` | Alice Johnson | MG HS PHEV White |
| `NSW200` | Bob Williams | Ford Ranger Black |
| `UK30AB` | Carol Davis | Vauxhall Corsa Red |
| `UK40CD` | Dave Smith | BMW 3 Series Blue |
| `US500WA` | Emma Brown | Tesla Model Y White |
| `VIC600` | Frank Miller | Toyota Land Cruiser 300 Silver |
| `ON700G` | Grace Wilson | Honda CR-V Grey |
| `UK80HM` | Henry Moore | Land Rover Defender Green |
| `NZL900` | Isabel Martinez | Hyundai Tucson PHEV Silver |
| `QLD010` | James Taylor | Mazda CX-5 Red |

---

> **Security note:** These accounts are for local/emulator testing only.
> Do not share service-account keys and do not use these credentials in production.
