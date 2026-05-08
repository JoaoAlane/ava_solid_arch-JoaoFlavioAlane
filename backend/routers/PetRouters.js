const router = require("express").Router();

const PetController = require("../controllers/PetController");

const verifyToken = require("../helpers/verify-token");
const {imageupload} = require("../helpers/image-upload");

router.post('/create', verifyToken, imageupload.array('images', 5), PetController.create);
router.get('/getall', PetController.getAll);
router.get('/getAllUserPets', verifyToken, PetController.getAllUserPets);
router.get('/getAllUserAdoptions', verifyToken, PetController.getAllUserAdoptions);

router.post('/schedule/:id', verifyToken, PetController.schedule);
router.post('/concludeAdoption/:id', verifyToken, PetController.concludeAdoption);

router.patch('/:id', verifyToken, imageupload.array('images', 5), PetController.update);
router.delete('/:id', verifyToken, PetController.removePetById);
router.get('/:id', PetController.getPetById);

module.exports = router;