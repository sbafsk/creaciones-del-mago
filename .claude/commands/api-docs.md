# API Documentation Generator Command

> Rationale: API docs should be consistent, complete, and testable.

## When to Use
- New endpoints are added or changed
- Major API version updates

## Inputs
- Source code (endpoints/controllers)
- Existing API docs and examples

## Step-by-Step
1. Identify endpoints and group by resource
2. Extract params, types, auth, and error shapes
3. Create/Update tables and runnable examples
4. Add links to related guides and tutorials
5. Validate curl/HTTP examples locally

## Example Invocation
- "/api-docs: generate or update docs for the new orders endpoints"

## Output
- Complete API reference using `docs/templates/api-documentation.md`
- Interactive examples and error handling
- Links to related docs and tutorials
