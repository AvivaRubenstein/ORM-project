const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category = await Category.findAll({include: [{model: Product}]});
    res.status(200).json(category);
  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
  //if the person does a search for a category using an id which doesn't exist, return an error message
    if(!category){
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
  //otherwise, return the category data for that id
    res.status(200).json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  //request body should look like:
  //{
  // "category_name" : "nameOfCategory" 
  //}
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(
     { // in this case, only the category name will be updated
       category_name: req.body.tag_name
     },
     {
       // Gets the category based on the id given in the request parameters
       where: {
         id: req.params.id,
       },
     }
   );
     if(!updatedCategory) {
       res.status(404).json({message: "No category found with this id!"});
       return;
     }
       // the .update functionality doesn't return the Category object, so instead we are just returning a message which says that it went through successfully
       res.status(200).json({message: "Update complete!"});
    } catch(err) {
     res.status(500).json(err);
   }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const category = await Category.destroy(
      {
        where: { 
          id: req.params.id 
        }
      }); 
      if(!category) {
        res.status(404).json({message: 'No category found with this id!'});
        return;
      }
      res.status(200).json({message:"Category deleted!"});

    } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
