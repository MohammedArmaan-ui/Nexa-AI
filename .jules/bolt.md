## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2025-06-28 - [Shadow Tree and Allocation Reductions]
**Learning:** Consolidating sibling Text components into a single multi-line Text component reduces the native Shadow Tree node count, which is more efficient for long lists or repeated UI segments. Additionally, using ternary operators with static StyleSheet references for conditional styling prevents unnecessary object/array allocations during high-frequency render cycles (e.g., typing in form fields).
**Action:** Consolidate sibling Text components with .join('\n') when possible, and prioritize static StyleSheet ternary lookups over inline style arrays for conditional UI states.
