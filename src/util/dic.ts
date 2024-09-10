export class DIC {
  dependencies: { [k: string]: any };
  factories: any;

  constructor() {
    this.dependencies = {};
    this.factories = {};
  }

  register(fn: Function, factory: any) {
    this.factories[fn.name] = factory;
  }

  get(name: string) {
    if (!this.dependencies[name]) {
      const factory = this.factories[name];
      if (!factory) {
        throw new Error('Failed to create: ' + name);
      }
      this.dependencies[name] = factory();
    }
    return this.dependencies[name];
  }
}

const createInjector = () => {
  const dic = new DIC();
  const inject = (dep: string) => {
    return dic.get(dep);
  };
  return { dic, inject };
};

export const { dic, inject } = createInjector();
