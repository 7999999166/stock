import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte';
import Home from './Pages/Pedal.svelte';
import Products from './Pages/Plain.svelte';
import Balti from './Pages/Balti.svelte';
import Pawali from './Pages/Pawali.svelte';
import Ration from './Pages/Ration.svelte';

initPathRouter([
  { path: '/', component: Home },
  { path: '/plain', component: Products },
  { path: '/balti', component: Balti },
  { path: '/pawali', component: Pawali },
  { path: '/ration', component: Ration }
  ])


let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
