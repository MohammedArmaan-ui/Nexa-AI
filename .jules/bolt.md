## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2025-05-15 - [Safe Consolidation of Sibling Text Components]
**Learning:** Consolidating sibling `Text` components into a single node with newlines reduces the native shadow tree complexity. However, this is only safe if the shared styles do NOT include layout-impacting properties (like margins, padding, or borders) that would have been applied per-item previously.
**Action:** Before consolidating `Text` nodes, verify the `StyleSheet` for layout properties and ensure all items are strings, not React elements.
