const ScoreService = require('../services/scoreService');

class ScoreController {
  static async calculateScore(req, res, next) {
    try {
      const { numbers } = req.body;
      const score = ScoreService.calculateScore(numbers);
      
      res.json({
        success: true,
        data: {
          numbers,
          score,
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async healthCheck(req, res) {
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = ScoreController;