const Joi = require('joi');

module.exports.listingShema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description :Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0),
        image: {
            url: Joi.string().allow("", null),
            filename: Joi.string().allow("", null),
          },
    }).required()
});

