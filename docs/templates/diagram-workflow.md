# Documentation Workflow Diagram Template

Use this Mermaid template to visualize your documentation process.

```mermaid
flowchart TD
  A[Start: Feature or Change] --> B[Plan: /doc-structure]
  B --> C[Draft: docs/_working]
  C --> D[API Docs: /api-docs]
  D --> E[Review: /review-cycle]
  E --> F{Accept?}
  F -- Yes --> G[Promote: docs/]
  F -- No --> C
  G --> H[Audit: /doc-audit]
```

Guidance:
- Modify nodes to reflect your project's specifics.
- Link each node to the corresponding doc or command.
