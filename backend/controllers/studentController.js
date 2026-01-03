import Student from "../models/student.js";

export async function createStudent(req, res) {
    try {
        const student = new Student(req.body)

        await student.save()

        res.json({
            message: "Student created"
        })
    } catch {
        res.json({
            message: "Not student created"
        })
    }
}

export async function getStudents(req, res) {
    try {
        const studentList = await Student.find()

        res.json({
            list: studentList
        })
    } catch(error) {
        res.json({
            error: error.message
        })
    }
}

export async function getStudentByName(req, res) {
    try {
        const student = await Student.findOne({name: req.params.name})

        res.json({
            student: student
        })
    } catch(error) {
        res.json({
            error: error.message
        })
    } 
}

export async function deleteStudent(req, res) {
    try {
        await Student.deleteOne({name: req.params.name})

        res.json({
            message: "Student deleted"
        })
    } catch(error) {
        res.json({
            message: "Not student deleted"
        })
    }
}









































