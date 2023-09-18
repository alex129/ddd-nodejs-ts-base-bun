import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import path from 'path';

const srcDir = path.join(__dirname);
const container = new ContainerBuilder(true, srcDir);
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV ?? 'dev';

const pathToYaml = `${__dirname}/application_${env}.yaml`;
console.log(`Loading ${pathToYaml}`);
await loader.load(pathToYaml);

export default container;
