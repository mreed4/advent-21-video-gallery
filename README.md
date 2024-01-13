Here we had to access a provided data structure then iterate over it, similar to how one would in a `fetch`. The data structure appears to be the result of an actual API call, but no call is actually made.

I improved the provided CSS to (1) have the app take up the entire width of the screen, to (2) prevent the gallery images from distorting, and to (3) remove the default styling of the `anchor` elements. Among other strange choices, the provided CSS caused the width of the app to a fraction of the width of the window.
