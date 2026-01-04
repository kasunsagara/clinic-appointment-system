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

    const doctor = new Doctor(req.body);

    try {
        await doctor.save();

        res.json({
            message: "Doctor created successfully"
        })
    } catch(error) {
        res.json({
            message: "Doctor not created"
        })
    }
}

