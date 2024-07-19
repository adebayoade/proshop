const asyncHandler = (fn) => (req, res, next) =>
  // Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
