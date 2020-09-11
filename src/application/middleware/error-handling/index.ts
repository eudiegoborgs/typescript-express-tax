export class ErrorHandling {
  static execute = (error, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(error);
    try {
      if(error.code) {
        res.status(error.code).json({
          ...error,
          status: "error",
        });
        return;
      }
      res.status(500).json({
        code: 500,
        message: `${error.name} ${error.message}`,
      })
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: `${error.name} ${error.message}`,
      })
    };
  }
}
