import { Response } from "express";

export const badRequest = (res: Response, customMessage?: string) => {
    return res.status(400).json({
        status: "failed",
        code: 400,
        serverMsg: customMessage ? customMessage : "Kindly provide all information",
    });
};



export const successResponse = (
    res: Response,
    data?: any,
    customMessage?: string
) => {
    return res.status(200).json({
        status: "success",
        code: 200,
        serverMsg: customMessage && customMessage,
        data: data || null,
    });
};

export const serverError = (
    res: Response,
    customMessage?: string,
    error?: any
) => {
    console.log(error);
    return res.status(500).json({
        status: "failed",
        code: 500,
        serverMsg: customMessage ? customMessage : error.message.message,
    });
};

export const customResponse = (
    res: Response,
    statusCode: number,
    statusMessage: boolean,
    customMessage?: string,
    data?: any
) => {
    return res.status(statusCode).json({
        status: statusMessage ? "success" : "failed",
        code: statusCode,
        serverMsg: customMessage && customMessage,
        data: data ? data : null,
    });
};
