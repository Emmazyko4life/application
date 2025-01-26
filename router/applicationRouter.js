const { Router } = require('express');
const { createApplication } = require('../controller/applicationController');

const applicationRouter = require('express').Router();

applicationRouter.post('/student', createApplication);

module.exports = applicationRouter;