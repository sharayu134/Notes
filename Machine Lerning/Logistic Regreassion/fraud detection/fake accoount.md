Detecting fake accounts is fundamentally different from detecting fake *goods* because accounts can be "fake" in three different ways:
1.  **Bots:** Automated scripts (non-humans).
2.  **Sybils:** One real human controlling 100+ "sock puppet" accounts.
3.  **Mules/Farms:** Real humans paid to act like fake users (click farms).

Here is a layered defense strategy to detect them, moving from the simplest checks to complex AI behavioral analysis.

---

### Level 1: The "Resume" Check (Static Metadata)
*Is this account physically possible and logically consistent?*

**1. Email Analysis (The Digital DNA)**
* **Disposable Domains:** Check if the email domain is from a temporary provider (e.g., `guerrillamail.com`, `10minutemail`). Real users rarely use these.
* **Alias Tumbling:** Look for "plus addressing" tricks (e.g., `john.doe+contest1@gmail.com`). While valid features, 50 accounts using the same root email (`john.doe`) is a Sybil attack.
* **String Entropy:** "Gamer tags" are normal (`coolguy123`), but high-entropy random strings (`az91xb_99q!`) are a strong signal of algorithmic generation.

**2. Phone Number Line Type**
* **VOIP Detection:** Query a lookup service (like Twilio or Telesign) to see if the number is a **Mobile** carrier (Verizon, Vodafone) or a **VOIP** line (Google Voice, Skype).
* **Why it works:** Creating 1,000 Verizon accounts costs \$50,000. Creating 1,000 Google Voice numbers is nearly free. Fraudsters almost always use VOIP.

**3. Profile "Ghosting"**
* **Incompleteness Ratio:** Fake accounts often leave non-mandatory fields blank (Bio, Location, Avatar). A "Null" avatar + "Null" bio is 90% correlated with low-value/fake accounts.

---

### Level 2: The "Handshake" Check (Behavioral Biometrics)
*Does this user move like a human?*

**1. Mouse & Touch Dynamics**
* **Linearity:** Humans move cursors in curves. Bots move in perfect straight lines (shortest path) between buttons.
* **Teleportation:** If a mouse cursor jumps from coordinates (100,100) to (500,500) in 0 milliseconds, it is a script injecting events, not a physical mouse.
* **Touch Area:** On mobile, humans have "fat fingers"—we touch a blob of pixels. Bots often touch a single `1x1` pixel coordinate.

**2. Keystroke Dynamics**
* **Flight Time:** The time between pressing 'A' and 'B'.
* **Bot Signal:** 50ms constant interval (machine precision).
* **Human Signal:** Variable intervals. We type familiar keys (like our own name) fast, and complex passwords slowly.

**3. Chronobiology (Time of Day)**
* **The "Zombie" Shift:** A "user" in New York claiming to be a student but active *only* between 2 AM and 5 AM EST is suspicious.
* **24/7 Uptime:** No human is active for 72 hours straight. If an account interacts continuously without an 8-hour sleep break, it is a bot or a shared account.

---

### Level 3: The "Social Circle" Check (Graph Analysis)
*Who are they connected to?*

**1. The "Dense Block" (Sybil Clusters)**
* **Concept:** In a real social graph, friends form loose triangles. In a fake network, 50 fake accounts all follow *each other* (to boost follower counts) but have zero connections to the "main" healthy component of the network.
* **Detection:** Use algorithms like **PageRank** or **Louvain Modularity**. If a cluster of 1,000 nodes has high internal density but only 1 edge connecting to the rest of the world, block the whole cluster.

**2. Synchronicity (The "Lockstep" Pattern)**
* **Concept:** Humans are independent. If 500 accounts all "Like" the same post within the same 1-second window, they are controlled by a single "Command & Control" (C&C) server.
* **Detection:** Group actions by `(Action_Type, Timestamp, Target_ID)`. High spikes in this grouping indicate a botnet.

---

### Level 4: The "Mule" Check (Human Farms)
*How to catch real humans acting falsely?*

This is the hardest category because the biometrics are human.
* **Device Fingerprinting:** Even if they clear cookies, check the **Canvas Fingerprint**, **Battery Level API**, and **Screen Resolution**. If 50 "different" users all have the exact same battery level (e.g., 100% charging) and screen size, it's a device farm.
* **IP Reputation:** Check if the IP is a known **Datacenter** IP (AWS, Azure) or a **Residential Proxy**. Real humans don't browse Facebook from an AWS server.

---

### Summary Matrix: Authenticity Signals

| Feature | Authentic Signal | Fake/Bot Signal |
| :--- | :--- | :--- |
| **Email** | `gmail.com`, `outlook.com` (aged > 1 year) | `tempmail.com` or `user+132@gmail.com` |
| **Phone** | Mobile / Landline | VOIP / Fixed Line |
| **Mouse** | Curved paths, variable speed | Straight lines, instant jumps |
| **Network** | Connects to diverse groups | Connects only to other new accounts |
| **Timing** | Active 16h, Sleeps 8h | Active 24/7 or perfectly periodic |
| **Device** | Unique, variable battery/screen | 100% Battery, Datacenter IP |
