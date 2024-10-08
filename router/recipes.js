// routes/recipes.js
const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getAllRecipes);
router.post('/', recipesController.createRecipe);
router.get('/:id', recipesController.getRecipe);
router.put('/:id', recipesController.updateRecipe);
router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;