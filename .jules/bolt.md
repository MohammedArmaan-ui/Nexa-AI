## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.

## 2026-06-20 - [Consolidating Sibling Text Components]
**Learning:** Consolidating multiple sibling `Text` components into a single `Text` component using newline characters (`\n`) reduces the native Shadow Tree view count. In React Native, each `Text` component translates to a native view. Reducing the number of views simplifies the layout pass and reduces memory usage, especially in long lists or repeated UI elements like feature lists.
**Action:** When rendering lists of strings that share the same style, prefer a single `Text` component with joined strings over mapping to multiple `Text` components.
