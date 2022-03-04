const mongoose = require('mongoose');

const listingAndReviewsSchema = new mongoose.Schema({
    listing_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    space: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    neighborhood_overview: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    transit: {
        type: String,
        required: true
    },
    access: {
        type: String,
        required: true
    },
    listing_url: String,
    house_rules: {
        type: String,
        required: false,
        default: 'There are no rules, enjoy!'
    },
    property_type: {
        type: String,
        required: True,
        enum: ['house', 'apartment', 'condominimum']
    },
    // wip, stil have to add more
})