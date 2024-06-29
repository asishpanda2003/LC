const ofcUtilityModel = require('../Model/OfficeUtilitySchema');

exports.createCourseController = async (req, res) => {
    try {
        console.log('req.body', req.body);
        const { author, fileType, cloudinaryLink } = req.body;

        if (!author || !fileType || !cloudinaryLink) {
            return res.status(400).send({
                success: false,
                message: "All fields are required to continue"
            });
        }

        const newData = new ofcUtilityModel({ author, fileType, cloudinaryLink });
        await newData.save();
        res.status(201).send({
            success: true,
            message: "Data added successfully",
        });
    } catch (error) {
        console.log('error', error);
        res.status(400).send({
            success: false,
            message: "Something went wrong while uploading",
            error
        });
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await ofcUtilityModel.find();
        res.send(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch data",
            error
        });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await ofcUtilityModel.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).send({
                success: false,
                message: "Data not found"
            });
        }

        res.send({
            success: true,
            message: "Data deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).send({
            success: false,
            message: "Failed to delete data",
            error
        });
    }
};
