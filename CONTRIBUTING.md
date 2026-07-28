## Commit Message Convention

This project follows a Conventional Commits-style format:

```text
type: concise English summary
```

Use a short, imperative English summary after the type.

Common Types

`feat`: user-facing feature additions.

`fix`: bug fixes and broken behavior recovery.

`docs`: documentation-only changes.

`test`: test coverage, validators, or test infrastructure.

`ci`: CI/CD workflow changes.

`chore`: maintenance, tooling, dependency, or project policy updates.

`refactor`: code structure changes without behavior changes.

`style`: formatting-only changes that do not affect behavior.

`data`: content, seed data, JSON, fixtures, or domain data updates.

`perf`: performance improvements.

`build`: build system or packaging changes.

Examples

```text
feat: add character selection flow
fix: restore corrupted Korean UI copy
docs: update release checklist
test: add scenario graph validation
ci: add validation workflow
chore: update CI Node runtime
refactor: simplify scenario registry
data: update episode metadata
style: format markdown tables
```

Notes

Keep each commit focused on one purpose.

Do not mix data updates, UI changes, tests, and documentation in one commit unless they are tightly related.

Prefer `data:` for scenario files, localization content, fixtures, seed data, or JSON-only content updates.

Prefer `chore:` for maintenance tasks that do not change user-facing behavior.

Prefer `fix:` when the change corrects broken behavior.

Prefer `docs:` when only documentation changes.
