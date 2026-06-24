## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2025-05-15 - [Avoid Unsafe Text Consolidation]
**Learning:** Consolidating sibling `Text` components into a single `Text` with `\n` to reduce native view count is a micro-optimization that can break layout (margins/padding) and accessibility (screen readers).
**Action:** Do not consolidate `Text` components unless layout compatibility is explicitly verified and a significant performance bottleneck is proven. Prefer `useMemo` for static sections instead.
