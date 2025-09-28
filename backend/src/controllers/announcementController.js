const Announcement = require('../models/announcementModel');

const createAnnouncement = async (req,res) => {
    try {
        const { title,message,target_grade,target_section } = req.body;
        const created_by = req.user.user_id;

        if(req.user.role==='teacher' && target_grade!==req.user.grade_level)
            return res.status(403).json({message:'Cannot post outside your grade'});

        const announcement = await Announcement.create({ title,message,created_by,target_grade,target_section });
        res.status(201).json(announcement);
    } catch(err){ res.status(500).json({ error: err.message }); }
};

const getAnnouncementsForStudent = async (req,res) => {
    try {
        const announcements = await Announcement.getForStudent(req.user.grade_level);
        res.json(announcements);
    } catch(err){ res.status(500).json({ error: err.message }); }
};

module.exports = { createAnnouncement,getAnnouncementsForStudent };
