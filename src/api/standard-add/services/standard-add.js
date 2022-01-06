'use strict';

/**
 * standard-add service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::standard-add.standard-add');
