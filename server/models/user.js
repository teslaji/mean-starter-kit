import { ModuleExportMetadata } from '@angular/compiler-cli/src/metadata';
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    isAdmin: Boolean
})

module.exports = mongoose.model('user', userSchema,'users')