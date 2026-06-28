## 2025-05-15 - [Memoizing Static Form Sub-components]
**Learning:** In React Native forms, state updates on every keystroke (email/password) trigger re-renders of the entire screen. Memoizing static sections like social login buttons or static lists using `useMemo` prevents unnecessary re-renders of these components during high-frequency state updates.
**Action:** Always identify UI sections that don't depend on form input state and wrap them in `useMemo` to keep input interaction fluid.
## 2025-06-28 - [React Native Text Consolidation]
**Learning:** Consolidating sibling `Text` components into a single multi-line `Text` reduces the native Shadow Tree view count. However, this change can cause visual regressions if the original `Text` styles included layout-impacting properties (like vertical margins) that behave differently when applied to a single block.
**Action:** Before consolidating `Text` elements, verify that their shared styles do not contain layout properties that would affect inter-line spacing differently in a single block.
