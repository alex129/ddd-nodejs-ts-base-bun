import { Container } from 'inversify';
import TYPES from './types';
import { Ninja, Shuriken, Porra } from './di-classes';

const container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Porra);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;
