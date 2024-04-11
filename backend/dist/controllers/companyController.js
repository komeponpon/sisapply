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
const Company = require('../models/Company');
// 新規会社登録
exports.createCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield Company.create(req.body);
        res.status(201).json(company);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred.' });
        }
    }
});
// 会社情報の取得
exports.getCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
// 会社情報の更新
exports.updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred.' });
        }
    }
});
// 会社の削除
exports.deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
