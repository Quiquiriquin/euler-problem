var express = require('express');
var router = express.Router();
import  ProblemController from '../controllers/ProblemController'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const ProblemRoute = "/solve";
router.post(ProblemRoute, ProblemController.solveProblem )
router.get(ProblemRoute, ProblemController.list)
router.get(`${ProblemRoute}/:id`, ProblemController.show)

module.exports = router;
