# Documentation Structure Command

> Rationale: Designing the structure first prevents duplication and ensures consistent navigation.

## When to Use
- At project start or major feature kickoff
- After a doc audit that identified gaps

## Inputs
- Requirements and audience notes
- Existing docs index and status files
- Available templates in `docs/templates/`

## Step-by-Step
1. Identify personas and their top tasks (developer, operator, PM)
2. Draft IA: index, status, architecture, guides, and cross-links
3. Map each section to a template (API, tutorial, how-to)
4. Define acceptance criteria and examples per section
5. Validate against SSOT: avoid duplicating information

## Example Invocation
- "/doc-structure: propose an IA and section plan for the new feature"

## Output
Generate `docs/_working/structure-plan.md` with:
- Outline and navigation
- Cross-reference map
- Template assignments
- Acceptance criteria and example lists
