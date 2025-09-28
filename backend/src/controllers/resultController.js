const Result = require('../models/resultModel');

const createResult = async (req,res)=>{
    try{
        if(req.user.role==='teacher' && req.body.teacher_id!==req.user.user_id)
            return res.status(403).json({message:'Cannot add results for other teachers'});
        const result = await Result.create(req.body);
        res.status(201).json(result);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const getResultsForStudent = async (req,res)=>{
    try{
        const results = await Result.getByStudent(req.user.student_id);
        res.json(results);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { createResult,getResultsForStudent };
