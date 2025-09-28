const Schedule = require('../models/scheduleModel');

const createSchedule = async (req,res)=>{
    try{
        const schedule = await Schedule.create(req.body);
        res.status(201).json(schedule);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const getScheduleForStudent = async (req,res)=>{
    try{
        const schedule = await Schedule.getByGrade(req.user.grade_level);
        res.json(schedule);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { createSchedule,getScheduleForStudent };
