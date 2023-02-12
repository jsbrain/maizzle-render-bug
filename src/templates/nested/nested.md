---
heading: "Nested"
---

# {{ page.heading }}

<!-- Does not work when saving this file (console will show "empty html" error) but saving any other file works and triggers re-render (update):
  1. Uncomment `.prose-content` class in `utilities.css`
  2. Only enable the line below
  3. (Make any change and) hit save (will show empty html error)
  4. Go to `main.html` and hit save
  5. Will apply all styles and changes correctly
 -->
<!-- <div class="prose-content">nested</div> -->
<!-- Works but saving this file will remove the prose styling. Saving any other file e.g. (main.html) will properly render the prose styling again ...
  1. Comment `.prose-content` class in `utilities.css`
  2. Only enable the line below
  3. (Make any change and) hit save (will remove the prose styling)
  4. Go to `main.html` and hit save
  5. Will apply all styles and changes correctly
 -->
<div class="prose bg-red-500">nested</div>
