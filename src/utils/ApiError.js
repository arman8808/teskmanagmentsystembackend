class ApiError extends Error {
  constructor(
    statusCode,
    message = "SomeThing Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;
  }
}
export { ApiError };
