function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    res.status(err.status || 500).json({
      success: false,
      error: {
        message: err.message || 'Error interno del servidor',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
      }
    });
  }
  
  module.exports = errorHandler;