const Opportunity = require('../models/opportunityModel');

const createOpportunity = async (req,res)=>{
    try{
        const opportunity = await Opportunity.create(req.body);
        res.status(201).json(opportunity);
    }catch(err){ res.status(500).json({error: err.message}); }
};

const getOpportunitiesForStudent = async (req,res)=>{
    try{
        const opportunities = await Opportunity.getForStudent(req.user.grade_level);
        res.json(opportunities);
    }catch(err){ res.status(500).json({error: err.message}); }
};

module.exports = { createOpportunity,getOpportunitiesForStudent };
