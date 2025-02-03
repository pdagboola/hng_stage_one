const returnDate = require("../helpers/formatDate");

const indexController = async (req, res) => {
  try {
    const date = returnDate();
    return res.status(200).json({
      email: "pdagboola@gmail.com",
      current_datetime: `${date}`,
      github_url: "https://github.com/pdagboola/hng_stage_one",
    });
  } catch (err) {
    res.status(500).json({ sucess: false, message: "An error occurred." });
  }
};

module.exports = indexController;
