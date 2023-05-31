const pipe = (functions) => (value) =>
  functions.reduce(
    (currentValue, currentFunction) => currentFunction(currentValue),
    value
  );

export function defineRouteBuilder(options) {
  const { middlewares = [] } = options ?? {};

  const globalMiddleware = pipe(middlewares);

  function defineRoute(handler, options) {
    const { middlewares = [] } = options ?? {};
    return pipe([globalMiddleware, ...middlewares, handler]);
  }
  return defineRoute;
}
