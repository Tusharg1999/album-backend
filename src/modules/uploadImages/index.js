async function imageUploads(req, res) {
    res.send(req.files)
}
module.exports = imageUploads
