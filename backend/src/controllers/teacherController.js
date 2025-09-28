const Teacher = require('../models/teacherModel');

const getAllTeachers = async (req,res)=>{
    try{
        const teachers = await Teacher.getAll();
        res.json(teachers);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const createTeacher = async (req,res)=>{
    try{
        const teacher = await Teacher.create(req.body);
        res.status(201).json(teacher);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { getAllTeachers,createTeacher };
