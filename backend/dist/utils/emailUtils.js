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
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: config.emailPort,
    secure: true,
    auth: {
        user: config.emailUser,
        pass: config.emailPassword,
    },
});
exports.sendEmail = (to, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield transporter.sendMail({
            from: config.emailFrom,
            to,
            subject,
            text,
        });
        console.log(`Email sent: ${info.messageId}`);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(`Error sending email: ${err.message}`);
        }
        else {
            console.error(`Error sending email: An unknown error occurred.`);
        }
    }
});
