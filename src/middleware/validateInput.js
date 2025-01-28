function validateInput(req, res, next) {
    const { numbers } = req.body;
  
    if (!numbers || !Array.isArray(numbers)) {
      return res.status(400).json({
        success: false,
        error: 'Se requiere un array de números en el campo "numbers"'
      });
    }
  
    if (!numbers.every(num => typeof num === 'number')) {
      return res.status(400).json({
        success: false,
        error: 'Todos los elementos deben ser números'
      });
    }
  
    next();
  }
  
  module.exports = validateInput;