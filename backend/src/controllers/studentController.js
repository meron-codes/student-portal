const Student = require('../models/studentModel');

const getAllStudents = async (req,res)=>{
    try{
        const students = await Student.getAll();
        res.json(students);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const getStudentById = async (req,res)=>{
    try{
        const student = await Student.getById(req.params.id);
        if(!student) return res.status(404).json({message:'Student not found'});
        res.json(student);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const createStudent = async (req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { getAllStudents,getStudentById,createStudent };
