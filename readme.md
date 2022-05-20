```bash
pnpm install
pnpm run prod
```

Then go to http://localhost:3000.

```
Error: Cannot find module 'stream'
    at webpackEmptyContext (file:///home/romuuu/tmp/some_error/dist/main.js:34251:10)
    at loadModule (file:///home/romuuu/tmp/some_error/dist/main.js:34206:27)
    at loadStreamModule (file:///home/romuuu/tmp/some_error/dist/main.js:34195:12)
    at loadNodeStreamModule (file:///home/romuuu/tmp/some_error/dist/main.js:34179:32)
    at createPipeWrapper (file:///home/romuuu/tmp/some_error/dist/main.js:34049:80)
    at renderToNodeStream (file:///home/romuuu/tmp/some_error/dist/main.js:33861:104)
    at async Object.renderToStream (file:///home/romuuu/tmp/some_error/dist/main.js:33808:18)
    at async render (file:///home/romuuu/tmp/some_error/dist/main.js:47452:18)
    at async executeRenderHook (file:///home/romuuu/tmp/some_error/dist/main.js:44013:20)
    at async renderPage_ (file:///home/romuuu/tmp/some_error/dist/main.js:43620:30)
```

Fixed at the `fix` branch of this repo.
