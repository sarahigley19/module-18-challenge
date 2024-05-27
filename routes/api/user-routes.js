const { Router } = require("express");
const {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
} = require("../../controllers/user-controller");

const router = Router();

router.get("/api/users", getAllUser);
router.post("/api/users", createUser);

router.get("/api/users/:id", getUserById);
router.put("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

router.post("/api/users/:userId/friends/:friendId", addFriend);
router.delete("/api/users/:userId/friends/:friendId", removeFriend);

module.exports = router;
