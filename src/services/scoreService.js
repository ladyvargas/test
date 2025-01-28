class ScoreService {
    static calculateScore(numbers) {
      return numbers.reduce((score, num) => {
        if (num === 5) return score + 5;
        if (num % 2 === 0) return score + 1;
        return score + 3;
      }, 0);
    }
  }
  
  module.exports = ScoreService;