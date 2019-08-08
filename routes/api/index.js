const router = require("express").Router();
const userRoutes = require("./userRoutes");
const artistRoutes = require("./artistRoutes");
const youtubeRoutes = require("./youtubeRoutes");

router.use("/users", userRoutes);
router.use("/artist", artistRoutes);
router.use("/youtube", youtubeRoutes);

module.exports = router;