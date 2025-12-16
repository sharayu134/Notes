## One‑pager summary

- Early = fuse features/embeddings first into one model
- Late = separate per‑modality models, then combine scores
- Hybrid = per‑modality encoders → joint model; late‑fuse with legacy/rule/risk scores

---

## When to choose what

- Choose Early when
    - Cross‑feature interactions drive signal and features are usually present and time‑aligned
    - One team owns the pipeline and can retrain end‑to‑end
    - Priority is peak accuracy over modularity
- Choose Late when
    - Modalities vary in latency/availability or teams own models independently
    - You need graceful degradation when a modality/service is missing
    - Fast iteration, A/B, shadowing, and safe rollout are important
- Practical strategy
    - Start Late for system architecture and operational safety
    - Add Early inside critical components that need rich interaction modeling

---

## Pros and cons (grouped, no repeats)

- Cross‑feature interactions
    - Early: strong, learns fine‑grained non‑linear interactions
    - Late: coarse (works on scores); meta‑model can recover some interactions
- Modularity & ownership
    - Early: monolithic; harder to split ownership
    - Late: modular; each team can ship independently
- Missing data / service outages
    - Early: needs imputation, masks, and training on realistic missingness; can be brittle if a whole modality is often absent
    - Late: simply omit that model’s score; robust degradation
- Latency & cost
    - Early: single pass but blocked by slowest feature
    - Late: tiered/cascaded execution; call expensive models only for suspicious cases
- Explainability & debugging
    - Early: feature‑level explainability (e.g., SHAP) needed
    - Late: per‑model scores and logs are straightforward
- Experimentation & rollout
    - Early: adding/removing a modality usually requires full retrain/redeploy
    - Late: plug in/out models, tune weights, easy A/B and shadow modes

---

## Implementation patterns

- Early fusion
    - Concatenate embeddings or features; train one joint model with masks/flags for missing values
    - Handle missing via imputation + "is_missing" flags, special embeddings, or attention masks
- Late fusion
    - Base models per modality (tx/behavior, graph, text, image)
    - Combine via weighted average, logistic regression, or stacking; calibrate scores to avoid double‑counting
- Hybrid
    - Per‑modality encoders → early‑fused joint model for core prediction
    - Late‑fuse joint prediction with legacy or rule‑based scores for safety and incremental adoption

---

## Interview one‑liners

- "Choose Early for interaction power; choose Late for modularity and resilience."
- "Late at the system boundary, Early inside components where cross‑signal contradictions matter."
- Example: bait‑and‑switch detection benefits from Early; overall risk pipeline benefits from Late.
