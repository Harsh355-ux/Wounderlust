const Joi = require('joi');
const review = require('./models/review');

module.exports.listingSchema = Joi.object({
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

module.exports.reviewSchema = Joi.object({
    reviews: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        Comment: Joi.string().required(),

    }).required()
})

