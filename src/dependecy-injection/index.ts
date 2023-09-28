import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import path from 'path';

const srcDir = path.join(__dirname, '../');
console.log(`Loading dependency container from src ${srcDir}`);
const container = new ContainerBuilder(false, srcDir);
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV ?? 'dev';

const pathToYaml = `${__dirname}/application_${env}.yaml`;

export const loadDependencyContainer = async () => {
  console.log(`Loading dependency container from ${pathToYaml}`);
  await loader.load(pathToYaml);
};

export default container;
