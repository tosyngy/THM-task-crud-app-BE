"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: false,
        default: false
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Task", taskSchema);
