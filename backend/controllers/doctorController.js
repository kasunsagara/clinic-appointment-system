import Doctor from "../models/doctor.js";

export async function createDoctor(req, res) {

    if(req.user == null) {
        res.json({
            message: "Please login as admin to create Doctor"
        })
        return
    }

    if(req.user.role != "admin") {
        res.json({
            message: "Please login as admin to create Doctor"
        })
        return
    }

    const newDoctorData = new Doctor(req.body);

    try {
        await newDoctorData.save();

        res.json({
            message: "Doctor created successfully"
        })
    } catch(error) {
        res.json({
            message: "Doctor not created"
        })
    }
}

export async function getDoctors(req, res) {

    if(req.user.role != "admin" && req.user.role != "patient") {
        res.json({
            message: "Access denied"
        })
        return
    }

    try {
        const doctorList = await Doctor.find({isActive: true}).populate("userId", "name email phone");

        res.json({
            list: doctorList
        })
    } catch(error) {
        res.json({
            error: error.message
        })
    }
}

 



