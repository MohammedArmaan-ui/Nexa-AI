## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2025-06-28 - [Avoiding Inline Style Object Allocations]
**Learning:** Using inline style objects like `style={[styles.button, isLoading && { opacity: 0.7 }]}` causes a new object literal to be allocated on every single render. In screens with high-frequency state updates (e.g., typing in a form), this increases garbage collection pressure.
**Action:** Always extract conditional styles into the `StyleSheet` to maintain static object references and improve memory efficiency.
