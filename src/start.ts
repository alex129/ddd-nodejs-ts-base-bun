import 'dotenv/config';
import { RocketProjectBackendApp } from './RocketProjectBackendApp';
import { loadDependencyContainer } from './dependecy-injection';

try {
  loadDependencyContainer().then(() => {
    new RocketProjectBackendApp().start();
  });
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', (err) => {
  console.log('uncaughtException', err);
  process.exit(1);
});
