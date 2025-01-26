const applicationModel = require('../models/user');
const { v4: uuidv4 } = require('uuid')

exports.createApplication = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, phoneNumber } = req.body;
        const existApplication = await applicationModelModel.findAll({ where: { email: email } });

        if (existApplication.length == 1) {
            return res.status(400).json('Appplication already exist')
        }

        const createApplication = await applicationModelModel.create({
            id: uuidv4(),
            firstName,
            lastName,
            gender,
            email,
            phoneNumber
        });

        res.status(201).json({
            message: 'Application created successfully',
            totalApplication: createApplication.length,
            data: createApplication
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}



exports.getAllApplications = async (req, res) => {
    try {
        const applications = await applicationModel.findAll();
        res.status(200).json({
            message: 'Check application below',
            data: applications
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}