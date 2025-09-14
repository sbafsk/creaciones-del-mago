# Session Resumption Checklist

## 5-Minute Context Recovery
1. [ ] Review docs/status/progress.yaml
2. [ ] Check session-notes.md for last session context
3. [ ] Scan TODO comments in current branch
4. [ ] Review test failures or CI status

## Development Environment
1. [ ] Start dev server
2. [ ] Open key files from quick reference
3. [ ] Check for dependency updates
4. [ ] Verify tests pass

## When Starting New Feature
1. [ ] Review architectural patterns in docs/architecture/
2. [ ] Check similar implementations for consistency
3. [ ] Create implementation plan using templates
4. [ ] Update progress.yaml with new task

## Example
```bash
# Fast resume routine (Next.js)
yarn install --frozen-lockfile
cp .env.local.example .env.local 2>/dev/null || true
yarn type-check && yarn test -i || true
yarn dev
# Open links:
# - docs/session-management/session-notes.md
# - docs/status/progress.yaml
```
