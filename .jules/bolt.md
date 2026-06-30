## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2025-06-28 - [React Native View Hierarchy & Style Allocation]
**Learning:** Consolidating sibling Text components into a single Text with newlines reduces the native Shadow Tree node count, which speeds up layout calculations and reduces memory usage in long lists. Furthermore, using ternary operators for conditional styles (style={condition ? styles.a : styles.b}) instead of dynamic arrays (style={[styles.a, condition && styles.b]}) eliminates both object and array allocations on every render cycle.
**Action:** Consolidate static lists into single Text blocks when possible (verifying spacing via lineHeight) and prefer static style references in high-frequency re-rendering components like forms.
