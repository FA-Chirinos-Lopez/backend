'use strict';

/**
 * theme-color service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::theme-color.theme-color');
