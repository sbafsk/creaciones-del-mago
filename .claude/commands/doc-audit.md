# Documentation Audit Command

> Rationale: Regular audits keep documentation accurate, consistent, and useful. This command defines a repeatable audit workflow for teams and AI assistants.

## When to Use
- Before a release or milestone
- After large refactors or dependency upgrades
- When onboarding new team members

## Inputs
- Project docs in `docs/`
- Standards in `standards/`
- Current status in `docs/status/`

## Step-by-Step
1. Inventory all docs and key sections (index, status, architecture, guides)
2. Validate cross-references and navigation links
3. Verify examples are runnable and up-to-date
4. Identify duplication and move to single source of truth
5. Record gaps, outdated sections, and inconsistencies
6. Propose prioritized actions with owners and timelines

## Example Invocation
- Ask your assistant: "/doc-audit: audit our docs and produce findings"
- Or run manually following the steps above

## Output
Create `docs/_working/audit-report-[date].md` including:
- Executive summary
- Gap analysis
- Prioritized recommendations with owners
- Suggested timeline and acceptance criteria
