"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../../models/task"));
const helper_1 = require("../../helper");
const getTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = (0, helper_1.getId)(req.headers.authorization);
        const tasks = yield task_1.default.find({ user });
        res.status(200).json({ tasks });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" });
        next(error);
    }
});
exports.getTasks = getTasks;
const getTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const user = (0, helper_1.getId)(req.headers.authorization);
        const task = yield task_1.default.findOne({ id, user });
        res.status(200).json({ task });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" });
        next(error);
    }
});
exports.getTask = getTask;
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const user = (0, helper_1.getId)(req.headers.authorization);
        if ((0, helper_1.confirmError)(body, res)) {
            return;
        }
        const task = new task_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
            user: user
        });
        const newTask = yield task.save();
        const allTasks = yield task_1.default.find({ user });
        res
            .status(201)
            .json({ message: "Task added", task: newTask, tasks: allTasks });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" });
        next(error);
    }
});
exports.addTask = addTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const user = (0, helper_1.getId)(req.headers.authorization);
        const task = yield task_1.default.findOne({ id, user });
        if (task) {
            const updateTask = yield task_1.default.findByIdAndUpdate({ _id: id }, body);
            const allTasks = yield task_1.default.find({ user });
            res.status(200).json({
                message: "Task updated",
                task: updateTask,
                tasks: allTasks,
            });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" });
        next(error);
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = (0, helper_1.getId)(req.headers.authorization);
        const task = yield task_1.default.findOne({ id, user });
        if (task) {
            const deletedTask = yield task_1.default.findByIdAndRemove(id);
            const allTasks = yield task_1.default.find({ user });
            res.status(200).json({
                message: "Task deleted",
                task: deletedTask,
                tasks: allTasks,
            });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error in Task of API: /task" });
        next(error);
    }
});
exports.deleteTask = deleteTask;
