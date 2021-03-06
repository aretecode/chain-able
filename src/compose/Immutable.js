const props = require('../deps/props')
const ChainedMap = require('../ChainedMap')

const {ignored} = props
let immutablejs

/**
 * @TODO:
 *  - [] use immutablejs scoped var to extend prototype
 *  - set the type to use,
 *  - auto extend methods of that type
 *  - do not spread args
 * https://facebook.github.io/immutable-js/docs/#/Collection
 */

module.exports = (SuperClass = ChainedMap, opts) => {
  return class ImmutableChain extends SuperClass {
    // @TODO not sure parent is best
    constructor(parent = null) {
      super(parent)
    }

    static immutablejs(lib) {
      immutablejs = lib
      return ImmutableChain
    }
    immutablejs(lib) {
      immutablejs = lib
      return this
    }

    // @TODO if class, etc
    structure(structure) {
      const copyProps = (source, target) =>
        props(source).forEach(prop => {
          if (typeof prop === 'symbol' || !prop.match) return
          else if (prop.match(ignored)) return
          const hasProp = Object.prototype.hasOwnProperty.call(target, prop)
          if (hasProp === true || target[prop] !== undefined) return

          // console.log({prop})
          target[prop] = (arg1, arg2, arg3, arg4, arg5) => {
            target.immutable = target.immutable[prop](
              arg1,
              arg2,
              arg3,
              arg4,
              arg5
            )
            return target
          }

          if (typeof target[prop] !== 'function') return
          Object.defineProperty(target[prop], 'name', {
            value: prop,
          })
        })

      copyProps(structure.prototype, this)
      return this
    }

    data(store): ImmutableChain {
      this.immutable = store
      return this
    }

    // these are the only 2 methods that really use the immutable
    // and return something aside from the chain
    get(key, useImmutable = false) {
      if (this.immutable !== undefined && useImmutable !== false) {
        return this.immutable.get(key)
      }
      return super.get(key)
    }
    getIn(...args) {
      return this.immutable.getIn(...args)
    }

    delete(key) {
      if (this.immutable !== undefined) {
        this.immutable = this.immutable.delete(key)
      }

      super.delete(key)
      return this
    }

    set(key, value) {
      if (this.immutable !== undefined) {
        this.immutable = this.immutable.set(key, value)
      }
      super.set(key, value)
      return this
    }

    merge(obj) {
      if (this.immutable !== undefined) {
        this.immutable = this.immutable.merge(obj)
      }
      super.merge(obj)
      return this
    }

    equals(obj) {
      if (obj !== null && typeof obj === 'object' && obj.immutable) {
        return this.immutable.equals(obj.immutable)
      }
      return this.immutable.equals(obj)
    }

    setIn(...args) {
      this.immutable = this.immutable.setIn(...args)
      return this
    }
    toJS(computed = false) {
      return this.immutable.toJS(computed)
    }
  }
}
