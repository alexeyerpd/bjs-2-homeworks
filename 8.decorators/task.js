function cachingDecoratorNew(func) {
  const cache = {};
  const cacheList = [];

  function updateCache(hash, result) {
    if (cacheList.length >= 5) {
      const deleted = cacheList.shift();
      delete cache[deleted.hash];
    }

    cacheList.push({ hash });
    cache[hash] = result;
  }

  return function(...args) {
    const hash = args.toString();
    if (hash in cache) {
      return `Из кэша: ${cache[hash]}`;
    }

    const result = func(...args);
    updateCache(hash, result);
    return `Вычисляем: ${result}`;
  }
}

// ещё лучше версия)
function debounceDecoratorNew(func, timeout) {
  let tempArgs;
  let timeoutId;

  function run(args) {
    func(...args);
    timeoutId = setTimeout(next, timeout);
  }

  function next() {
    if (timeoutId) timeoutId = null;

    if (tempArgs) {
      run(tempArgs);
      tempArgs = null;
    }
  }

  return function(...args) {
    if (timeoutId) {
      tempArgs = args;
    } else {
      run(args);
    }
  }
}

function debounceDecorator2(func, timeout) {
  let timeoutId;

  function run(args) {
    func(...args);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, timeout);
  }

  function debounced(...args) {
    debounced.count += 1;
    if (!timeoutId) {
      run(args);
    } 
  }

  debounced.count = 0;

  return debounced;
}
