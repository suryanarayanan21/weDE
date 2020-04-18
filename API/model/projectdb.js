const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');

const projectSchema = new mongoose.Schema({
    projectID: {
        type: String,
        required: true,
        unique: true
    },
    projectName: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },
    collaborators: {
        type: Array,
        required: true
    }

});


function validateProject(project) {

    const schema = Joi.object({
        projectID: Joi.string()
            .min(5)
            .max(50)
            .required(),

        projectName: Joi.string()
            .min(5)
            .max(50)
            .required(),

        code: Joi.string().required(),

        collaborators: Joi.required()



    });
    return schema.validate(project);
}

const project = mongoose.model('project', projectSchema);
module.exports = { project, validateProject };

