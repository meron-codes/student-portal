const Feedback = require('../models/feedbackModel');

const createFeedback = async (req,res)=>{
    try{
        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const getFeedbackForStudent = async (req,res)=>{
    try{
        const feedback = await Feedback.getByStudent(req.user.student_id);
        res.json(feedback);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { createFeedback,getFeedbackForStudent };
